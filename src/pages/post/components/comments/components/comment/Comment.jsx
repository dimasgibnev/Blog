import styled from 'styled-components';
import { MyIcon } from '../../../../../../ui';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../../../hooks';
import {
	closeModal,
	openModal,
	removeCommentAsync,
} from '../../../../../../store/actions';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (commentId) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, commentId, postId));
					dispatch(closeModal);
				},

				onCancel: () => dispatch(closeModal),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<MyIcon
							id="fa-user-circle-o"
							size="lg"
							margin="0 10px 0 0 "
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<MyIcon
							id="fa-calendar-o"
							size="lg"
							margin="0 10px 0 0 "
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<MyIcon
				id="fa-trash-o"
				size="lg"
				onClick={() => {
					onCommentRemove(id);
				}}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	align-items: baseline;
	width: 580px;
	margin-bottom: 10px;

	& .comment {
		padding: 10px;
		border: 1px solid black;
		width: 100%;
		margin-right: 10px;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
	& .author {
		display: flex;
		justify-content: space-between;
	}
	& .published-at {
		display: flex;
	}
`;
