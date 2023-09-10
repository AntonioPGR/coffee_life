"use client";
import { useRef, useState } from "react";

interface PropsCarousel extends PropsChildren {
	number_of_slides: number;
	start_slide: number;
}

export default function Carousel({
	children,
	number_of_slides,
	start_slide,
}: PropsCarousel) {
	const [current_slide, setCurrentSlide] = useState(start_slide);
	const carousel_html = useRef<HTMLDivElement>(null);

	const increaseSlideNumber = () => {
		if (!carousel_html.current) {
			return;
		}
		if (current_slide !== number_of_slides - 1) {
			const carousel_width = carousel_html.current.offsetWidth;
			const new_current_slide = current_slide + 1;
			carousel_html.current.scrollLeft = carousel_width * new_current_slide;
			setCurrentSlide(new_current_slide);
		}
	};

	const decreaseSlideNumber = () => {
		if (!carousel_html.current) {
			return;
		}
		if (current_slide !== 0) {
			const carousel_width = carousel_html.current.offsetWidth;
			const new_current_slide = current_slide - 1;
			carousel_html.current.scrollLeft = carousel_width * new_current_slide;
			setCurrentSlide(new_current_slide);
		}
	};

	const renderColumnsStyle = () => {
		let string = "100%";
		const slides = number_of_slides - 1;
		for (let i = 0; i < slides; i++) {
			string += "_100%";
		}
		return string;
	};

	return (
		<div className='grid grid-cols-[auto_1fr_auto] items-center w-full h-full'>
			<div onClick={decreaseSlideNumber}>
				<img className='w-10' src='/images/arrow_back.svg' />
			</div>
			<div
				ref={carousel_html}
				className={`overflow-x-scroll h-full no-scrollbar scroll-smooth relative justify-center items-center grid grid-cols-[${renderColumnsStyle()}]`}
			>
				{children}
			</div>
			<div onClick={increaseSlideNumber}>
				<img className='rotate-180 w-10' src='/images/arrow_back.svg' />
			</div>
		</div>
	);
}
