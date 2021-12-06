module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personalblog",
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-styled-components" , 
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-us-east-1.graphcms.com/v2/ckwgs2h1m0itm01xn6cuk3h70/master"
    }
  }],
};
