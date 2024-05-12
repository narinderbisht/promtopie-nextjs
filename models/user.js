import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email address cannot be duplicate'],
        require: [true, 'Email address cannot be empty']
    },
    username: {
        type: String,
        require: [true, 'Username cannot be empty']
    },
    profile_image: {
        type: String
    }
});

const User = models.User || model('User', UserSchema);
export default User;