# My Favorite Videos Website

A simple, clean website to showcase your favorite videos with titles, thumbnails, descriptions, and reasons why you love them.

## Features

- Responsive design that works on mobile and desktop
- Clean card-based layout for video display
- Easy to add new videos by editing the JavaScript file
- Optimized for Cloudflare Pages deployment

## Adding Videos

To add your own videos, edit the `script.js` file and modify the `videos` array:

```javascript
{
    id: 4,
    title: "Your Video Title",
    thumbnail: "https://path-to-your-thumbnail.jpg",
    description: "Description of your video",
    reason: "Why you love this video and find it inspiring",
    url: "https://link-to-the-actual-video"
}
```

## Deployment to Cloudflare Pages

1. Create a new repository on GitHub and push this code
2. Go to Cloudflare Pages dashboard
3. Connect your GitHub repository
4. Set build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Deploy!

The site will be live at your-project-name.pages.dev

## Local Development

Simply open `index.html` in your browser to test locally.