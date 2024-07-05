import mongoose from "mongoose"
import { TypeLocation } from "../types.ts";

const Schema = mongoose.Schema

const LocationSchema = new Schema ({
    name: {type: String, required: false},
    type: {type: String, required: false},
    dimension: {type: String, required: false},
    created: {type: String, required: false}
})
export type CharacterModelType = mongoose.Document & Omit<TypeLocation, "id" | "residents">

export const CharacterModel = mongoose.model<CharacterModelType>(
    "Location",
    LocationSchema
)