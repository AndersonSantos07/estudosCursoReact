import { data } from './Users'

const dataFilter = data.filter((data) => data.age >= 18)

function CheckUserAge() {
    return (
        <>
            <h1>Users que podem tirar Habilitação: </h1>
            <ul>
                {dataFilter.map(data =>(

                    <li key={data.id}>{data.name} | {data.age} | {data.job}</li>
                ))}
            </ul>

        </>

    )
}

export default CheckUserAge