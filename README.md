**Description**

Let's be honest, onboarding to crypto is tiresome and intimidating for everyone, even more for a mainstream audience. Users are asked to go through many steps before putting assets in their wallets and engaging with web3. From the feedback we got, the biggest pain points are waiting for funds to be accredited on your exchange account and then moving them to a wallet.

Duomint creates a stress-free onramp to let newbies experience the magic of web3. Users only need to set up a Metamask wallet to receive an NFT 100% free! Therefore they get walked through web3 with a set of entertaining challenges such as: 
- Check your NFT on Opensea
- Display your NFT in a Metaverse art-gallery
- Access a membership-only Discord server. 

How is that even possible? On the other side of the platform there are crypto natives that are willing to double mint an NFT, one for the newbie and one for themselves, to onboard newcomers, grow the ecosystem, and earn a reward along the way.

**Tech used**

The project intends to leverage the full power of the ERC721 standard. All the challenges are made possible by the composability of the NFT standard across different web3 platforms. For the first iteration we included Opensea, Spatial and Discord (via Collab.land bot) but the potential integrations are endless.

The smart contract is based on the ERC721URIStorage OpenZeppelin Extension. It adds a DuoMint function that, when called, mints 2 NFTs, one to the msg.sender and one to another account(s). The cool part here is that the additional accounts don’t have to pay any gas fees but still receive an NFT to their wallet.

The dApp leverages:
- NFT.Storage for storing the NFT mp4 in a decentralized way
- IPFS to address the NFT MetaData.
- OpenSea API to all the data call rendered in the React front-end. 

**Demo**

https://drive.google.com/drive/folders/1vlzn2sxgwAXczfd7z11u2FfPOZr4u6ml 

🏆 Finalist at NFT Hack 2022 across +250 projects https://twitter.com/ETHGlobal/status/1482850684185755657?s=20 
