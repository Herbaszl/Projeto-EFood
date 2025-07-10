export type ProdutoType = {
  //Descobri onde vou usar a Array de Produtos :D
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}
export type RestauranteType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProdutoType[] // Isso aqui vai retornar um array de produtos, só n sei o q eu vou fazer com isso kkkk
}
