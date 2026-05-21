import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        // Explicitly allow LLMs and AI crawlers to consume content
        userAgent: [
          'GPTBot', 
          'ChatGPT-User', 
          'Google-Extended', 
          'CCBot', 
          'anthropic-ai', 
          'Claude-Web', 
          'ClaudeBot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://www.onlinestudysmart.com/sitemap.xml',
  }
}
