import React from "react";
import "../css/cabecalho.css"

function Cabecacalho(props) {
    return (
      <div className="layout-flex" key={'Cabecalho'}>
      <div>
          <a href="#">
              <img src="/images/logo.png" width="50px" className="img-fluid" />
          </a>
      </div>
      <div className="layout-flex-alinhamento-itens text-uppercase">
          <span>playlist</span>
          <span><a href="pagina_registro.html">registrar</a></span>
          <span>fazer login</span>
          <span><a href="./faq.html">FAQ</a></span>
      </div>
      </div>
    );
  }
  
  export default Cabecacalho;
