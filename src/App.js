import React, { useState } from 'react';
import ChapterTitle from './components/ChapterTitle/ChapterTitle';
import data from './assets/content.json';
import ChapterParagraph from './components/ChapterParagraph/ChapterParagraph';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import backgroundImg from './book-setting.jpg';
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
  const [currentTheme, setCurrentTheme] = useState(theme.green);

  return (
    <ThemeProvider theme={currentTheme} >
      <div className="ChapterReader">
        <Parallax pages={paragraphs.length / 2 + 1} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            sticky={{ start: 0, end: paragraphs.length }}>
            <ChapterTitle title={title} />
            <Button onClick={() => setCurrentTheme(currentTheme.name === 'Green' ? theme.blue : theme.green)}>{currentTheme.name}</Button>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0, end: 0.5 }} style={{ backgroundImage: `linear-gradient(${currentTheme.primary}, #e2e0df)`, zIndex: -2, backgroundSize: '100%' }} />
          {paragraphs.map((paragraph) => (
            <ParallaxLayer
              key={paragraph.id}
              offset={parseInt(paragraph.id) * 0.5}
              speed={Math.random()}
            >
              <ChapterParagraph paragraph={paragraph.content} />
            </ParallaxLayer>
          ))}
          <ParallaxLayer
            sticky={{ start: 2, end: paragraphs.length / 2 + 1 }}
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: 'center',
              zIndex: -1
            }} />
        </Parallax>
      </div>
    </ThemeProvider>
  );
}

export default App;
