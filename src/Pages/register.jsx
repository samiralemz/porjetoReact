import ListaMusicas from "../componts/ListaMusicas";

function Register() {
    return (
    <div className="d-flex justify-content-center">
        <div className="col-md-4">
            <span className="fw-bold h5" style={{color: "#149f4a"}}>
                Registrar Novo Usuario
            </span>
            <form>
                <div className="mb-3">
                    <label htmlFor="input_email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="input_email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input_senha" className="form-label">Password</label>
                    <input type="password" className="form-control" id="input_senha"/>
                    <div className="mt-2">
                        <input className="form-check-input" type="checkbox" value=""/>
                        <label className="form-check-label mx-2">
                            Lembrar de mim
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Salvar</button>
            </form>
        </div>
        <div className="col-md-4 mx-3">
            <ListaMusicas />
        </div>
    </div>
    )
}

export default Register;