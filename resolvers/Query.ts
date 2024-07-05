import { GraphQLError } from "graphql";
import { TypeCharacter } from "../types.ts";

export const Query = {
    character: async(_:unknown, args:{id:String}): Promise<TypeCharacter> => {
        const response = await fetch("https://rickandmortyapi.com/api/character/" + args.id)
        if(response.status !== 200)
        {
            throw new GraphQLError("error")
        }
        const data: TypeCharacter = await response.json()
        return data
    }, 
    charactersByIds: async(_:unknown, args:{ids:String[]}): Promise<TypeCharacter[]> => {
        const response = await fetch("https://rickandmortyapi.com/api/character" + args.ids.toString())
        if(response.status !== 200)
        {
            throw new GraphQLError("error")
        }
        const data: TypeCharacter[] = await response.json()
        return data
    }
}