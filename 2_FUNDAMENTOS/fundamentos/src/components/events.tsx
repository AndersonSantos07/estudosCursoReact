const Events = () =>{

    const handleMyEvent = (e:any)=>{

        console.log(e)

        console.log("ativou o evento!")
    }

    const henderSomething = (x:any)=>{

        if(x){

            return <h1>Renderizando isso!</h1>
        }else{

            return <h1>Renderizando isso também!</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={()=> console.log("clicou nesse outro botão!")}>Clique aqui nesse outro botão</button>
            </div>
            {henderSomething(true)}
            {henderSomething(false)}
        </div>

    )

}

export default Events