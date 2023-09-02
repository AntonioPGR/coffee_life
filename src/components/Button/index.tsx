import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { flex_center } from "themes/default_styles";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface PropsButton {
	children: children;
	icon?: IconDefinition;
}
export default function Button({ children, icon }: PropsButton) {
	return (
		<StyledButton>
			{children}
			{icon && (
				<span>
					<FontAwesomeIcon icon={icon} />
				</span>
			)}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	${flex_center}
	gap: ${p => p.theme.space.m.lg};
	font-size: ${p => p.theme.text_size.slg};
	padding: ${p => p.theme.space.p.sm};
	background-color: ${p => p.theme.color.bg_contrast};
	color: ${p => p.theme.color.bg_primary};
	border-radius: ${p => p.theme.space.border_radius.md} 50px 50px
		${p => p.theme.space.border_radius.md};
	text-transform: uppercase;
	cursor: pointer;

	span {
		${flex_center}
		transform: rotate(45deg);
		color: ${p => p.theme.color.bg_contrast};
		background-color: ${p => p.theme.color.bg_primary};
		border-radius: 100%;
		width: ${p => p.theme.size.slg};
		height: ${p => p.theme.size.slg};

		svg {
			height: ${p => p.theme.size.smd};
			width: ${p => p.theme.size.smd};
		}
	}
`;
