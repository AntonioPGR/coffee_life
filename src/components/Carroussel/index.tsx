"use client";
import { useEffect, useRef, useState } from "react";

interface PropsCarousel extends PropsChildren, IPropsDefaultComponents {
	number_of_slides: number;
	start_slide: number;
}

export default function Carousel({
	children,
	number_of_slides,
	start_slide,
	className,
}: PropsCarousel) {
	const [current_slide_number, setCurrentSlideNumber] = useState(start_slide);
	const carousel_html = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const carousel = carousel_html.current;
		if (carousel) {
			const carousel_width = carousel.offsetWidth;
			carousel.scrollLeft = carousel_width * current_slide_number;
		}
	}, [current_slide_number]);

	function decreaseSlideNumber() {
		const new_slide_number = current_slide_number - 1;
		if (new_slide_number >= 0) {
			setCurrentSlideNumber(new_slide_number);
		}
	}

	function increaseSlideNumber() {
		const new_slide_number = current_slide_number + 1;
		if (new_slide_number < number_of_slides) {
			setCurrentSlideNumber(new_slide_number);
		}
	}

	return (
		<div
			className={
				"grid grid-cols-[auto_1fr_auto] items-center w-full h-full" + className
			}
		>
			<div
				onClick={decreaseSlideNumber}
				className={
					current_slide_number == 0
						? "opacity-40 cursor-not-allowed"
						: "cursor-pointer"
				}
			>
				<img className='w-10' src='/images/arrow_back.svg' />
			</div>
			<div
				ref={carousel_html}
				className={`overflow-x-scroll no-scrollbar h-full scroll-smooth relative grid`}
				style={{
					gridTemplateColumns: `repeat(${number_of_slides}, 100%)`,
				}}
			>
				{children}
			</div>
			<div
				onClick={increaseSlideNumber}
				className={
					current_slide_number + 1 == number_of_slides
						? "opacity-40 cursor-not-allowed"
						: "cursor-pointer"
				}
			>
				<img className='rotate-180 w-10' src='/images/arrow_back.svg' />
			</div>
		</div>
	);
}
