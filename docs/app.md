# Gerenciador de Podcasts

### Descrição
Um app que possa centralizar diferentes episódios separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
- Filtrar episódios por nome do podcast


## Como 

#### Feature:
Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categoria

    ```js
    [
        {
        podcastName: "flow",
        episode: "GUILHERME BRIGGS - Flow #348",
        cover: "https://i.ytimg.com/vi/SVk-0QUYVjU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZ79DxOOGS-P5FUNaWLzMrL3fqww",
        link: "https://www.youtube.com/watch?v=SVk-0QUYVjU",
        category: ["comedia", "dublagem"]
    },
    {
        podcastName: "flow",
        episode: "WHINDERSSON NUNES - Flow #292",
        cover: "https://i.ytimg.com/vi/lX_5m6ZU7x0/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBXR3IiOru05QCDwpl7YyiXq2DwtQ",
        link: "https://www.youtube.com/watch?v=lX_5m6ZU7x0&t=6322s",
        category: ["comedia"]
    }
    ]
    ```