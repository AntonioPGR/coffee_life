import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function IconsMenu() {
	return (
		<nav>
			<a href='/Cart'>
				<FontAwesomeIcon icon={faCartShopping} size='xl' />
			</a>
		</nav>
	);
}
