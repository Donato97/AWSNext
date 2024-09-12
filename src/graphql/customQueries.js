export const listTodosWithItems = /* GraphQL */ `
  query ListTodosWithItems(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        userTodosId
        items {
          items {
            id
            content
            __typename
          }
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;