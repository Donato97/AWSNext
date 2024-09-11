"use client";

import { signIn } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

import { Amplify } from "aws-amplify";
import config from "../../../src/amplifyconfiguration.json" with {type: "json"};
Amplify.configure(config);

export default function signUp() {
    const router = useRouter();

	async function signInForm(formData) {
		const email = formData.get("email");
		const password = formData.get("password");
		const { userId, nextStep } = await signIn({ username:email, password });       

		router.push("/")
	}

	return (
		<main className="flex justify-center mt-16">
			<form className="flex flex-col items-center gap-5 p-10 border rounded-lg" action={signInForm}>
				<h1 className="text-2xl">Sign in</h1>
				<div className="flex flex-col">
					<label>Email:</label>
					<input className="text-black px-1" type="text" name="email" />
				</div>
				<div className="flex flex-col">
					<label>Password:</label>
					<input className="text-black px-1" type="password" name="password" />
				</div>
				<div>
					<button className="bg-red-700 rounded px-3 py-1">Sign in</button>
				</div>
			</form>
		</main>
	);
}
