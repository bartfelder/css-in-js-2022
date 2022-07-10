import React from 'react';
import ChapterTitle from './components/ChapterTitle';
import data from './assets/content.json';
import ChapterParagraph from './components/ChapterParagraph';
import './styles.css'

function App() {
  const { title, paragraphs } = data.chapters.at(0);

  return (
    <div className="ChapterReader">
      <ChapterTitle title={title} />
      {paragraphs.map((paragraph) => <ChapterParagraph key={paragraph.id} paragraph={paragraph.content} />)}
    </div>
  );
}

export default App;
