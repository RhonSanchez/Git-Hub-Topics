// Query for the graph ql
export default `
  query SearchRepository {
    search(query: "$queryString", type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            descriptionHTML
            stargazerCount
            openGraphImageUrl
            repositoryTopics(first: 4) {
              nodes {
                topic {
                  name
                }
              }
            }
            primaryLanguage {
              name
            }
            languages(first: 3) {
              nodes {
                name
              }
            }
            createdAt
            pushedAt
            updatedAt
          }
        }
      }
    }
  }
`;
