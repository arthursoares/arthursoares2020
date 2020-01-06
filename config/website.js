module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Arthur Soares', // Navigation and Site Title
  titleAlt: 'Arthur Soares', // Title for JSONLD
  description: 'Arthur Soares is a Berlin based Brazilian.',
  headline: 'Arthur Soares is a Berlin based Brazilian.', // Headline for schema.org JSONLD
  url: 'https://arthursoares.com.br', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'ArthurSoares', // shortname for manifest. MUST be shorter than 12 characters
  author: 'ArthurSoares', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@artsoares', // Twitter Username
  facebook: 'arthursoares', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
