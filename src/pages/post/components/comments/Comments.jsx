import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './components';
import { MyIcon } from '../../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../store/actions';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (postId, userId, content) => {
		dispatch(addCommentAsync(requestServer, postId, userId, content));
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<MyIcon
					id={'fa-paper-plane-o'}
					margin="0 0 0 10px"
					onClick={() => onNewCommentAdd(postId, userId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	margin: 0 auto;
	width: 580px;

	& .new-comment {
		width: 100%;
		display: flex;
	}

	& .new-comment textarea {
		font-size: 18px;
		resize: none;
		width: 100%;
		height: 120px;
	}
`;
