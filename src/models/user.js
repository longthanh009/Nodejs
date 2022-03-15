import mongoose , {Schema} from "mongoose";

const userSchema = new Schema({
    email : {
        type : String,
        minlength : 10,
        required : true,
        unique : true
    },
    password : {
        type : String,
        minlength : 6,
        required : true,
        unique : true
    }
});
export default mongoose.model("user",userSchema)