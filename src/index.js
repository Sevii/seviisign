// #index.js
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider'
import $ from 'jquery';
import { ethers } from "ethers";

export async function signMessage() {
    let accounts = await web3.eth.getAccounts();
    let message = $( "#signForm input" ).val();
    let signature = await web3.eth.personal.sign(message, accounts[0], "test password!");


    $( "p#signatureOut" ).text( " " + signature );
}

export async function verifySignature() {
    let message = $( "#fverifyingMessage" ).val();
    let signature = $("#fsignature").val();
    let signer = await web3.eth.personal.ecRecover(message, signature);
    
    var name = await ethersProvider.lookupAddress(signer);

    $( "p#Output" ).text( "Signed by " + signer + " " + name );    

}


const provider = await detectEthereumProvider();
// const provider = new WalletConnectProvider({
//   infuraId: "89b8ce16e0d047f0a1ea7b23379a695f",
// });

const ethersProvider = new ethers.providers.Web3Provider(window.ethereum)

//  Enable session (triggers QR Code modal)
provider.enable();

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

web3.eth.ens.getPubkey('sledgeworx.eth').then(function (key) {
    console.log(key);
});




$("form#signForm").on('submit', function() {
  signMessage();
  console.log("signForm clicked");
});


$("form#verifyForm").on('submit', function() {
  verifySignature();
  console.log("verifyForm clicked");
});

