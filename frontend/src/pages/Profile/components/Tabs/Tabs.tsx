import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	useGetUserRepliesQuery,
	useGetUserTweetsQuery,
	User
} from 'src/generated/graphql';
import { StyledTabs, StyledTabsContent } from './style';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

const BasicTabs: FC<{ username: User['username'] }> = ({ username }) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const { data, loading } = useGetUserTweetsQuery({ variables: { username } });
	const { data: dataReplies, loading: loadingReplies } = useGetUserRepliesQuery(
		{ variables: { username } }
	);

	if (loading || loadingReplies) return <div>Loading...</div>;

	return (
		<Box sx={{ width: '100%' }}>
			<Box>
				<StyledTabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab
						label={`${data.getUserTweets.length} Tweets`}
						{...a11yProps(0)}
					/>
					<Tab
						label={`${dataReplies.getUserReplies.length} Replies`}
						{...a11yProps(1)}
					/>
				</StyledTabs>
			</Box>
			<TabPanel value={value} index={0}>
				{!data.getUserTweets.length ? (
					<>no tweets</>
				) : (
					data.getUserTweets.map(({ id, tweet }) => (
						<StyledTabsContent key={id}>
							<Link to={`/tweet/${id}`}>
								<div>
									{tweet}
									<button>view tweet</button>
								</div>
							</Link>
						</StyledTabsContent>
					))
				)}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{!dataReplies.getUserReplies.length ? (
					<>no replies</>
				) : (
					dataReplies.getUserReplies.map(({ id, reply }) => (
						<StyledTabsContent key={id}>
							<Link to={`/tweet/${id}`}>
								<div>
									{reply}
									<button>view reply</button>
								</div>
							</Link>
						</StyledTabsContent>
					))
				)}
			</TabPanel>
		</Box>
	);
};

export default BasicTabs;
