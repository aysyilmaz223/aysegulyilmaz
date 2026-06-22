// İç bağlantıları ve görselleri base yoluna göre düzeltir.
// GitHub Pages’te base '/aysegulyilmaz/', kök yayında ise '/' olur.
// Dış linkler (http, mailto), çapa (#) ve boş değerler olduğu gibi döner.
export function withBase(path: string): string {
  if (!path) return path;
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL; // örn. '/aysegulyilmaz/' veya '/'
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  return b + (path.startsWith('/') ? path : '/' + path);
}
