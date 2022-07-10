import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  paragraph: PropTypes.string,
};

const ChapterParagraph = ({ paragraph }) => (
  <div className="paragraph">{paragraph}</div>
)

ChapterParagraph.propTypes = propTypes;

export default ChapterParagraph;