import { useState, useEffect} from "react"

const CarDetails = ({brand,km,color}:any)=>{
    const [newCar,setNewCar] = useState(false)

    useEffect(()=>{
        if(km === 0){

            setNewCar(true)
        }else{

            setNewCar(false)
        }

    },[newCar])


    return (
        <div>
            <h2>Detalhes do Carro</h2>
            <ul>
                <li>
                    Marca: {brand}
                </li>
                <li>    
                    KM: {km}
                </li>
                <li>
                    Cor: {color}
                </li>
            </ul>
            {newCar ? (<p>O carro é novo</p>):(<p>O carro é usado</p>)}

        </div>

    )

}

export default CarDetails
