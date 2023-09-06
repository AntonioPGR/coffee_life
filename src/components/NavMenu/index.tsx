export default function NavMenu() {
	return (
		<nav className='font-button text-3xl grid grid-cols-[1fr_1fr] gap-6'>
			<a className='text-right' href='/'>
				Home
			</a>
			<a className='text-left' href='/products'>
				Products
			</a>
		</nav>
	);
}
