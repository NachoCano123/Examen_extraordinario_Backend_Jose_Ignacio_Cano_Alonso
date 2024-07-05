import mongoose from "mongoose"
import { TypeCharacter } from "../types.ts";

const Schema = mongoose.Schema

const CharacterSchema = new Schema ({
    id: {type: Number, required: false},
    name: {type: String, required: false},
    status: {type: String, required: false},
    species: {type: String, required: false},
    type: {type: String, required: false},
    gender: {type: String, required: false},
    origin: {type: Schema.Types.ObjectId, required: false},
    location: {type: Schema.Types.ObjectId, required: false},
    image: {type: String, required: false},
    episode: [{type: Schema.Types.ObjectId, required: true},],
    created: {type: String, required: false}
})

export type CharacterModelType = mongoose.Document & Omit<TypeCharacter, "id" | "origin" | "location" | "episode"> 
& {origin: mongoose.Types.ObjectId, location: mongoose.Types.ObjectId, episode: mongoose.Types.ObjectId}

export const CharacterModel = mongoose.model<CharacterModelType>(
    "character",
    CharacterSchema
)