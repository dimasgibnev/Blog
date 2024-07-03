import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PostContent, Comments } from './components';
import { selectPost } from '../../selectors';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../store/actions';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.postId));
	}, [dispatch, params.postId, requestServer]);

	return (
		<div className={className}>
			<PostContent post={post}/>
			<Comments comments={post.comments} postId={post.id}/>
		</div>
	);
};

export const Post = styled(PostContainer)`
`;
