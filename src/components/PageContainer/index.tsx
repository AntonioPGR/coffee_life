export default function PageContainer({ children }: PropsChildren) {
	return (
		<div className='selection:bg-bg-200-transparent grid grid-rows-[auto_1fr_auto] h-screen max-w-screen-lg m-auto px-2 lg:p-0 '>
			{children}
		</div>
	);
}
