import React from "react";
function Cabecacalho(props) {
    return (
      <div className="layout-flex" key={'Cabecalho'}>
      <div>
          <a href="#">
              <img src="#" width="50px" className="img-fluid" />
          </a>
      </div>
      <div className="layout-flex-alinhamento-itens">
          <span style="text-decoration: none; color: white">consultar playlist</span>
          <span><a href="pagina_registro.html" style="text-decoration: none; color: white">registrar</a></span>
          <span style="text-decoration: none; color: white">fazer login</span>
          <span><a href="./faq.html" style="text-decoration: none; color: white">FAQ</a></span>
      </div>
      </div>
    );
  }
  
  export default Cabecacalho;
