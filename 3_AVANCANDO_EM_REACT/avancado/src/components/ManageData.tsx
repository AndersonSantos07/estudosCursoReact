import { useState } from "react";

const ManageData = ()=>{

    const [number,setNumber] = useState(0);

    const handleContador = ()=>{

        return setNumber(number + 1)
    }


    return (
        <div>
            <div>
                <p>{number}</p>
                <button onClick={handleContador}>Contando...</button>
            </div>
        </div>
    )
}

export default ManageData;