import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SearchResultsWrapper } from '../style';

type SearchResultsProp = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	results: any[];
	clearValue: () => void;
};

const SearchResults: FC<SearchResultsProp> = ({ results, clearValue }) => (
	<SearchResultsWrapper>
		{results &&
			results.map((result) => (
				<Fragment key={result.id}>
					{result.__typename === 'Tweet' && (
						<Link
							key={result.id}
							to={`/tweet/${result.id}`}
							onClick={clearValue}
						>
							{result.tweet}
						</Link>
					)}

					{result.__typename === 'User' && (
						<Link
							key={result.username}
							to={`/profile/${result.username}`}
							onClick={clearValue}
						>
							{result.username}
						</Link>
					)}

					{result.__typename === 'Replies' && (
						<Link
							key={result.tweetId}
							to={`/tweet/${result.tweetId}`}
							onClick={clearValue}
						>
							{result.reply}
						</Link>
					)}
				</Fragment>
			))}
	</SearchResultsWrapper>
);

export default SearchResults;
