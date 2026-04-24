const BASE_URL = import.meta.env.BASE_URL;

export function withBase(path: string) {
  if (!path || path.startsWith("#") || /^[a-z]+:/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const base = BASE_URL === "/" ? "" : BASE_URL.replace(/\/$/, "");

  return `${base}${normalizedPath}`;
}

export function stripBase(path: string) {
  const base = BASE_URL === "/" ? "" : BASE_URL.replace(/\/$/, "");

  if (base && path.startsWith(base)) {
    const strippedPath = path.slice(base.length);
    return strippedPath || "/";
  }

  return path;
}
