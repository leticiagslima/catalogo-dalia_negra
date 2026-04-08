function Produtosp(props) {

    return (
        <div className="produtos-perfil">
           <img 
              src={props.foto}
              alt={props.nome}
            />
        </div>
    );

}

export default Produtosp;