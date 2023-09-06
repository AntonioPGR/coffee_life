import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PropsButton {
	children: children;
	icon?: IconDefinition;
}
export default function Button({ children, icon }: PropsButton) {
	return (
		<button className='flex gap-4 items-center p-1 pl-3 text-3xl text-text-100 bg-bg-800 rounded-r-full'>
			{children}
			{icon && (
				<span className='flex items-center justify-center w-14 h-14 bg-bg-100 rounded-full'>
					<FontAwesomeIcon
						className='text-bg-800 w-5/6 h-5/6 rotate-45'
						icon={icon}
					/>
				</span>
			)}
		</button>
	);
}
