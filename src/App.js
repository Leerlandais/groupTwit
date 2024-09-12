import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p className={"text-green-500 mb-8"}>
          Si ce message est vert, alors tout va bien
        </p>
        <p className={"bg-gradient-to-r from-green-500 via-violet-400 to-orange-500 bg-clip-text text-transparent mb-8"}>
          Et si le logo est beau, le texte devra être génial
        </p>
        <a
            className="bg-gradient-to-tl from-violet-500 via-green-400 to-red-500 bg-clip-text text-transparent mb-8"
            href="https://www.creative-tim.com/twcomponents/cheatsheet/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Tailwind Cheatsheet
        </a>
        <a
            className="bg-gradient-to-bl from-green-500 via-violet-400 to-orange-500 bg-clip-text text-transparent mb-8"
            href="https://www.creative-tim.com/twcomponents/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Tailwind Composants
        </a>
      </header>
    </div>
  );
}

export default App;
