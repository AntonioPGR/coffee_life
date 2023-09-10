interface PropsPriceDisplayer {
	price: number;
}

export default function PriceDisplayer({ price }: PropsPriceDisplayer) {
	const price_formated = price.toFixed(2).replace(".", ",");

	return (
		<p>
			<sub className='text-xl'>R$</sub>
			<span className='text-5xl'> {price_formated}</span>
		</p>
	);
}
