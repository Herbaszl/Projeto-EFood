class Restaurants {
  name: string
  descricao: string
  image: string
  infos: string[]
  avaliacao: string
  id: number

  constructor(
    id: number,
    descricao: string,
    image: string,
    infos: string[],
    name: string,
    avaliacao: string
  ) {
    this.id = id
    this.descricao = descricao
    this.image = image
    this.infos = infos
    this.name = name
    this.avaliacao = avaliacao
  }
}

export default Restaurants
