export default function sitemap() {
  const baseUrl = 'https://edilcsm.com';
  
  // Define static routes
  const routes = [
    '',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return routes;
}