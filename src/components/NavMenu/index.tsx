import Link from "next/link";

export default function NavMenu() {
	return (
		<nav className='font-button text-3xl flex gap-6'>
			<Link href='/'>Home</Link>
			<Link href='/products'>Products</Link>
		</nav>
	);
}
