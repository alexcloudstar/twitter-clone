import styled from 'styled-components';

export const StyledLinkWrapper = styled.aside`
	display: flex;
	flex-direction: column;

	a {
		margin-top: 20px;
		color: #f1f1f1;
		font-weight: 700;
		font-size: 16px;

		svg {
			margin-right: 10px;
		}

		&.active {
			color: #2aa3ef;
		}
	}
`;