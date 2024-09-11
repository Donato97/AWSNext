/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
export const onCreateTodoItem = /* GraphQL */ `
  subscription OnCreateTodoItem($filter: ModelSubscriptionTodoItemFilterInput) {
    onCreateTodoItem(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
export const onUpdateTodoItem = /* GraphQL */ `
  subscription OnUpdateTodoItem($filter: ModelSubscriptionTodoItemFilterInput) {
    onUpdateTodoItem(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
export const onDeleteTodoItem = /* GraphQL */ `
  subscription OnDeleteTodoItem($filter: ModelSubscriptionTodoItemFilterInput) {
    onDeleteTodoItem(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
