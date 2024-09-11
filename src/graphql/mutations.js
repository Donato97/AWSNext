/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createTodoItem = /* GraphQL */ `
  mutation CreateTodoItem(
    $input: CreateTodoItemInput!
    $condition: ModelTodoItemConditionInput
  ) {
    createTodoItem(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
export const updateTodoItem = /* GraphQL */ `
  mutation UpdateTodoItem(
    $input: UpdateTodoItemInput!
    $condition: ModelTodoItemConditionInput
  ) {
    updateTodoItem(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
export const deleteTodoItem = /* GraphQL */ `
  mutation DeleteTodoItem(
    $input: DeleteTodoItemInput!
    $condition: ModelTodoItemConditionInput
  ) {
    deleteTodoItem(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      todoItemsId
      __typename
    }
  }
`;
