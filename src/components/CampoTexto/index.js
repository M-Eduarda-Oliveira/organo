import './CampoTexto.css'
const CampoTexto = (props) => {

    // let valor = 'Duda Oliveira'
    // const [valor, setValor] = useState('')
    //Desestruturando o array e pegando a primeira posição (valor) e a segunda(setValor)
    //Valor - valor atual e setValor é a função utilizada para atualizar o nosso estado

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto