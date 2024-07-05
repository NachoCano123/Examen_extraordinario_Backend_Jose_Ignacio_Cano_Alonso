import { TypeCharacter, TypeLocation } from "../types.ts";

export const Location = {
    residents: async(parent: TypeLocation): Promise<TypeCharacter[]> => {
        const charac = await Promise.all(parent.residents.map(async(c)=>{
            const response = await fetch(c.url)
            const data: TypeCharacter = await response.json()
            return data
        }))
        return charac
    }
}