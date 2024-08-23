import {  model, Schema, Document, Model } from "mongoose";

enum Gender {
    Male = 0,
    Female = 1
}

interface UserInterFace extends Document {
    is_active: boolean;
    fname: string;
    lname: string;
    email: string;
    password: string;
    gender: Gender;
    phone: string;
    // is_admin: boolean,
    // is_verified: boolean
}

const userSchema: Schema = new Schema<UserInterFace, Model<UserInterFace>>({
    is_active: {
        type: Boolean,
        default: false,
        trim: true,
    },
    fname: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
        maxlength: 50,
    },
    lname: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value: string) => {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
        validate: {
            validator: (value: string) => {
                return /^\+?\d{1,15}$/.test(value);
            }
        },
    },
    gender: {
        type: Number,
        enum: Gender,
        default: Gender.Male,
        trim: true,
    }
}, { timestamps: true });

const User: Model<UserInterFace> = model<UserInterFace>("User", userSchema);

export default User;
