// módulo para fazer importacão de arquivo e exportar arquivo
import fs from "fs" // fileSystem -> lê e escreve arquivos de sistema
import path from "path" // lida com caminhos no sistema operacional
import { Podcast } from "../models/podcast-model"

const pathData = path.join(__dirname, "../repositories/podcasts.json")  // lê o arquivo

// recebe um parâmetro opcional
export const repositoryPodcast = async (podcastName?: string): Promise<Podcast> => {
    const data = fs.readFileSync(pathData, "utf-8")     // lê o conteúdo do arquivo
    let jsonFile = JSON.parse(data)

    if (podcastName) {
        jsonFile.filter(
            (podcast: Podcast) => podcast.podcastName === podcastName
        )
    }

    return jsonFile
}