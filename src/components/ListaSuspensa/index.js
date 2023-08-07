import './ListaSuspensa.css'
const ListaSupensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value ={props.valor}>
                {/* É a mesma coisa que fazer. Para cada item que interar, retorne uma option*/}
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
                {/* {props.itens.map(item => <option key={item}>{item}</option>)} */}
            </select>
        </div>
    )
}

export default ListaSupensa