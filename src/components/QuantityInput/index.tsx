import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuantityInput() {
	return (
		<div>
			<span>Quantity</span>
			<FontAwesomeIcon icon={faArrowLeft} />
			0
			<FontAwesomeIcon icon={faArrowLeft} />
		</div>
	);
}
