import mongoose from "mongoose"
import { TypeEpisode } from "../types.ts";

const Schema = mongoose.Schema

const EpisodeSchema = new Schema ({
    name: {type: String, required: false},
    air_date: {type: String, required: false},
    episode: {type: String, required: false},
    created: {type: String, required: false}
})
export type CharacterModelType = mongoose.Document & Omit<TypeEpisode, "id" | "characters">

export const CharacterModel = mongoose.model<CharacterModelType>(
    "Episode",
    EpisodeSchema
)