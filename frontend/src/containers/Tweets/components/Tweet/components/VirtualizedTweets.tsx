import { Tweet } from 'containers/Tweets/components';
import { TweetsWrapper } from 'containers/Tweets/style';
import React, { useRef, useCallback } from 'react';
import { useVirtual } from 'react-virtual';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const VirtualizedTweets = ({ rows }) => {
	const parentRef = useRef();

	const rowVirtualizer = useVirtual({
		size: rows.length,
		parentRef,
		estimateSize: useCallback((i) => rows[i], [rows]),
		overscan: 5
	});

	return (
		<>
			<TweetsWrapper ref={parentRef}>
				<div
					style={{
						height: `${rowVirtualizer.totalSize}px`,
						width: '100%',
						position: 'relative'
					}}
				>
					{rowVirtualizer.virtualItems.map((virtualRow) => (
						<Tweet
							key={virtualRow.index}
							createdAt={rows[virtualRow.index].createdAt}
							updatedAt={rows[virtualRow.index].updatedAt}
							creatorId={rows[virtualRow.index].creatorId}
							points={rows[virtualRow.index].points}
							tweet={rows[virtualRow.index].tweet}
							tweetImage={rows[virtualRow.index].tweetImage}
							voteStatus={rows[virtualRow.index].voteStatus}
							creatorUsername={rows[virtualRow.index].creatorUsername}
							creatorName={rows[virtualRow.index].creatorName}
							id={rows[virtualRow.index].id}
							showActions
							showReplies={false}
						/>
					))}
				</div>
			</TweetsWrapper>
		</>
	);
};

export default VirtualizedTweets;
