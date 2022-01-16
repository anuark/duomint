const { NFTStorage, File } = require("nft.storage")
const { pack } = require("ipfs-car/pack");

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUzOGZmM2E5MENhMGE5NDRFMDVGREUwNzVlRTM5QWRDRDI0YkJCODYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MjI0MzAzNTQwOCwibmFtZSI6IkR1b01pbnQifQ.qKHdFPbj2dXNQCGN_VLOxuTKaeITLoQKh59_MuANBpM'
const client = new NFTStorage({ token: apiKey })

async function main() {

const metadata = await client.store({
  name: 'Pinpie',
  description: 'Pin is not delicious beef!',
  image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg' })
})
console.log(metadata.url)
// ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
// https://ipfs.io/ipfs/bafybeigshjvxylte7ujmymcgypyqrhm6fxugiuwt5krgrvctvmvvb6nrnu
}

main ();