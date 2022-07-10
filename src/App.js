import React from 'react';
import ChapterTitle from './components/ChapterTitle/ChapterTitle';
import data from './assets/content.json';
import ChapterParagraph from './components/ChapterParagraph/ChapterParagraph';

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
