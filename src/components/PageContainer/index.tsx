export default function PageContainer({ children }: PropsChildren) {
	return (
		<div className='grid grid-rows-[auto_1fr_auto] h-screen max-w-screen-lg m-auto px-2 lg:p-0'>
			{children}
		</div>
	);
}
