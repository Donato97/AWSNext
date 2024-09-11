import { confirmSignUp } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function ConfirmationForm({email}) {
    const router = useRouter();

    async function confirmationCodeForm(formData) {
        const code = formData.get("code");
        const { nextStep } = await confirmSignUp({ username:email.current, confirmationCode: code });

        router.push("/auth/signin");
    }

    return (
        <form
            className="flex flex-col items-center gap-5 p-10 border rounded-lg"
            action={confirmationCodeForm}>
            <h1 className="text-2xl">Confirmation code</h1>
            <div className="flex flex-col">
                <label>Code:</label>
                <input className="text-black px-1" type="code" name="code" />
            </div>
            <div>
                <button className="bg-red-700 rounded px-3 py-1">Verify</button>
            </div>
        </form>
    );
}