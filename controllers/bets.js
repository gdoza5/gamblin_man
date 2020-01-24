const User = require('../models/user');

module.exports = {
    add
}

async function add(req, res){
    let user = await User.findOne({email: req.body.user})
    user.bets.push(req.body);
    user.save(function(err){
        res.status(201).json('added to db')
    })
}