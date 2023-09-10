import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuantityInput() {
	return (
		<div className='px-4 py-2 border-2 border-solid border-text-800 rounded-3xl flex items-center justify-center gap-8'>
			<span className='text-xl'>Quantity</span>
			<div className='flex gap-2 items-center text-xl'>
				<FontAwesomeIcon icon={faArrowLeft} />
				<span className='text-3xl'>0</span>
				<FontAwesomeIcon className='rotate-180' icon={faArrowLeft} />
			</div>
		</div>
	);
}
