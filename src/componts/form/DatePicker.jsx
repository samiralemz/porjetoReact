import { useEffect } from "react";
import { useState } from "react";

function DatePicker(props) {
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const anoAtual = new Date().getFullYear();
  const anoMinimo = anoAtual - 200;
  
  const defaultAno = props.date ? props.date.getFullYear() : "";
  const defaultMes = props.date ? props.date.getMonth()    : "";
  const defaultDia = props.date ? props.date.getUTCDate()  : "";

  const [dia, setDia] = useState(defaultDia);
  const [mes, setMes] = useState(defaultMes);
  const [ano, setAno] = useState(defaultAno);
  
  useEffect(() => {
    handleDatePick();
  }, [dia, mes, ano])

  function handleDatePick() {
    if(ano === "" && mes === "" && dia === "")
      return;
    
    const date = new Date(ano, mes, dia);
    props.onDatePick(date);
  }

  return (
    <div className="input-group">
      <input
      className="form-control me-3"
      type="number"
      name="input-date-day"
      id="input-date-day" 
      required
      min={1} max={31} placeholder="Dia"
      value={dia}
      onChange={e => setDia(e.target.value)}/>

      <select className="form-control me-3" name="input-date-month" id="input-date-month" 
        required value={mes} onChange={e => setMes(e.target.value)}>
        <option value="">Mês</option>
        {meses.map((mes, index) => {
          return <option value={index} key={index}>{mes}</option>;
        })}
      </select>

      <input
      className="form-control"
      type="number"
      name="input-date-year"
      id="input-date-year"
      required
      min={anoMinimo} max={anoAtual}
      placeholder="Ano"
      value={ano}
      onChange={e => setAno(e.target.value)}/>
    </div>
  )
}

export default DatePicker;