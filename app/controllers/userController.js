const User = require('../models/user')


module.exports.show = (req,res) => {
    const name = req.params.name
    User.findOne({
        name
    })
        .then((user)=>{
            if(user){
                res.json(user)
            }
            else{
                const newUser = new User({name : name})
                newUser.save()
                    .then((user)=>{
                        res.json(user)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })
                
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}