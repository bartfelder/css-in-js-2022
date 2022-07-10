import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  title: PropTypes.string,
};

export const BaseStyle = styled.div`
width: 1000px;
box-sizing: border-box;
border-radius: 15px;
padding: 50px;
margin: auto;
margin-top: 5px;
`

const Title = styled(BaseStyle)`
font-size: 2rem;
color: #e2e0df;
background-color: ${props => props.theme.primary};
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