
function UserDetails2({id,name,age,job}:any) {
  return (
    <>
        <h2>Dados do: {id}</h2>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >=18 ? (<p>Pode tirar Habilitação!</p>): (<p>Não pode tirar Habilitação!</p>)}
    </>
  )
}

export default UserDetails2