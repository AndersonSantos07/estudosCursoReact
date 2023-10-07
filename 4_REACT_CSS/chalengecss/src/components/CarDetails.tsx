import styles from './CarDetails.module.css'


function CarDetails() {

    const carList = [
        {id:1,brand:"BMW", color:"Red", km:0},
        {id:2,brand:"VW", color:"White", km:1000000},
        {id:3,brand:"FERRARI", color:"Blue", km:0},
        {id:4,brand:"CHEV", color:"Green", km:250000}
    ]



  return (
    <div className={styles.container}>
        <h1>Carros: </h1>
        <ul>
            {carList.map((data)=>(
                <li key={data.id}>
                    Marca: {data.brand} | Cor: {data.color} | KM: {data.km}
                </li>
            ))}
        </ul>

    </div>
  )
}

export default CarDetails