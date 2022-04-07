import React from 'react'
import * as nearAPI from "near-api-js";


async function Near() {
// creates keyStore using private key in local storage
// *** REQUIRES SignIn using walletConnection.requestSignIn() ***
const { keyStores, connect, WalletConnection } = nearAPI;
const keyStore = new keyStores.BrowserLocalStorageKeyStore();
const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(), 
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

// connect to NEAR
const near = await connect(config);

// create wallet connection
const wallet = new WalletConnection(near);

// redirects user to wallet to authorize your dApp
// this creates an access key that will be stored in the browser's local storage
// access key can then be used to connect to NEAR and sign transactions via keyStore

const signIn = () => {
    wallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      "Chess Wars", // optional
      "/Chess", // optional
      "/Error" // optional
    );
  };

  return (
    <div>
        hi
    </div>
  )
}

export default Near