import Produtos from "../../produtos/[id]"

export default function Produtos(request, response){
    console.log(request.query.id);
}