"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function AmountInput() {
	const [current_amount, setAmount] = useState(0);

	function increaseAmount() {
		setAmount(current_amount + 1);
	}

	function decreaseAmount() {
		const new_amount = current_amount - 1;
		if (new_amount >= 0) {
			setAmount(new_amount);
		}
	}

	return (
		<div className='px-4 py-2 border-2 border-solid border-text-800 rounded-3xl flex items-center justify-center gap-8'>
			<span className='text-xl'>Quantity</span>
			<div className='flex gap-2 items-center text-xl'>
				<button onClick={decreaseAmount}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<span className='block w-12 text-center text-3xl'>
					{current_amount}
				</span>
				<button onClick={increaseAmount}>
					<FontAwesomeIcon className='rotate-180' icon={faArrowLeft} />
				</button>
			</div>
		</div>
	);
}
