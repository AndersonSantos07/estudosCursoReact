const Challenge = ()=>{

    const n1 = 22
    const n2 = 17

    const handleSum = (n1:any,n2:any)=>{

        return console.log(n1+n2)
    }


    return(

        <div>
            <p>{n1}</p>
            <p>{n2}</p>
            <button onClick={()=> handleSum(n1,n2)}>Clique aqui e some!</button>
        </div>

    )

}

export default Challenge;