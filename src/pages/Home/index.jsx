import { useEffect, useState, useRef } from 'react';
import './style.css'
import axios from 'axios';
import React from 'react';

function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  
  async function getUsers() {
    await axios.get('http://localhost:3000/usuarios')
      .then(resposta => {
        setUsers(resposta.data);
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  useEffect(() => {
    getUsers()
  }, []);

  async function createUsers() {
    await axios.post('http://localhost:3000/usuarios', {
      nome: inputName.current.value,
      idade: inputAge.current.value,
      email: inputEmail.current.value
    })
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
    getUsers()
  }

  async function deleteUsers(id) {
    await axios.delete(`http://localhost:3000/usuarios/${id}`)

    getUsers()
  }

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName}/>
        <input placeholder="Idade" name="idade" type="number" ref={inputAge}/>
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>
      {
        users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.nome}</span> </p>
              <p>Idade: <span>{user.idade}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <img src="https://svgshare.com/i/16qg.svg" alt="logo de lixeira" />
            </button>
          </div>
        ))
      }

    </div>
  )
}

export default Home
