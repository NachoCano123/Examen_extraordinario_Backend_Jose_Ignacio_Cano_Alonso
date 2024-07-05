import { TypeCharacter, TypeEpisode } from "../types.ts";

export const Episode = {
    characters: async(parent: TypeEpisode): Promise<TypeCharacter[]> => {
        const charac = await Promise.all(parent.characters.map(async(c)=>{
            const response = await fetch(c.url)
            const data: TypeCharacter = await response.json()
            return data
        }))
        return charac
    }
}