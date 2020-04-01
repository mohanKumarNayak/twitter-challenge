const mongoose = require('mongoose')
const Twitter = require('twitter')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    NAME : {
        type : String,
        requird : true
    },
    tweets : [
        String
    ]
})

userSchema.pre('save',function(next){
    const user = this
    if(user.isNew){
    let client = new Twitter({
        consumer_key: 'consumer-key',
        consumer_secret: 'consumer-secert-key',
        access_token_key: 'access_token_key',
        access_token_secret: 'access_token_secret'
      });
       
      let params = {screen_name: user.name};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        //   console.log(tweets);
        //   console.log(tweets[0].user.description)
          const tweet = tweets.map(tweet=>{
              return tweet.text
          })
          user.tweets = tweet
          user.NAME = tweets[0].user.name
          next()
        //   console.log(tweet)
        }
      });
    }
    else{
        next()
    }

})

const User = mongoose.model('User',userSchema)

module.exports = User