import {GraphQLError} from "graphql"
import { TypeCharacter, TypeEpisode } from "../types.ts";
export const Character = {
    origin: async(parent: TypeCharacter): Promise<Location | null> => {
        if(!parent.origin.url){
            return null
        }
        
        const response = await fetch(parent.origin.url)

        if(response.status !== 200)
        {
            throw new GraphQLError("error")
        }

        const data: Location = await response.json()
        return data
    },

    location: async(parent: TypeCharacter): Promise<Location | null> => {
        if(!parent.location.url){
            return null
        }
        
        const response = await fetch(parent.location.url)

        if(response.status !== 200)
        {
            throw new GraphQLError("error")
        }

        const data: Location = await response.json()
        return data
    },

    episode: async(parent: TypeCharacter): Promise<TypeEpisode[]> => {
        const ep = await Promise.all(parent.episode.map(async(e) => {
            const response = await fetch(e.episode)
            const data: TypeEpisode = await response.json()
            return data
        }))
        return ep
    },
}