import React from "react";
import { Link } from "react-router-dom";
import "../css/cabecalho.css"

function Cabecacalho(props) {
    return (
    <div className="layout-flex" key={'Cabecalho'}>
        <div>
            <Link to="/" className="text-decoration-none">
                <img src="/images/logo.png" width="50px" className="img-fluid" />
            </Link>
        </div>
        <div className="layout-flex-alinhamento-itens text-uppercase">
            <span>playlist</span>
            <span><Link to="/register" className="text-decoration-none" style={{color: "white"}}>registrar</Link></span>
            <span>fazer login</span>
            <span><Link to="/faq" className="text-decoration-none" style={{color: "white"}}>FAQ</Link></span>
        </div>
    </div>
    );
  }
  
  export default Cabecacalho;
