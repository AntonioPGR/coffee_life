import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PropsButton extends IPropsDefaultComponents {
	children: children;
	onClick: () => void;
	icon?: IconDefinition;
	iconClassName?: string;
}
export default function Button({
	children,
	icon,
	onClick,
	className,
	iconClassName,
}: PropsButton) {
	return (
		<button
			onClick={onClick}
			className={
				"flex justify-between gap-4 items-center p-1 pl-3 text-3xl text-text-100 bg-bg-800 rounded-r-full " +
				className
			}
		>
			{children}
			{icon && (
				<span className='flex items-center justify-center w-14 h-14 bg-bg-100 rounded-full'>
					<FontAwesomeIcon
						className={"text-bg-800 w-3/5 h-3/5 " + iconClassName}
						icon={icon}
					/>
				</span>
			)}
		</button>
	);
}
