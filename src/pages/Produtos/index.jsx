
import { useParams } from "react-router-dom";

export default function Produtos() {
  const {id} = useParams();
  return (
    <div>

       {id ? <h2>Produtos:{id}</h2> : <h2>listagem de produtos</h2>}
    </div>
  )
}
