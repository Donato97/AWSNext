import { useState } from "react";
import { createTodoItem } from "@/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

export default function ItemsList({ todoId, items }) {
    const [todoItems, setTodoItems] = useState(items);

    async function createItemAction(formData) {
        const { data } = await client.graphql({
            query: createTodoItem,
            variables: {
                input: {
                    content: formData.get("content"),
                    todoItemsId: formData.get("todoId")
                }
            }
        });
        setTodoItems((prev)=>[...prev,data.createTodoItem]);
    }
    return (
        <>
            <form className="space-x-5" action={createItemAction}>
                <input type="text" placeholder="Add a new item" name="content" className="rounded px-2 text-black" />
                <input type="hidden" name="todoId" value={todoId} />
                <button className="bg-red-700 rounded px-3 py-1">Add</button>
            </form>
            <div className="space-y-2 mt-5">
                {todoItems.map(item => (
                    <div className="flex gap-4 bg-neutral-900 rounded py-1 px-2" key={item.id}>
                        <button className="text-red-500">x</button>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}