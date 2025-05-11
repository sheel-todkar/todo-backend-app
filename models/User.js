const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

userSchema.pre("save",async function () {
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,12)
    
})

userSchema.methods.comparePassword = function(inputPwd)
{
    return bcrypt.compare(inputPwd,this.password)

}
module.exports = mongoose.model("User",userSchema)