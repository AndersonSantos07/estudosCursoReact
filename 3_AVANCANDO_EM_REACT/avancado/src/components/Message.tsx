
const Message = ({msg}:any) => {
  
  return (
    <>

    <h1>A mensagem é: {msg === "" ? "vazio": msg }</h1>

    </>
  )
}

export default Message