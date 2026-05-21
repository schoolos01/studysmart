import { MetadataRoute } from 'next'
import { coursesData } from '@/lib/courses-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.onlinestudysmart.com'

  // Define static core routes
  const staticRoutes = [
    '',
    '/about',
    '/join',
    '/courses',
    '/software',
    '/services/schools',
    '/services/robotics-exhibition',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Define SEO localized landing pages
  const seoRoutes = [
    '/robotics-workshop-burdwan',
    '/robotics-stem-lab-setup-west-bengal',
    '/best-robotics-lab-burdwan',
    '/best-innovative-coaching-center-burdwan',
    '/robotics-summer-camp-workshop-burdwan',
    '/ai-and-robotics-classes-for-kids-burdwan',
    '/coding-and-computer-science-institute-burdwan',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // High priority for ranking
  }))

  // Define dynamic course routes
  const courseRoutes = Object.keys(coursesData).map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...seoRoutes, ...courseRoutes]
}
