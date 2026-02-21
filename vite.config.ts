import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * 本地开发时处理 /api/* 请求，模拟 Vercel Serverless Functions。
 * 生产环境由 Vercel 平台直接处理，此插件不生效。
 */
function apiDevPlugin(): Plugin {
  return {
    name: 'api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url!, `http://${req.headers.host}`);

        if (!url.pathname.startsWith('/api/blog/')) return next();

        const routes: Record<string, string> = {
          '/api/blog/list': './api/blog/list.ts',
          '/api/blog/article': './api/blog/article.ts',
        };

        const handlerPath = routes[url.pathname];
        if (!handlerPath) return next();

        try {
          const mod = await server.ssrLoadModule(handlerPath);
          const handler = mod.default;

          // 构造 Vercel 兼容的 req / res
          const vercelReq = req as any;
          vercelReq.query = Object.fromEntries(url.searchParams);

          const vercelRes = res as any;
          vercelRes.status = (code: number) => {
            res.statusCode = code;
            return vercelRes;
          };
          vercelRes.json = (data: any) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            return vercelRes;
          };

          await handler(vercelReq, vercelRes);
        } catch (e: any) {
          console.error(`[api-dev] ${url.pathname} error:`, e);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // 加载所有 .env 变量（无前缀限制），注入到 process.env 供 API 函数使用
  const env = loadEnv(mode, '.', '');
  Object.assign(process.env, env);

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), tailwindcss(), apiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
