
const Container = (props:any) => {
  
    console.log(props)
  
    return (
    
    <div>
        <h1>Titulo do Container</h1>
        {props.children}
        <p>{props.propriedade}</p>
    </div>
  )
}

export default Container