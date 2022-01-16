const ipfs = require("nano-ipfs-store").at("https://ipfs.infura.io:5001");

(async () => {

  const doc = JSON.stringify({
    description: "Pilot Token", 
    image: "https://bafybeig6sorqkttqmdbzjf32zjn5nkcf6jefhmwc2735poplix7psdqd2u.ipfs.dweb.link/", 
    name: "Pilot #1"
  }
  );
  
  const cid = await ipfs.add(doc);

  console.log("IPFS cid:", cid);
  
  console.log(await ipfs.cat(cid));

})();
