import React, { useState } from 'react';
import ChapterTitle from './components/ChapterTitle/ChapterTitle';
import data from './assets/content.json';
import ChapterParagraph from './components/ChapterParagraph/ChapterParagraph';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  green: {
    name: 'Green',
    primary: 'green'
  },
  blue: {
    name: 'Blue',
    primary: 'midnightblue'
  }
}

const Button = styled.button`
background-color: ${props => props.theme.primary};
border-radius: 15%;
color: #e2e0df;
padding: 20px;
position: fixed;
top: 50px;
right: 50px;
width: 100px;
`

function App() {
  const { title, paragraphs } = data.chapters.at(0);
  const [currentTheme, setCurrentTheme] = useState(theme.green)

  return (
    <ThemeProvider theme={currentTheme} >
      <div className="ChapterReader">
        <ChapterTitle title={title} />
        <Button onClick={() => setCurrentTheme(currentTheme.name === 'Green' ? theme.blue : theme.green)}>{currentTheme.name}</Button>
        {paragraphs.map((paragraph) => <ChapterParagraph key={paragraph.id} paragraph={paragraph.content} />)}
      </div>
    </ThemeProvider>
  );
}

export default App;
