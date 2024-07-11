import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PostContent, Comments, PostForm } from './components';
import { selectPost } from '../../selectors';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../store/actions';
import { RESET_POST_DATA } from '../../store/actions/reset-post-data';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:postId/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.postId));
	}, [dispatch, params.postId, requestServer, isCreating]);

	return (
		<div className={className}>
			{isEditing || isCreating ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)``;
