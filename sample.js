const Twitter = require('twitter')

var client = new Twitter({
    consumer_key: 'wjSekyuc52LpDNcu8NY9wsBSl',
    consumer_secret: 'iul3jp9etzW8ygvC064afFOtcWngpVgWSZkb776v2G25J3HrS5',
    access_token_key: '875590021608230912-5tt4Q6S1b7cL8lsPx19QwkolD96H898',
    access_token_secret: '67rTEiwbMAYECP0Vo2vdY9yZMpPJbizTPl0Q0VHZo1bWH'
  });
   
  var params = {screen_name: 'Cowboycerrone'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    //   console.log(tweets);
      console.log(tweets[0].user.description)
      const tweet = tweets.map(tweet=>{
          return tweet.text
      })
      console.log(tweet)
    }
  });