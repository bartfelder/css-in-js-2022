import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  title: PropTypes.string,
};

const Title = styled.h1`
width: 1000px;
color: #e2e0df;
background-color: green;
box-sizing: border-box;
border-radius: 15px;
padding: 50px;
margin-left: auto;
margin-right: auto;
text-align: center;
`;

const ChapterTitle = ({ title }) => {
  return (
    <Title>{title}</Title>
  )
};

ChapterTitle.propTypes = propTypes;

export default ChapterTitle;