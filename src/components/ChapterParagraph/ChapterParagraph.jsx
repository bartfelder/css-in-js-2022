import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BaseStyle } from '../ChapterTitle/ChapterTitle';

const propTypes = {
  paragraph: PropTypes.string,
};

const Paragraph = styled(BaseStyle)`
font-weight: 300;
background-color: #e2e0df;
border: 15px solid ${props => props.theme.primary};
border-radius: 5px;
`

const ChapterParagraph = ({ paragraph }) => (
  <Paragraph>{paragraph}</Paragraph>
)

ChapterParagraph.propTypes = propTypes;

export default ChapterParagraph;