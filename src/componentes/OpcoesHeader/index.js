import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['Categoria', 'Favorito', 'Estante'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => {
                return <Opcao><p>{texto}</p></Opcao>
            })}
        </Opcoes>
    )
}

export default OpcoesHeader