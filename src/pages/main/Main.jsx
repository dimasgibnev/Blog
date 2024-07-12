import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { Pagination, PostCard, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import { debounce } from './utils/debounce';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			(loadedData) => {
				setPosts(loadedData.res.posts);
				setLastPage(loadedData.res.lastPage);
			},
		);
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="post-search">
				<Search onChange={onSearch} searchPhrase={searchPhrase} />
			</div>
			<div className="post-list">
				{posts.length ? (
					posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => {
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
					})
				) : (
					<h3 className="no-post-found">Статьи не найдены!</h3>
				)}
			</div>

			{lastPage > 1 && (
				<Pagination setPage={setPage} page={page} lastPage={lastPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	width: 100%;
	padding: 20px 10px;
	& .post-list {
		display: flex;
		flex-wrap: wrap;
	}
	& .no-post-found {
		text-align: center;
	}
`;
