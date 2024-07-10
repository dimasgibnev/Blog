import styled from 'styled-components';
import { MyIcon, MyInput } from '../../../../ui';
import { SpecialPanel } from '../special-panel/SpecialPanel';
import { useEffect, useRef } from 'react';
import { sanitazeContent } from './utils';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { savePostAsync } from '../../../../store/actions';
import { useNavigate } from 'react-router-dom';

const PostFormContainer = ({
	className,
	post: { id, imageUrl, title, publishedAt, content },
}) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitazeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};


	return (
		<div className={className}>
			<MyInput
				ref={imageRef}
				defaultValue={imageUrl}
				placeholder="Изображение..."
			/>
			<MyInput ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<SpecialPanel
				margin="20px 0"
				publishedAt={publishedAt}
				editButton={
					<MyIcon id={'fa-floppy-o'} margin="0 10px 0 0" onClick={onSave} />
				}
			/>
			<div
				ref={contentRef}
				className="post-text"
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
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
