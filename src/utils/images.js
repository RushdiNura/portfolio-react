// Vite resolves these globs at build time — any file you drop into
// these folders is automatically picked up, no manual imports needed.
const projectImages = import.meta.glob(
  "/src/assets/projects/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const certificateImages = import.meta.glob(
  "/src/assets/certificates/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

function filenameOf(path) {
  return path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "");
}

/** Look up a project screenshot by the project's `id` (e.g. "ecommerce-platform"). */
export function getProjectImage(id) {
  const entry = Object.entries(projectImages).find(
    ([path]) => filenameOf(path) === id,
  );
  return entry ? entry[1] : null;
}

/** Every image found in src/assets/certificates, as [{ src, title }]. */
export function getCertificateImages() {
  return Object.entries(certificateImages)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, src]) => ({
      src,
      title: filenameOf(path)
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    }));
}
