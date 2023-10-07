interface ShowUserNameProps{
    name: string,
    age: BigInt
}


const ShowUserName = (props:any,{name}:ShowUserNameProps)=>{

    return (

        <div>
            <h2>O nome do usuário é: {name} e sua idade é {props.age}</h2>

        </div>
    )
}

export default ShowUserName
