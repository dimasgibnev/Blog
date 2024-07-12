import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { Pagination, PostCard } from './components';
import { PAGINATION_LIMIT } from '../../constants';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1)
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((loadedData) => {
			setPosts(loadedData.res.posts);
			setLastPage(loadedData.res.lastPage)
		});
	}, [requestServer, page]);

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
			{lastPage > 1 && <Pagination setPage={setPage} page={page} lastPage={lastPage}/>}
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
