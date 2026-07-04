# Tutoring

Static website built with Astro and Tailwind CSS for GitHub Pages deployment.

## Live URL

Initial project-site URL:

`https://rohitjagga02.github.io/tutoring/`

## Stack

- Astro
- Tailwind CSS
- Static site generation
- GitHub Pages
- GitHub Actions

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal.

## Build the site

Run:

```bash
npm run build
```

The production files will be generated in `dist/`.

## Deploying to GitHub Pages

1. Push the repository to the `main` branch.
2. In GitHub, open the repository settings for `rohitjagga02/tutoring`.
3. Go to `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions` as the source.
5. The workflow in `.github/workflows/deploy.yml` will build and deploy the site automatically on each push to `main`.
6. After the first successful deployment, confirm the live site at:

   `https://rohitjagga02.github.io/tutoring/`

## Astro project-site configuration

This repository is configured as a GitHub Pages project site using:

```js
site: "https://rohitjagga02.github.io",
base: "/tutoring"
```

That `base` value is important because the site is served from `/tutoring/`, not from the root of the domain.

## Later: switching to `rjtutoring.com`

When you move from the GitHub Pages project site to the custom domain `rjtutoring.com`, the site will likely live at the root of the domain instead of inside `/tutoring/`.

At that point:

1. Update `astro.config.mjs`.
2. Change:

   ```js
   site: "https://rohitjagga02.github.io",
   base: "/tutoring"
   ```

3. To something like:

   ```js
   site: "https://rjtutoring.com"
   ```

4. Remove `base: "/tutoring"` or change it only if the final site is hosted under a subpath.

## Adding the custom domain in GitHub Pages

1. Open `Settings -> Pages` in the repository.
2. Enter `rjtutoring.com` in the custom domain field.
3. Save the setting.
4. If you want GitHub Pages to manage HTTPS automatically, leave HTTPS enabled after DNS is configured correctly.

## DNS records you may need later

The exact setup depends on your domain registrar and whether you use the apex domain, `www`, or both, but common patterns are:

1. `A` records for the apex domain (`rjtutoring.com`) pointing to GitHub Pages IP addresses.
2. A `CNAME` record for `www.rjtutoring.com` pointing to `rohitjagga02.github.io`.
3. Optional redirects so `www` and the apex domain resolve consistently.

Before editing DNS, check GitHub’s latest Pages custom-domain documentation so you use the current recommended records.
