// #index.js
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()

// const provider = new WalletConnectProvider({
//   infuraId: "89b8ce16e0d047f0a1ea7b23379a695f",
// });

//  Enable session (triggers QR Code modal)
provider.enable();

//ethereum.enable()
const web3 = new Web3(provider);

const accounts = await web3.eth.getAccounts();
console.log("accounts: " + accounts);

const message = "This is a message from sledgeworx.eth holder";


// let signature = await web3.eth.personal.sign(message, accounts[0], "test password!");
// console.log(signature);

// let signer = await web3.eth.personal.ecRecover(message, signature);
// console.log("Signer: " + signer);

web3.eth.ens.getResolver('sledgeworx.eth').then(function (contract) {
    console.log("Resolver: ", contract);
});

web3.eth.ens.getOwner('sledgeworx.eth').then(function (owner) {
    console.log("owner: ",  owner);
});

web3.eth.ens.getAddress('sledgeworx.eth').then(function (address) {
    console.log("address: " + address);
})