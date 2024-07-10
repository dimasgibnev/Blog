import React from 'react';
import { MyIcon } from '../../../../ui';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<MyIcon id={'fa-calendar-o'} margin="0 10px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<MyIcon id={'fa-trash-o'} />
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
