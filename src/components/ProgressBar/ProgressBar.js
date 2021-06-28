/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
	return (
		<BarWrapper size>
			<Progress value />
		</BarWrapper>
	);
};

const BarWrapper = styled.div`
	width: 100%;
	background-color: ${COLORS.transparentGray15};
`;

const Progress = styled.div`
	width: 20%;
	height: 30px;
	background-color: ${COLORS.primary};
`;

export default ProgressBar;
