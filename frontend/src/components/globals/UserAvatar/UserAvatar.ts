import { Avatar } from '@mui/material';
import styled from 'styled-components';

const UserAvatar = styled(Avatar)`
	width: 50px;
	height: 50px;
	border-radius: 100px;
	background-image: linear-gradient(
		to right,
		#d16ba5,
		#c777b9,
		#ba83ca,
		#aa8fd8,
		#9a9ae1,
		#8aa7ec,
		#79b3f4,
		#69bff8,
		#52cffe,
		#41dfff,
		#46eefa,
		#5ffbf1
	);
	margin-right: 25px;
`;

export default UserAvatar;
