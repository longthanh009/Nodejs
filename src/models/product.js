import mongoose , {Schema} from "mongoose";
import category from "./category";

const {ObjectId } = mongoose.Types;
const productSchema = new Schema({
    name : {
        type : String,
        maxlength : 255,
        unique : true
    },
    price : {
        type : Number,
        maxlength : 11,
        unique : true
    },
    img : {
        type :String,
        maxlength : 255,
    },
    category : {
        type : ObjectId,
        ref : category
    }
} , {timestamps: true});
export default mongoose.model("Product",productSchema)