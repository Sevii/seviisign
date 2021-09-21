// #index.js
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";


const provider = new WalletConnectProvider({
  infuraId: "89b8ce16e0d047f0a1ea7b23379a695f",
});

//  Enable session (triggers QR Code modal)
provider.enable();

//ethereum.enable()
const web3 = new Web3(provider);
web3.eth.requestAccounts().then(console.log);
let accounts = web3.eth.getAccounts();

let address = window.ethereum.selectedAddress.then(console.log);
console.log("address: " + address);

web3.eth.personal
.sign("Hello world", address, "test password!")
.then(console.log);