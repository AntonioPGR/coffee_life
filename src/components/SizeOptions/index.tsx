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
	return (
		<section>
			<p className='text-3xl'>Sizes:</p>
			<div className='m-auto w-3/4'>
				<Carousel number_of_slides={size_options.length} start_slide={0}>
					{size_options.map(size => (
						<article key={size.tag}>
							<img
								className='max-h-40 h-full'
								src='https://brandedcoffeecups.co.uk/wp-content/uploads/2020/11/DSC_3954-1_1C.png'
								alt=''
							/>
							<p>
								{size.label} - {size.quantity}
							</p>
						</article>
					))}
				</Carousel>
			</div>
		</section>
	);
}
