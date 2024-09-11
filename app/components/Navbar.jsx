import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between px-10 py-5">
			<ul className="flex gap-5">
				<li>Movies</li>
				<li>Tv Series</li>
				<li>About me</li>
			</ul>
			<ul className="flex gap-5">
				<li>
					<Link href="/auth/sign-up">Sign up</Link>
				</li>
				<li>
					<Link href="/auth/signin">Sign in</Link>
				</li>
			</ul>
		</nav>
	);
}
