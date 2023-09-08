interface PropsPriceDisplayer {
	price: number;
}

export default function PriceDisplayer({ price }: PropsPriceDisplayer) {
	return <p> {price} </p>;
}
