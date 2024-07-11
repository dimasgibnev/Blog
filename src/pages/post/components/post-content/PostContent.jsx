import styled from 'styled-components';
import { H2, MyIcon } from '../../../../ui';
import { SpecialPanel } from '../special-panel/SpecialPanel';
import { useNavigate } from 'react-router-dom';
const PostContentContainer = ({
	className,
	post: { id, imageUrl, title, publishedAt, content },
}) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel
				id={id}
				margin="20px 0"
				publishedAt={publishedAt}
				editButton={
					<MyIcon
						id={'fa-pencil-square-o'}
						margin="0 10px 0 0"
						onClick={() => {
							navigate(`/post/${id}/edit`);
						}}
					/>
				}
			/>
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
	& .post-text {
		white-space: pre-line;
		font-size: 22px;
	}
`;
