import { useState } from 'react'
import './MyForm.css'


const MyForm = ({user}:any) => {
    //6 - Controller Inputs





    // 3 - gerenciamento de dados
    const [name, setName] = useState(user !== '' ? user.name: '')
    const [email, setEmail] = useState(user !== '' ? user.email : '')
    const [bio, setBio] = useState('')
    const [role, setRole] = useState('')

    const handleName = (e:any) =>{
        
       setName(e.target.value)
    }

    const handleEmail = (e:any) =>{

        setEmail(e.target.value)
    }

    const handleSubmit =(e:any)=>{

        e.preventDefault()
        console.log("enviando o formulário!")
        console.log(name, email, bio, role)
    
        
        //validacao
        //envio

        //7 - resentando 
        e.target[0].value = ''
        e.target[1].value = ''

        //or
        //setName("")
        //setEmail("")
        setBio('')
        setRole('')


    }



    return (
        <div>
            
            {/*5- Envio de form */}
            {/* 1 - Criação de form! */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input value={name} type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
                    {/* 2 - Label envolvendo o input! */}
                    <label>
                        <span>E-mail</span>
                        <input value={email} type="email" name="email" placeholder="Digite o Seu e-mail" onChange={handleEmail}/>
                    </label>
                </div>
                <input type="submit" value="Enviar"/>

                <p>{name}</p>
                <p>{email}</p>

                {/*8 - Textarea */}
                <label>
                    <textarea name="bio" id="bio" placeholder='Descrição do usuário' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/*9 - Select */}
                <label>
                    <select name="role" onChange={(e)=>setRole(e.target.value)}>
                        <option value="" selected
                        ></option>
                        <option value="developer">Developer</option>
                        <option value="engineer">Engineer</option>
                        <option value="master">Master</option>
                        <option value="backend">backend</option>
                    </select>
                </label>
            </form>


        </div>
    )
}

export default MyForm