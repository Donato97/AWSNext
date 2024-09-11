"use client"

import { useEffect, useRef, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import { createTodo } from "@/src/graphql/mutations";
import { listTodos } from "@/src/graphql/queries";
import config from "@/src/amplifyconfiguration.json" with {type: "json"};


Amplify.configure(config);
const client = generateClient();


export default function Todos() {
    const userId = useRef(null);
    const [todos, setTodos] = useState([]);

    async function createTodoAction(formData) {
        const newList = await client.graphql({
            query: createTodo,
            variables: { input: { title: formData.get("title"), userTodosId: userId.current } }
        });
        console.log(newList);

    }

    async function getUser() {
        const { userId: id } = await getCurrentUser();
        userId.current = id;
    }
    async function getAllTodos() {
        const { data } = await client.graphql({
            query: listTodos,
            variables: {
                filter: {
                    userTodosId: { eq: userId.current }
                },
            }
        });
        setTodos(data.listTodos.items)
    }
    async function fetchData() {
        await getUser();
        await getAllTodos();
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="container mx-auto">
            <h1 className="text-center my-10 text-2xl uppercase">Todos</h1>
            <section className="flex justify-center">
                <form className="flex items-center gap-5" action={createTodoAction}>
                    <div>
                        <input className="text-black rounded px-2" type="text" name="title" placeholder="Todo list name" />
                    </div>
                    <button className="bg-red-700 rounded px-3 py-1">Add new list</button>
                </form>
            </section>
            <section>
                {todos.map((todo) => todo.title)}
            </section>
        </main>
    );
}
