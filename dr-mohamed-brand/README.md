# Dr. Mohamed Mahmoud Abdo Ali — Personal Brand Website

An Arabic-first, bilingual personal website built as a lightweight static site. The visual identity brings an editorial warm-paper palette together with deep green-black, a restrained sage accent, and the supplied portrait, which is used without retouching.

## Project files

- index.html, styles.css, and main.js make up the site.
- site-config.js is the central file for identity, biography, social/contact links, community destination, content, SEO settings, and colors.
- portrait.jpg is the supplied portrait, copied as-is.
- .github/workflows/deploy.yml publishes the repository root to GitHub Pages on pushes to main.
- 404.html and robots.txt provide a basic not-found page and crawler policy.

There is no package installation or build step. The site uses relative asset paths so it can be deployed at a GitHub Pages project URL as well as a domain root.

## Personalize the site

Open site-config.js and edit the values there:

1. Update Arabic and English names, professional identity, and tagline in names, professionalIdentity, and tagline.
2. Replace portrait.jpg with a portrait you want to publish, then update portrait.src if its filename changes. The current image is displayed without facial edits.
3. Add a first-person Arabic and English biography in biography. The story chapter fields are intentionally blank; fill ar and en only with details you want to share.
4. Add real social profile URLs to socialAccounts. Empty URLs stay hidden.
5. Add a public email address and/or WhatsApp number to contact. WhatsApp should be entered with country code; punctuation is removed when the link is created.
6. Set communityUrl only when there is a real place for visitors to join. Otherwise, the page describes the community as a future initiative.
7. Add only published original material to content and videos. Each item may include title, description, category, platform, date, thumbnail, url, and featured. Use absolute HTTPS URLs for thumbnails and original destinations. Items without a source URL are not shown as published links.
8. To change the palette, edit the color values in theme. The supplied palette is warm off-white, deep green-black, and muted sage.

Example content entry:

~~~js
{
  title: "An original published title",
  description: "A concise description of the actual material.",
  category: "Health education",
  platform: "YouTube",
  date: "2026-01-01",
  thumbnail: "https://example.com/thumbnail.jpg",
  url: "https://www.youtube.com/watch?v=example",
  featured: true
}
~~~

Do not add unverified credentials, affiliations, audience numbers, patient stories, testimonials, or medical outcomes. The site intentionally keeps personal history fields empty until the owner supplies those details.

## Contact form

The contact area does not claim to deliver messages while contactFormEndpoint is empty. To activate it:

1. Choose a form service or endpoint that accepts a cross-origin POST request containing JSON fields name, email, and message.
2. Confirm that the provider supports requests from the deployed website origin and returns a successful HTTP status after accepting a message.
3. Put the provider's HTTPS endpoint in contactFormEndpoint.
4. Submit a non-sensitive test message after deployment and confirm it appears in the configured inbox.

The site sends no credentials or secret keys from the browser. A public endpoint may require provider-side spam protection and rate limits. General contact is not intended for medical records, patient details, or private health information.

## Run locally

You can open index.html directly in a browser. For a local HTTP preview, use any static file server and serve this folder as its root. No compilation is required.

The language control switches between Arabic RTL and independently written English LTR copy. The selected language is saved in the browser. The layout includes mobile navigation, reduced-motion support, keyboard focus styles, semantic landmarks, and lazy loading for content thumbnails.

## Publish with GitHub Pages

1. Put the contents of this folder at the root of a GitHub repository. The .github/workflows/deploy.yml file must be at .github/workflows/deploy.yml in that repository.
2. Push the repository to its main branch.
3. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
4. Wait for the Pages workflow to complete, then open the URL shown in the workflow's deployment environment.

The workflow publishes static files only. No live URL is included because a repository and deployment have not been supplied or verified.

### Optional custom domain

Set the site's public URL in seo.siteUrl, configure the matching domain in GitHub Pages, and add the DNS records GitHub specifies for that domain. If you use a custom domain, add the corresponding CNAME file at the repository root. Then create a sitemap.xml using the verified public URL and submit its location in the domain's search-console account. Until the public domain is known, this project does not include a sitemap or canonical URL.

## SEO and medical information

Arabic-first title, description, Open Graph data, and social-card metadata are included. Set seo.siteUrl after the public address is known. Person structured data can be emitted only once that URL is configured; no institution, award, specialty, or affiliation is assumed. robots.txt allows ordinary indexing. Add a sitemap only after a stable public URL exists.

Medical content is labelled as general education and does not replace individualized care. The site is not a clinic booking system and has no patient intake form.

## Remaining details to provide

- The personal story in Arabic and English, if desired.
- Real social account URLs.
- A public contact email and/or WhatsApp number.
- Published article/video titles, descriptions, thumbnails, dates, categories, and original links.
- A community destination, once one exists.
- A contact-form provider endpoint, if form submissions are wanted.
- The repository name/account or custom domain for a verified deployment and sitemap.
