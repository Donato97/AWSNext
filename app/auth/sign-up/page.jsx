"use client";

import { useRef, useState } from "react";
import SignUpForm from "./components/SignUpForm";
import ConfirmationForm from "./components/ConfirmationCodeForm";

import { Amplify } from "aws-amplify";
import config from "../../../src/amplifyconfiguration.json" with {type: "json"};
Amplify.configure(config);

export default function signUp() {
	const [confirmationCode, setConfirmationCode] = useState(false);
	let email = useRef(null);

	return (
		<main className="flex justify-center mt-16">
			{
				confirmationCode 
				? <ConfirmationForm email={email} /> 
				: <SignUpForm setEmail={(data)=> email.current=data} setConfirmationCode={(data)=>setConfirmationCode(data)} />
			}
		</main>
	);
}
