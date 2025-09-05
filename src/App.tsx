import './App.css'
import Cards from './components/Cards/index.tsx';
import Header from './components/Header/index.tsx';
import { dadosCards } from './components/dados.ts';

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="cards-container">
          {dadosCards.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App