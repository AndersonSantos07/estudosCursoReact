import { data } from './Users'



function UserDetails() {
  return (
    <>

        <ul>
            {data.map(res=>(

                <li key={res.id}> {res.name} | {res.age} | {res.job} </li>    
                
            ))}
        </ul>
    
    </>
  )
}

export default UserDetails