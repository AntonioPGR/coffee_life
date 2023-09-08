interface PropsProductExtras {
	extra_options: string[];
}

export default function ExtraOptions({ extra_options }: PropsProductExtras) {
	return (
		<section>
			<p>Extras:</p>
			<ul>
				{extra_options.map(extra => (
					<li key={extra}>{extra}</li>
				))}
			</ul>
		</section>
	);
}
