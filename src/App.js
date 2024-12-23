import './App.css';
import Logo from './componentes/Logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

const textoOpcoes = ['Categoria', 'Favorito', 'Estante'];
const icones = [perfil, sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className='opcoes'>
          { textoOpcoes.map( (texto) => {
            return <li className='opcao'><p>{ texto }</p></li>
          }) }
        </ul>
        <ul className='icones'>
          { icones.map( (icone) => {
            return <li className='icone'><img src = { icone } alt='icone'/></li>
          }) }
        </ul>
      </header>
    </div>
  );
}

export default App;
