import React from 'react';
import { MyIcon } from '../../../../ui';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closeModal, openModal, removePostAsync } from '../../../../store/actions';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (postId) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, postId)).then(() =>
						navigate('/'),
					);
					dispatch(closeModal);
				},

				onCancel: () => dispatch(closeModal),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && <MyIcon id={'fa-calendar-o'} margin="0 10px 0 0"  isIcon={true} />}
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{publishedAt && (
					<MyIcon
						id={'fa-trash-o'}
						margin="0  0 0 10px"
						onClick={() => onPostRemove(id)}
					/>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
	}
	& .buttons {
		display: flex;
		align-items: center;
	}
`;
