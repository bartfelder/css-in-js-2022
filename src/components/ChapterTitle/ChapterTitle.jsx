import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChapterTitle.module.css'

const propTypes = {
  title: PropTypes.string,
};

const ChapterTitle = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
)

ChapterTitle.propTypes = propTypes;

export default ChapterTitle;