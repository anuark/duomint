
// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [
    {
      path: '/',
      content: JSON.stringify({
        name: '',
        attributes: [
          {
            a: '',
            b: '',
          },
        ],
        // if you want to upload your own IPFS image, you can do so here:
        // https://github.com/ChainShot/IPFS-Upload
        image:
          'https://gateway.pinata.cloud/ipfs/QmcQx9spHWW7z6zHia3ty3pFsNHHJnEpT81ecbRBZJoFw7',
        description: '',
      }),
    },
  ];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
