const axios = require('axios');

async function main() {
    // Address of contract of interest
    const chain_id = `1`;
    const contract_address = `0x1e988ba4692e52bc50b375bcc8585b95c48aad77`
    const token_id=`3716`
    
    console.log(`Fetching metadata status For NFT @${contract_address}, token_id ${token_id}`);

    const covalentKey = 'ckey_6cdf45922a79435791179f16101'

    const URL = `https://api.covalenthq.com/v1/${chain_id}/tokens/${contract_address}/nft_metadata/${token_id}/?key=${covalentKey}`

    const response = await axios.get(URL);
    
    console.log(response.data.data.items[0].nft_data[0].external_data.image)

}

main();

