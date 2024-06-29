import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content = await serviceListEpisodes()
    
    response.writeHead(200, {"Content-Type": "application/json"})   // head
    response.end(JSON.stringify(content))   // content
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    
    // http://localhost:3333/api/episode?p=flow
    const  queryString = request.url?.split("?p=")[1] || ""    // está pegando apenas a posicão 1

    const content = await serviceFilterEpisodes(queryString)

    response.writeHead(200, {"Content-Type": "application/json"})
    response.end(JSON.stringify(content))
}