const mongoose = require('mongoose')

const setUpDb = () => {
    mongoose.connect('mongodb://localhost:27017/twitter-challenge')
        .then(()=>{
            console.log('connected to database')
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = setUpDb
