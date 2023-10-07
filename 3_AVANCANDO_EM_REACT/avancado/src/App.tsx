import './App.css'
import imgVite from '../public/vite.svg'
import imgReact from './assets/react.svg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import FuncaoProp from './components/FuncaoProp'
import { useState } from 'react'
import Message from './components/message'
import ChangeMessage from './components/changeMessage'
import UserDetails from './components/UserDetails'
import CheckUserAge from './components/CheckUserAge'
import UserDetails2 from './components/UserDetails2'


function App() {

  const showMessage = () => {
    console.log("Olá, mensagem passada pelo props!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg:string) =>{

     setMessage(msg)
  }

  const cars = [
    { id: 1, brand: "VW", km: 12223, color: "red" },
    { id: 2, brand: "BMW", km: 0, color: "white" },
    { id: 3, brand: "CHEV", km: 12223, color: "red" },
    { id: 4, brand: "FERRARI", km: 0, color: "black" }
  ]

  const peoples = [
    {id:1, name:"Anderson1", age:21, job:"Developer"},
    {id:2, name:"João1", age:32, job:"Mechanic"},
    {id:3, name:"Maria1", age:62, job:"Engineer"},
    {id:4, name:"Antonio1", age:17, job:"Engineer"},
    {id:5, name:"Lucas1", age:18, job:"Engineer"},
    {id:6, name:"Andersen1", age:15, job:"Engineer"},
    {id:7, name:"Mario1", age:21, job:"Engineer"}
  ]


  return (
    <>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <img src={imgVite} alt="imagem do vite" />
      {/*Imagem no assets */}
      <img src={imgReact} alt="Imagem do React" />
      {/*useState */}
      <ManageData />
      {/*Renderização de Listas */}
      <ListRender />
      {/*Renderização Condicional*/}
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Anderson" age="21" />
      {/*desestruturando props*/}
      <CarDetails brand="BMW" km={200000} color="red" />
      {/*Reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="white" />
      <CarDetails brand="CHEV" km={12340} color="black" />
      <CarDetails brand="Ferrari" km={0} color="red" />
      {/*Loop em Array de Objetos */}
      {cars.map(data => (

        <CarDetails key={data.id} brand={data.brand} km={data.km} color={data.color} />
      ))}
      {/* Fragment */}
      <Fragment />
      {/* Children */}
      <Container propriedade={12}>

        <p>Ola</p>


      </Container>

      {/* Função em Prop */}
      <FuncaoProp fun={showMessage} />

      {/* Elevação de Estado */}
      <Message  msg={message}/>
      {/*Função altera mensagem (Elevação de estado) */}
      <ChangeMessage alteraMsg={handleMessage}/>

       {/*Desafio 4 - todos users*/}
        <UserDetails />

        {/*Desafio 4 - Maiores de 18*/}
        <CheckUserAge />  

        {/*Desafio 4 - todos users de outra forma*/}
        {peoples.map(data=>(

          <UserDetails2 key={data.id} id={data.id} name={data.name} age={data.age} job={data.job}/>

        ))}

    </>
  )
}

export default App
