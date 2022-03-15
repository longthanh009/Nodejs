import mongoose , {Schema} from "mongoose";

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
    }
} , {timestamps: true});
export default mongoose.model("Product",productSchema)