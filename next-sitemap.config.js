/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bluelotusmedia.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
