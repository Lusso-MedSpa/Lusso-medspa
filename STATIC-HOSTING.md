# Deploy to GoDaddy Web Hosting (cPanel)

This project exports static HTML, CSS, JavaScript and images. Node.js is needed only on the build machine, not on the hosting account.

## Build

Use Node.js 22 LTS or newer. From the repository root:

```sh
npm ci
npm run build
```

The deployable website is generated in `out/`. Do not upload the source repository or `.next/`.

Next.js image optimization is disabled because it requires a server. Images are served as their original files; optimize large source images before launch.

## Upload

1. Open GoDaddy cPanel > File Manager and enable Show Hidden Files.
2. Back up any existing website in the domain's document root (usually `public_html/`).
3. Upload the **contents** of `out/` into that document root, including `_next/`, the page directories, images, and `.htaccess`. The result should be `public_html/index.html`, not `public_html/out/index.html`.
4. Remove only obsolete files from the previous deployment after making a backup. Preserve unrelated email and hosting files. If there is an existing `.htaccess`, merge the supplied directives rather than overwriting custom rules.
5. Connect the domain and activate its SSL certificate using GoDaddy. Enable HTTPS redirection through the hosting controls once the certificate is active.
6. Test the homepage, `/contact/`, `/treatments/`, every treatment page, images, mobile navigation, and a nonexistent URL (which should return HTTP 404).

Each content update requires a fresh build and upload. `npm start` runs a Next.js server and is not the deployment command for this static export.

## Before public launch

- Connect the demo contact form to a real form submission service or backend; it currently does not send messages.
- Replace the generic Calendly homepage in `src/config/site.ts` with the clinic's booking URL.
- Provide `NEXT_PUBLIC_GOOGLE_REVIEW_URL` or `NEXT_PUBLIC_GOOGLE_PLACE_ID` at build time if the Google review button should be enabled. These public values are embedded in the export; rebuild after changing them.
- Confirm the displayed email address has a working mailbox. Website hosting and static export do not create one.

The exported site needs no database or running Next.js process. Treatment routes are generated from `src/data/treatments.ts` during the build, and directory URLs work with Apache's `DirectoryIndex`. Unknown URLs use the exported `404.html` through `.htaccess`.
