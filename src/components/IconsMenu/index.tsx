import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function IconsMenu() {
	return (
		<nav className='flex justify-end'>
			<a href='/Cart' className='w-9 h-9'>
				<FontAwesomeIcon
					className='w-full h-full'
					icon={faCartShopping}
					size='xl'
				/>
			</a>
		</nav>
	);
}
