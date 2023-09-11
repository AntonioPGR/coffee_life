"use client";

interface PropsProductExtras {
	extra_options: string[];
}

export default function ExtraOptions({ extra_options }: PropsProductExtras) {
	return (
		<section className='flex flex-col gap-2'>
			<p className='text-3xl'>Extras:</p>
			<ul className='ml-4'>
				{extra_options.map(extra => (
					<li key={extra} className='flex gap-2'>
						<input
							type='checkbox'
							className='accent-bg-800'
							name={extra.toLowerCase()}
							id={extra}
						/>
						<label htmlFor={extra.toLocaleLowerCase()}>{extra}</label>
					</li>
				))}
			</ul>
		</section>
	);
}
