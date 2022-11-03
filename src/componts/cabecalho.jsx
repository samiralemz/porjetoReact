import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../css/cabecalho.css"
import UserMenu from "./UserMenu";


function Cabecacalho(props) {
    const { user, onUserLogout } = props;
    const [search, setSearch] = useState();
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        navigate("buscar/" + search);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-decoration-none">
                    <img src="/images/logo.png" width="50px" className="img-fluid" />
                </Link>

                <form className="d-flex" onSubmit={e => handleSearch(e)}>
                    <InputGroup className="mb-1">
                    <Form.Control
                        placeholder="Busque por música"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        />
                    <Button variant="outline-secondary" id="button-addon2">
                        Buscar
                    </Button>
                    </InputGroup>
                </form>
            </div>
            <div className="collapse navbar-collapse text-uppercase">
                <ul className="navbar-nav">

                   {user !== null ? <li className="nav-item">
                        <Link to={'/playlist'} className="nav-link text-decoration-none fw-bold" style={{ color: "white" }}>playlist</Link>
                    </li> : null} 
                    {user ?
                        <UserMenu user={user} onLogoutUser={onUserLogout} />
                        :
                        <>

                            <li className="nav-item">
                                <Link to="/register" className="nav-link text-decoration-none fw-bold" style={{ color: "white" }}>
                                    registrar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link text-white">
                                    Login
                                </Link>
                            </li>
                        </>
                    }
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link text-decoration-none fw-bold" style={{ color: "white" }}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Cabecacalho;
