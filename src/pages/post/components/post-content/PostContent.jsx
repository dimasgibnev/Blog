import styled from 'styled-components';
import { H2, MyIcon } from '../../../../ui';
const PostContentContainer = ({
	className,
	post: { imageUrl, title, publishedAt, content },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<MyIcon id={'fa-calendar-o'} margin="0 10px 0 0" />
					{publishedAt}
				</div>
				<div className="buttons">
					<MyIcon id={'fa-pencil-square-o'} margin="0 10px 0 0" />
					<MyIcon id={'fa-trash-o'} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	margin-bottom: 20px;
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}
	& .published-at {
	}

	& .post-text {
	font-size: 22px}
`;
