const ethers = require("ethers");
const prompt = require("prompt-promise");
const provider = new ethers.providers.InfuraProvider('mainnet','550a16663bec40afbec44e36af3331bc');

// "0x7b2c85591fd2ed6b33e6c956601b86d0c8230ada"


async function getBlockInfo() {

   const blockNumber = await provider.getBlockNumber();
   console.log("Block number: ", blockNumber);
   const gasPrice = ethers.utils.formatEther(await provider.getGasPrice());
   console.log(`Gas Price:, ${gasPrice}`);
   const chainID = await provider.getNetwork();
   console.log("Chain ID: ",chainID);
   
}

async function logBalance(){
    userAddy = await prompt("type in your eth address\n");

    if(ethers.utils.isAddress(userAddy)){
    const balance = await provider.getBalance(userAddy);
    const bigNumber = ethers.utils.formatEther(balance);
    console.log(`ETH balance: ${bigNumber}`);
    const transactionCount = await provider.getTransactionCount(userAddy);
    console.log(`User transaction Count: ${transactionCount}`);
    }
    else{
        throw Error("not a proper addy");
    }
}

async function iHateAsnycRN(){

    const what = await prompt("type 1 for block info or type 2 for getBalance\n");

    if(what === "1"){
        getBlockInfo();
        }

    else if(what === "2"){
        logBalance();
        }
}

iHateAsnycRN();