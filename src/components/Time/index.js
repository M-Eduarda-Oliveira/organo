import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria };
    const border = {borderColor: props.corPrimaria};
    return(
        <section className='time' style={css}>
            <h3 style={border}>{props.nome}</h3>
            <Colaborador/>
        </section>
    )
}

export default Time