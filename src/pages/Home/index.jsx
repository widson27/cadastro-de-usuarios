import { useEffect, useState, useRef } from 'react';
import './style.css'
import React from 'react';
import { v4 } from 'uuid';

function Home() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users]);

  function createUsers() {
    const newUser = {
      id: v4(),
      nome: inputName.current.value,
      idade: inputAge.current.value,
      email: inputEmail.current.value
    }

    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
    setUsers([...users, newUser])
  }

  function deleteUsers(userId) {
    const newUsers = users.filter(user => user.id != userId)
    setUsers(newUsers)

  }

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail} />
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
