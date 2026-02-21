const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'chisss';
const REPO_NAME = 'obsidian-vault';
const BRANCH = 'master';

export interface GitHubTreeItem {
  path: string;
  mode: string;
  type: 'blob' | 'tree';
  sha: string;
  size?: number;
  url: string;
}

function getHeaders() {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
  }
  return headers;
}

/** 获取完整文件树（单次 API 调用） */
export async function getRepoTree(): Promise<GitHubTreeItem[]> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`,
    { headers: getHeaders() }
  );
  if (!res.ok) {
    throw new Error(`GitHub Trees API error: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.tree;
}

/** 获取单个文件内容（Base64 解码） */
export async function getFileContent(filePath: string): Promise<string> {
  const encodedPath = filePath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');

  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodedPath}?ref=${BRANCH}`,
    { headers: getHeaders() }
  );
  if (!res.ok) {
    throw new Error(`GitHub Contents API error: ${res.status} for path: ${filePath}`);
  }
  const data = await res.json();
  return Buffer.from(data.content, 'base64').toString('utf-8');
}
