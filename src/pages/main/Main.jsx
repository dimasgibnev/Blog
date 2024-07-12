import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((loadedPosts) => {
			if (loadedPosts.error) {
				return;
			}
			setPosts(loadedPosts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => {
					return (
						<PostCard
							imageUrl={imageUrl}
							key={id}
							id={id}
							title={title}
							publishedAt={publishedAt}
							commentsCount={commentsCount}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	width: 100%;
	padding: 20px 0;
	& .post-list {
		display: flex;
		flex-wrap: wrap;
	}
`;
