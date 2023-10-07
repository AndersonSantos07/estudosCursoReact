
function ChangeMessage({alteraMsg}:any) {
  return (
    <>
        <button onClick={()=> alteraMsg('Olá')}>1</button>
        <button onClick={()=> alteraMsg('Oi')}>2</button>
        <button onClick={()=> alteraMsg('Olá Tudo bem?')}>3</button>
    </>
  )
}

export default ChangeMessage