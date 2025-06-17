export const getPageQuery = `
  query GetPage($id: ID!, $includeParent: Boolean!) {
    page(id: $id) {
      name
      description {
        markdownBody
      }
      children {
        name
        referenceNum
      }
      parent @include(if: $includeParent) {
        name
        referenceNum
      }
    }
  }
`;

export const getFeatureQuery = `
  query GetFeature($id: ID!) {
    feature(id: $id) {
      name
      description {
        markdownBody
      }
    }
  }
`;

export const getRequirementQuery = `
  query GetRequirement($id: ID!) {
    requirement(id: $id) {
      name
      description {
        markdownBody
      }
    }
  }
`;

export const searchDocumentsQuery = `
  query SearchDocuments(
    $query: String!
    $searchableType: [String!]!
    $page: Int
    $per_page: Int
  ) {
    searchDocuments(
      filters: { query: $query, searchableType: $searchableType }
      page: $page
      per_page: $per_page
    ) {
      nodes {
        name
        url
        searchableId
        searchableType
      }
      currentPage
      totalCount
      totalPages
      isLastPage
    }
  }
`;
