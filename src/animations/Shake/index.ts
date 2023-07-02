import { keyframes } from 'styled-components';

export const shakeAnimation = keyframes`
			0% { transform: translate(30px); }
			20% { transform: translate(-30px); }
			40% { transform: translate(15px); }
			60% { transform: translate(-15px); }
			80% { transform: translate(8px); }
			100% { transform: translate(0px); }
`;
