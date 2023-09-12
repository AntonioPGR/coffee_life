import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";

interface PropsButton extends IPropsDefaultComponents {
	children: children;
	onClick: () => void;
	icon?: IconDefinition;
	iconClassName?: string;
	button_animation?: boolean;
}
export default function Button({
	children,
	icon,
	onClick,
	className,
	iconClassName,
	button_animation,
}: PropsButton) {
	return (
		<motion.button
			initial={{ boxShadow: "1px 1px 4px #000E" }}
			whileHover={{ boxShadow: "1px 1px 10px #000E" }}
			onClick={onClick}
			className={
				"flex justify-between gap-4 items-center p-1 pl-3 text-3xl text-text-100 bg-bg-800 rounded-r-full " +
				className
			}
		>
			{children}
			{icon && (
				<span className='flex items-center justify-center w-14 h-14 bg-bg-100 rounded-full'>
					{button_animation && (
						<motion.span
							className='relative w-full h-full flex items-center justify-center'
							whileHover={{
								position: "relative",
								left: ["0%", "10%", "20%", "30%", "-30%", "-20%", "-10%", "0%"],
								top: ["0%", "-10%", "-20%", "-30%", "30%", "20%", "10%", "0%"],
								scale: [1, 0.75, 0.5, 0.25, 0.25, 0.5, 0.75, 1],
								opacity: [1, 0.8, 0.4, 0, 0, 0, 0.4, 0.8, 1],
							}}
							transition={{
								duration: 2,
								repeat: 0,
							}}
						>
							<FontAwesomeIcon
								className={"text-bg-800 w-3/5 h-3/5 " + iconClassName}
								icon={icon}
							/>
						</motion.span>
					)}
					{!button_animation && (
						<FontAwesomeIcon
							className={"text-bg-800 w-3/5 h-3/5 " + iconClassName}
							icon={icon}
						/>
					)}
				</span>
			)}
		</motion.button>
	);
}
