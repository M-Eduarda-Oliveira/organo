import "./Colaborador.css";

const Colaborador = ({nome, imagem, cargo}) => {
  //Dessa forma desestruturamos o grande objeto que é o props. É justamente a substituição do props.
  //Ajuda a utilizar somente a parte que nos interessa
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt={nome}/>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
