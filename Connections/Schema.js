import { Schema, model } from "mongoose";

const FortressSchema = new Schema(
    {
        id: String,
        siteURL: String,
        username: String,
        password: String,
    });
const FortressKey = model("FortressKey", FortressSchema);
export default FortressKey;