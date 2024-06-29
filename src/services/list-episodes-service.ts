import { FilterPodcastModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {

    // definindo o contrato
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    // buscando os dados
    const data = await repositoryPodcast()

    // verifica o tipo de resposta
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data

    return responseFormat
}