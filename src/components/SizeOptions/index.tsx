// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "components/Carroussel";

interface PropsProductExtras {
	size_options: IProductSize[];
	image: IImage;
}

export default function SizeOptions({
	size_options,
	image,
}: PropsProductExtras) {
	const size = size_options[0];
	return (
		<section>
			<p className='text-3xl'>Sizes:</p>
			<Carousel
				number_of_slides={size_options.length}
				start_slide={0}
				key={size.tag}
			>
				<img
					className='max-h-40 h-full'
					src='https://brandedcoffeecups.co.uk/wp-content/uploads/2020/11/DSC_3954-1_1C.png'
					alt=''
				/>
				<p>
					{size.label} - {size.quantity}
				</p>
			</Carousel>
		</section>
	);
}
