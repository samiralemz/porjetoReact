function GeneroOptions() {
  return (
    <>
      <div className="form-check-inline">
        <label className="form-check-label">
            <input
                className="form-check-input me-2" 
                type="radio"
                value="masculino" 
                name="opt-genero"/>
            Masculino
        </label>
    </div>

    <div className="form-check-inline">
        <label className="form-check-label">
            <input
                className="form-check-input me-2" 
                type="radio"
                value="feminino" 
                name="opt-genero"/>
            Feminino
        </label>
    </div>

    <div className="form-check-inline">
        <label className="form-check-label">
            <input
                className="form-check-input me-2" 
                type="radio"
                value="nao-binario" 
                name="opt-genero"/>
            Não Binário
        </label>
    </div>
  </>
  )
}

export default GeneroOptions;