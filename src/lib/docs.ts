export const DOCS_BASE_PATH = "/docs" as const;

export function docsHref(path = ""): string {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  return normalizedPath ? `${DOCS_BASE_PATH}/${normalizedPath}` : DOCS_BASE_PATH;
}
