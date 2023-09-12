interface PropsProductTitle {
	normal_name: string;
	special_name: string;
	description: string;
}

export default function ProductTitle({
	normal_name,
	special_name,
	description,
}: PropsProductTitle) {
	return (
		<>
			<hgroup className='w-full'>
				<h2 className='font-text text-4xl'>{normal_name}</h2>
				<h1 className='font-hero text-7xl '>{special_name}</h1>
			</hgroup>
			<p>{description}</p>
		</>
	);
}
