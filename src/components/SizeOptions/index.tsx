import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
			<p>Sizes:</p>
			<ul>
				{size_options.map(size => (
					<li key={size.tag}>
						<FontAwesomeIcon icon={faArrowLeft} />
						<img src={image.src} alt={image.alt} />
						<FontAwesomeIcon icon={faArrowLeft} />
						<p>
							{size.label} - {size.quantity}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
