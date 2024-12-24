import './estilo.css';

const textoOpcoes = ['Categoria', 'Favorito', 'Estante'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => {
                return <li className='opcao'><p>{texto}</p></li>
            })}
        </ul>
    )
}

export default OpcoesHeader