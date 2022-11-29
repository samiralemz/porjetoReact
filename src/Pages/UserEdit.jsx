import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from '../componts/form/DatePicker';
import GeneroOptions from '../componts/form/GeneroOptions';

function UserEdit(props) {
  const {user, updateUser} = props
  const [email , setEmail  ] = useState(user.email);
  const [senha , setSenha  ] = useState(user.senha);
  const [nome  , setNome   ] = useState(user.nome);

  const [genero, setGenero ] = useState(user.genero);
  const [dataNascimento, setDataNascimento] = useState(user.dtNascimento);
  const [showMessageSuccess, setShowMessageSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Garante que usuário esta com as informações atualizadas
    const userInfo = (await axios.get("http://localhost:8080/usuario", {params: {email: user.email}})).data[0];

    // Converte objeto Date em String no padrão yyyy-MM-dd
    let nascimento = dataNascimento.toISOString().split('T')[0];
    const generoChar = genero[0];
    const editedUser = userInfo
    editedUser.nome = nome;
    editedUser.email = email;
    editedUser.senha = senha;
    editedUser.dtNascimento = nascimento;
    editedUser.genero = generoChar;

    axios.put("http://localhost:8080/usuario/"+user.id, editedUser)
    .then(response => {
      editedUser.dtNascimento = dataNascimento;
      updateUser(editedUser)
    });
  }


  function clearFields() {
    setNome("");
    setEmail("");
    setSenha("");
    setGenero("");
    setDataNascimento("");
  }

  function handleDatePick(dataNascimento) {
      setDataNascimento(dataNascimento);
  }

  function handleGeneroSelection(genero) {
      setGenero(genero);
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="d-flex card p-3 flex-column container-fluid align-items-center" style={{maxWidth: "35rem"}}>
          <span className="fw-bold h5" style={{color: "#149f4a"}}>
              Configurar Perfil
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
              
              <input type="text" className="form-control mb-3"
                  id="input_nome" 
                  required
                  placeholder="Como devemos chamar você?"
                  value={nome}
                  onChange={e => setNome(e.target.value)}/>
              
              <div className="mb-3">
                  <small className="text-muted">Data de Nascimento</small>
                  <DatePicker onDatePick={handleDatePick} value={dataNascimento}/>
              </div>

              <div className="mb-3">
                  <GeneroOptions onSelect={handleGeneroSelection} genero={genero}/>
              </div>
              {showMessageSuccess ? (
                  <div className="alert alert-success alert-dismissible" role="alert">
                      {showMessageSuccess}
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
              ): <></>
              }
              
              <button type="submit" className="btn btn-success">Salvar</button>
          </form>
      </div>

    </div>
  )
}

export default UserEdit;