const Twitter = require('twitter-v2');

const client = new Twitter({
    bearer_token: '<>',
  });

async function main () {

    const { data } = await client.get('users/989593646/following');

    const addresses = data.filter(user => user.name.includes(".eth"))

    const nameArray = addresses.map(user => user.name )

    let namesDefinitive = []

    nameArray.forEach(element => {
        var words = element.split(' ');
        words.forEach(elem=>{
            let extens = elem.split('.');
            if(extens.length == 2){
                if(extens[1] == "eth"){
                namesDefinitive.push(elem)
                }
            }
        })
    })

    console.log(namesDefinitive)

// console.log(data);
// console.log(addresses);
}
main ()

