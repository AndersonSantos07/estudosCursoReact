import {useState} from 'react'

const ConditionalRender = () =>{

    const [x] = useState(true)

    const [name] = useState("Anderson")

    return (
        <div>
            <h1>
                isso será exibido?
            </h1>
            {x && <p>X é verdadeiro! exibido.</p>}
            {!x && <p>X é falso!</p>}

            {
                name === 'Anderson' ? <h1>Olá Anderson</h1> : <h1>Voce nao</h1> 
            }
            {

                
            }

        </div>

    )

}

export default ConditionalRender