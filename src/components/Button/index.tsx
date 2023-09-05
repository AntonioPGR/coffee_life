import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PropsButton {
	children: children;
	icon?: IconDefinition;
}
export default function Button({ children, icon }: PropsButton) {
	return (
		<button>
			{children}
			{icon && (
				<span>
					<FontAwesomeIcon icon={icon} />
				</span>
			)}
		</button>
	);
}
