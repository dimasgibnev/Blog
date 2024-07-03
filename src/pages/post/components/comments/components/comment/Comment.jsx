import styled from 'styled-components';
import { MyIcon } from '../../../../../../ui';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="information-panel">
				<div className="author">
					<MyIcon
						id="fa-user-circle-o"
						size="lg"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
					{author}
				</div>
				<div className="published-at">
					<MyIcon
						id="fa-calendar-o"
						size="lg"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
`;
