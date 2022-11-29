import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const {onUserLogin} = props;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.get("http://localhost:8080/usuario", {params: { email }}).then(response => {
      if(response.data.length === 0){
        setShowErrorMessage("Usuário não existe!")
        return;
      }
      const user = response.data[0];
      if(senha !== user.senha) {
        setShowErrorMessage("Senha incorreta!");
        return;
      }

      user.nascimento = new Date(user.nascimento);
      
      localStorage.setItem(
        "user_logged_in",
        JSON.stringify(user)
      );
      
      onUserLogin(user);
      navigate("/");
    })
    
  }

  return (
    <div className="container d-flex justify-content-center mt-5" style={{maxWidth: "35rem"}}>
      <div className="d-flex card p-3 flex-column container-fluid align-items-center p-5">
        <span className="fw-bold h5" style={{color: "#149f4a"}}>
          Login
        </span>
        <form className="container-fluid" onSubmit={e => handleSubmit(e)}>
          <input type="email" className="form-control mb-3"
              id="input_email"
              required
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          
          <input type="password" className="form-control mb-3"
                    id="input_senha" 
                    required
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}/>

          {showErrorMessage ? (
                        <div className="alert alert-danger" role="alert">
                            {showErrorMessage}
                        </div>
                    ): <></>
          }
          <div className="d-grid">
            <button type="submit" className="btn btn-success">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;