// módulo para fazer importacão de arquivo e exportar arquivo
import fs from "fs" // fileSystem -> lê e escreve arquivos de sistema
import path from "path" // lida com caminhos no sistema operacional

const pathData = path.join(__dirname, "../repositories/podcasts.json")  // lê o arquivo

export const repositoryPodcast = async () => {
    const data = fs.readFileSync(pathData, "utf-8")     // lê o conteúdo do arquivo
    const jsonFile = JSON.parse(data)
    return jsonFile
}