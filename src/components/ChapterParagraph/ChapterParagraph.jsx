import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChapterParagraph.module.css';

const propTypes = {
  paragraph: PropTypes.string,
};

const ChapterParagraph = ({ paragraph }) => (
  <div className={styles.paragraph}>{paragraph}</div>
)

ChapterParagraph.propTypes = propTypes;

export default ChapterParagraph;