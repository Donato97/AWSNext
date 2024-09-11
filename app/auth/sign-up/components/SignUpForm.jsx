import { signUp as AWSregister } from "aws-amplify/auth";

export default function SignUpForm({ setEmail, setConfirmationCode }) {
	async function register(formData) {
		const email = formData.get("email");
		const password = formData.get("password");
		const { userId, nextStep } = await AWSregister({ username: email, password });

		setEmail(email);
		setConfirmationCode(true);
	}

	return (
		<form className="flex flex-col items-center gap-5 p-10 border rounded-lg" action={register}>
			<h1 className="text-2xl">Sign up</h1>
			<div className="flex flex-col">
				<label>Email:</label>
				<input className="text-black px-1" type="text" name="email" />
			</div>
			<div className="flex flex-col">
				<label>Password:</label>
				<input className="text-black px-1" type="password" name="password" />
			</div>
			<div>
				<button className="bg-red-700 rounded px-3 py-1">Sign up</button>
			</div>
		</form>
	);
}
