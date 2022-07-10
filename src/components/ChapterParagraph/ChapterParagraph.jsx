import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  paragraph: PropTypes.string,
};

const Paragraph = styled.div`
font-weight: 300;
width: 1000px;
background-color: #e2e0df;
border: 15px solid green;
border-radius: 5px;
box-sizing: border-box;
padding: 50px;
margin: auto;
margin-top: 5px;
`

const ChapterParagraph = ({ paragraph }) => (
  <Paragraph>{paragraph}</Paragraph>
)

ChapterParagraph.propTypes = propTypes;

export default ChapterParagraph;