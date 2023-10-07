

const TemplateExpressions = () =>{

    let name = 'Anderson'
    const data = {
        id:1,
        name:name,
        age: 21,
        job:"programer"


    }

return (

    <div>
        <h1>olá {name}, tudo bem?</h1>
        <p>Você trabalha como {data.job}</p>
        <p>{4+4}</p>
    </div>

)



}

export default TemplateExpressions