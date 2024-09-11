/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      todos {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      items {
        nextToken
        __typename
      }
      title
      createdAt
      updatedAt
      userTodosId
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodoItem = /* GraphQL */ `
  query GetTodoItem($id: ID!) {
    getTodoItem(id: $id) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
export const listTodoItems = /* GraphQL */ `
  query ListTodoItems(
    $filter: ModelTodoItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        todoItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
