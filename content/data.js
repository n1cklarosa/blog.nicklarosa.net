module.exports = {
  SiteTitle: 'Nick La Rosa’s Web Dev Blog',
  Sitelogo: '#',
  SiteLogoText: 'NickLaRosa',
  SiteAuthor: 'Nick La Rosa',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'I’m Nick and I’m a developer!', 
  siteMenu: [
 
    {
      title: `Blog`,
      link: `/blog`,
    },
    {
      title: `GitHub Projects`,
      link: `/repositories`,
    },
  ],
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/AbdaliDahir',
    github: 'https://github.com/AbdaliDahir',
    linkedin: 'https://www.linkedin.com/in/abdelali-dahir-0b5344111/',
  },
  SiteAddress: {
    city: 'Sydney',
    region: 'Sydney',
    country: 'Australia',
    zipCode: '2218',
  },
  SiteContact: {
    email: 'nick@nicklarosa.net',
    phone: '+61280057457',
  },
  SiteCopyright: '2020',
};
