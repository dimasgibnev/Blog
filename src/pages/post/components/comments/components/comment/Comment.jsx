import styled from 'styled-components';
import { MyIcon } from '../../../../../../ui';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
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
			<MyIcon id="fa-trash-o" size="lg" onClick={() => {}} />
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
