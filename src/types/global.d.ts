interface Project {
  id: string
  link: string
  nome: string
  repositorio: string
  tecnologias: string
  imagem: {
    url: string
  }
}

interface Projects {
  allProjetos: Project[]
}
