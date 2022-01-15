const Twitter = require('twitter-v2');

const client = new Twitter({
    bearer_token: '<>',
  });

async function main () {

    const usernameToLookUp = 'backaes' //it should be set to the newbie's twitter handle

    const {data} = await client.get(`users/by/username/${usernameToLookUp}`)

    const id = data.id

    const tweets = await client.get(`users/${id}/tweets`)

    const lastTweet = tweets.data[0]

    const lastTweetText = tweets.data[0].text   // It should match the tweet that we asked the user to copy and paste! 

    console.log(lastTweetText)
}

main ()