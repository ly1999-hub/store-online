const Attire = require("../models/attire");
var errors = {
    name: String,

}
module.exports.getAttire = async function(req, res, next) {
    try {
        var attire = await Attire.find()
    } catch (error) {
        errors.name = error;
        console.log(error)
    }
    res.send(attire)
}