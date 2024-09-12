import { createTodoItem } from "@/src/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import ItemsList from "./ItemsList";
const client = generateClient();

export default function TodoList({ list }) {
    return (
        <div className="flex flex-wrap justify-center gap-5 mt-20">
            {list.map((todo) => (
                <div key={todo.id} className="bg-neutral-700 rounded py-2 px-3">
                    <p className="text-center my-2 text-xl">{todo.title}</p>
                    <ItemsList todoId={todo.id} items={todo.items.items}/>
                </div>
            ))}
        </div>
    );
}