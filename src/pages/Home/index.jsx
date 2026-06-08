import { useNavigate } from "react-router-dom";
export default function Home() {

  
  const navigate = useNavigate();

  function navgarContato() {
    navigate("/contatos");
  }
  return (

    <div>

        <h1>Pagina Principal</h1>
        <button onClick={navgarContato}>Ir  para contato</button>
    </div>
  )
}
