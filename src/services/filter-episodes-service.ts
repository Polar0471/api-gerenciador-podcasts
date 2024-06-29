import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodcastModel> => {
    
    // define a interface de retorno do contrato
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    }

    // realiza a busca dos dados
    const  queryString = podcastName?.split("?p=")[1] || ""    // está pegando apenas a posicão 1     http://localhost:3333/api/episode?p=flow
    const data = await repositoryPodcast(queryString)
    
    // verifica se existe um conteúdo
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat
}