export type TypeCharacter = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: TypeLocation,
    location: TypeLocation,
    image: string,
    episode: TypeEpisode[],
    created: string,
    url: string,
}

export type TypeLocation = {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: TypeCharacter[],
    created: string,
    url: string
}

export type TypeEpisode = {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: TypeCharacter[],
    created: string
}