const axios = require('axios');

async function main() {
    // Address of contract of interest
    const proxyAddr = `0x147d71E7Bcb0eA2219B2921F7F921E9f6c0e564a`;
    
    console.log(`Fetching txs status For ${proxyAddr}`);

    const etherscanKey = '<>'

    const URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${proxyAddr}&startblock=0&endblock=99999999999999&page=1&offset=10&sort=asc&apikey=${etherscanKey}`

    const response = await axios.get(URL);
    
    // console.log(response.data);

    console.log(response.data.result.length)

    //     if (response.data.length == 0) {

    //     move on with the verification process

    // }
}

main();