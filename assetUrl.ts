/** Prefix public asset paths with Vite base (needed for GitHub project Pages). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\//, '');
  const encoded = clean
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${base}${encoded}`;
}
