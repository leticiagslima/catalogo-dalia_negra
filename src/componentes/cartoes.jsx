import Produtosp from './produto-perfil.jsx';

function Cartoes(props) {
     
    return (
        <div className="cartao">
            <Produtosp foto={props.foto}/>
            <h3>{props.nome}</h3>
            <p>{props.preco}</p>
            <button>Comprar</button>
        </div>
    );

}

export default Cartoes;