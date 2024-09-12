export const createTodoWithItems = /* GraphQL */ `
	mutation CreateTodo(
		$input: CreateTodoInput!
		$condition: ModelTodoConditionInput
	) {
		createTodo(input: $input, condition: $condition) {
			id
			items {
				items {
					content
				}
			}
			title
			createdAt
			updatedAt
			userTodosId
			__typename
		}
	}
`;
