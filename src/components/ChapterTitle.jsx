import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

const ChapterTitle = ({ title }) => (
  <h1 className="title">{title}</h1>
)

ChapterTitle.propTypes = propTypes;

export default ChapterTitle;