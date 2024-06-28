import { repositoryPodcast } from "../repositories/podcasts-repository"
import { Podcast } from "../models/podcast-model"

export const serviceListEpisodes = async (): Promise<Podcast[]> => {
    const data = repositoryPodcast()
    return data
}