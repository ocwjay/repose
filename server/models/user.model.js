const mongoose  = require("mongoose");
const bcrypt = require("bcrypt");

const SettingsSchema = mongoose.Schema({
    theme: {
        type: String,
        enum: [
            '#22222299',
            '#ffffff99',
            '#ff000099',
            '#0066ff99',
            '#66339999',
            '#00000000'
        ],
        default: "#22222299"
    },
    textColor: {
        type: String,
        enum: [
            '#ffffff',
            '#000000',
            '#ff0000',
            '#0066ff',
            '#663399'
        ],
        default: '#ffffff'
    },
    lightDarkMode: {
        type: String,
        enum: [
            '#22222288',
            '#ffffff22'
        ],
        default: '#ffffff22'
    },
    backgroundImg: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg"
    }
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email address is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Passwords must be at least 8 characters long"]
    },
    settings: SettingsSchema
},{timestamps: true})

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value)

UserSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords must match")
        console.log("Passwords do not match")
    }
    next()
})

UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            this.password = hashedPassword;
            next();
        })
})

const User = mongoose.model("User", UserSchema);
module.exports = User;