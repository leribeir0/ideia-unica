import Produtos from "../../produtos/[id]"

export default function Produto(request, response){
    console.log(request.query.id);
}