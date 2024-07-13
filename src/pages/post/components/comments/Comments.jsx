import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './components';
import { MyIcon } from '../../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentsAsync } from '../../../../store/actions';
import { ROLE } from '../../../../constants';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId, userId, content) => {
		dispatch(addCommentsAsync(requestServer, postId, userId, content));
		setNewComment('');
	};
	
	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
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
			)}
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						postId={postId}
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
	margin: 0 auto;
	width: 600px;

	& .new-comment {
		width: 100%;
		display: flex;
		margin-bottom: 20px;
	}

	& .new-comment textarea {
		font-size: 18px;
		resize: none;
		width: 100%;
		height: 120px;
		padding: 5px 10px;
	}
`;
