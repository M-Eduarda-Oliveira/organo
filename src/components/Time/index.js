import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria };
    const border = {borderColor: props.corPrimaria};
    return(
        //Solução para esconder times vazios
        //(props.colaboradores.lengh > 0) && é a forma react de fazer uma verificação, caso for true, retorna o outro lado da expressão.
        // ou se pode fazer um ternário
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={border}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
            </div>
        </section>
        : ''
    )
}

export default Time