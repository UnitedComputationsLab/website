# Robotics Portfolio — Next.js

A clean, professional portfolio website for robotics engineers. Built with Next.js 14 (App Router), no external UI libraries — just CSS custom properties and clean components.

## Project Structure

```
src/
  app/
    layout.js          ← Nav + footer (edit your name & social links here)
    page.js            ← Home page
    globals.css        ← All styles (colors, typography, layout)
    articles/
      page.js          ← Articles listing
      [slug]/page.js   ← Individual article page
    videos/
      page.js          ← Videos grid
    about/
      page.js          ← About/bio page
  data/
    articles.js        ← ✏️ ADD YOUR ARTICLES HERE
    videos.js          ← ✏️ ADD YOUR YOUTUBE IDs HERE
```

## Quick Start (Local)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Personalizing the Site

### 1. Your Name & Identity
Edit `src/app/layout.js`:
- Change `Your.Name` in the nav logo
- Update footer copyright name
- Update GitHub / LinkedIn / Twitter links

### 2. Add Articles
Edit `src/data/articles.js`. Each article is an object:

```js
{
  slug: 'my-article-slug',          // URL: /articles/my-article-slug
  title: 'My Article Title',
  excerpt: 'Short description...',
  date: '2024-12-01',               // YYYY-MM-DD
  readTime: '8 min read',
  tags: ['ROS2', 'Navigation'],
  featured: false,                  // Set ONE article to true for home page
  content: `
## Section Title

Your article content here. Supports:
- ## H2 headings
- ### H3 headings
- \`inline code\`
- \`\`\`python
  code blocks
  \`\`\`
- Regular paragraphs
  `,
}
```

### 3. Add Videos
Edit `src/data/videos.js`. Replace `youtubeId` with your actual YouTube video IDs:

```js
{
  id: 'vid-1',
  title: 'My Video Title',
  youtubeId: 'dQw4w9WgXcQ',   // ← replace this with your YouTube video ID
  duration: '12:34',
  tags: ['ROS2'],
  description: 'What this video is about.',
}
```

To get a YouTube video ID: `https://www.youtube.com/watch?v=VIDEO_ID_IS_HERE`

### 4. About Page
Edit `src/app/about/page.js`:
- Replace placeholder text with your bio
- Update the skills list
- Add your email and social links

### 5. Add Your Photo
Replace the placeholder div in `about/page.js` with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Your Name"
  className="about-photo"
/>
```
Then place `your-photo.jpg` in the `public/` folder.

### 6. Update Metadata
Edit `src/app/layout.js` — change the `metadata` object:
```js
export const metadata = {
  title: 'Your Name — Robotics Engineer',
  description: 'Your custom description for Google...',
};
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Vercel detects Next.js automatically — just click Deploy
4. Add your custom domain in Settings → Domains

## Adding More Features Later

- **MDX articles**: Install `@next/mdx` to write articles as `.mdx` files instead of JS strings
- **Image optimization**: Use Next.js `<Image>` component for your project photos
- **E-commerce**: Add Stripe + a products page when ready to sell
- **Analytics**: Add Vercel Analytics (free) for visitor stats
