const coffe_cup_1 = "images/coffe_cup_1.png";
const coffe_cup_2 = "images/coffe_cup_2.png";
const coffe_shadow = "images/cup_shadow.png";

export default function HeroImages() {
	return (
		<section className='flex w-full items-center justify-center'>
			<img
				className='relative left-[11rem]'
				src={coffe_cup_1}
				alt="brown coffe paper cup in the background with the phrase 'There's always time for coffe' written in its frontal part"
			/>
			<img className='relative top-[10rem] scale-125' src={coffe_shadow} />
			<img
				className='relative left-[-11rem] scale-110'
				src={coffe_cup_2}
				alt="white coffe paper cup in the foregroud with plants drawwed in it and with the phrase 'Coffe cup mock up' written in its frontal part"
			/>
		</section>
	);
}
