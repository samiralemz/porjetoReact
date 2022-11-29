import axios from "axios";
import { useState } from "react";
import DatePicker from "../componts/form/DatePicker";
import GeneroOptions from "../componts/form/GeneroOptions";
import ListaMusicas from "../componts/ListaMusicas";


function Register() {
    const [email , setEmail  ] = useState("");
    const [senha , setSenha  ] = useState("");
    const [nome  , setNome   ] = useState("");
    const [genero, setGenero ] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const [confirmarEmail, setConfirmarEmail] = useState("");
    const [erroConfirmarEmail, setErroConfirmarEmail] = useState("");
    const [showMessageSuccess, setShowMessageSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if(!isValidFields())
            return;
        
        let nascimento = dataNascimento.toISOString().split('T')[0];
        const generoChar = genero[0];
        const usuario = {
            email,
            nome,
            senha,
            dtNascimento: nascimento,
            genero: generoChar
        };

        axios.post("http://localhost:8080/usuario", usuario).then((response) => {
            usuario.id = response.data.id;
            clearFields();
            setShowMessageSuccess(true);
            localStorage.setItem(
                "user_logged_in",
                JSON.stringify(usuario)
            );
        })
    }
    
    function clearFields() {
        setNome("");
        setEmail("");
        setConfirmarEmail("");
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

    function isValidFields() {
        const elementoConfirmarEmail = document.getElementById("input_confirmar_email");
        if(email !== confirmarEmail) {
            setErroConfirmarEmail("E-mail diferente");
            elementoConfirmarEmail.classList.add("is-invalid");
            return false;
        }
        elementoConfirmarEmail.classList.remove("is-invalid");
        setErroConfirmarEmail("");
        return true;
    }

    return (
        <div className="container d-flex justify-content-center">

        <div className="d-flex mt-5 container-fluid" style={{maxWidth: "60rem"}}>
            <div className="d-flex card p-3 flex-column container-fluid align-items-center">
                <span className="fw-bold h5" style={{color: "#149f4a"}}>
                    Cadastrar
                </span>
                <form className="container-fluid" onSubmit={e => handleSubmit(e)}>
                    <input type="email" className="form-control mb-3"
                        id="input_email"
                        required
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />


                    <div className="form-group mb-3">    
                        <input type="email"
                            className="form-control"
                            id="input_confirmar_email"
                            required
                            placeholder="Confirmar E-mail"
                            value={confirmarEmail}
                            onChange={e => setConfirmarEmail(e.target.value)} />
                        
                        <small className="text-danger">
                            {erroConfirmarEmail}
                        </small>
                    </div>

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
                        <DatePicker onDatePick={handleDatePick} date={dataNascimento} />
                    </div>

                    <div className="mb-3">
                        <GeneroOptions onSelect={handleGeneroSelection} genero={genero}/>
                    </div>
                    {showMessageSuccess ? (
                        <div className="alert alert-success alert-dismissible" role="alert">
                            Usuário cadastrado com sucesso!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    ): <></>
                    }
                    
                    <button type="submit" className="btn btn-success">Salvar</button>
                </form>
            </div>

            <div className="container-fluid" style={{maxWidth: "20rem"}}>
                <ListaMusicas />
            </div>
        </div>
    </div>
    )
}

export default Register;