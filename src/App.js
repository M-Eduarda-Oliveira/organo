import { useState  } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome:'Programaç',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Front-end',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Data Science',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Devops',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Ux e Design',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Mobile',
      corPrimaria:'',
      corSecundaria:''
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'',
      corSecundaria:''
    }
  ]

  const[colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    //Espalhando os colaboradores antigos(...colaboradores) e colocando o novo adicionado no final
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
    </div>
  );
} 

export default App;
