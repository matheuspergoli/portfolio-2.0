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

interface Post {
  post: {
    id: string
    title: string
    content: {
      value: any
      blocks: any
    }
    coverImage: {
      url: string
    }
  }
}

interface PreviewPost {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: {
    url: string
  }
}

interface PreviewPosts {
  allPosts: PreviewPost[]
}

interface PostSlug {
  id: string
  slug: string
}

interface PostSlugs {
  allPosts: PostSlug[]
}
