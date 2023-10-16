/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cargomove.bg",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal/terms-and-conditions",
    "/legal/privacy-policy",
    "/legal/cookie-policy",
    "/admin",
    "/admin/dashboard",
    "/admin/dashboard/gallery/main",
    "/admin/dashboard/blog/create",
    "/admin/dashboard/blog/edit",



  ],
  // ...other options
};
