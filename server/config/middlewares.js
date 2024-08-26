module.exports = ({ env }) => [
  "strapi::errors",
  
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ['self', 'http:', env("SUPABASE_URL")],
          'img-src': ['self', 'data:', 'blob:', env("SUPABASE_URL"), 'https://dl.airtable.com', 'https://res.cloudinary.com'],
          'media-src': ['self', 'data:', 'blob:', 'https://res.cloudinary.com'],
        },
      },
    },
  },
  
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'], // Replace with your frontend URL
      headers: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
  
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
