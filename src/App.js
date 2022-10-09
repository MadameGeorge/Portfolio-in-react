import React from "react"
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CardProject } from './components/CardProject';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header/>
        <CardProject
          title="Card title"
          subtitle="Card subtitle lorem ipsum"
        />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
