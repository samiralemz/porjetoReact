function GeneroOptions(props) {    
    function handleSelect(genero) {
        props.onSelect(genero);
    }

    return (
    <>
      <div className="form-check-inline">
        <label className="form-check-label">
            <input
                className="form-check-input me-2" 
                type="radio"
                value="masculino" 
                name="opt-genero"
                required
                checked={props.genero.toLowerCase()[0] === "m"}
                onChange={e => {handleSelect(e.target.value)}}/>
            Masculino
        </label>
    </div>

    <div className="form-check-inline">
        <label className="form-check-label">
            <input
                className="form-check-input me-2" 
                type="radio"
                value="feminino" 
                name="opt-genero"
                checked={props.genero.toLowerCase()[0] === "f"}
                onChange={e => {handleSelect(e.target.value)}}/>
            Feminino
        </label>
    </div>

    <div className="form-check-inline">
        <label className="form-check-label">
            <input
                className="form-check-input me-2" 
                type="radio"
                value="nao-binario" 
                name="opt-genero"
                checked={props.genero.toLowerCase()[0] === "n"}
                onChange={e => {handleSelect(e.target.value)}}/>
            Não Binário
        </label>
    </div>
  </>
  )
}

export default GeneroOptions;