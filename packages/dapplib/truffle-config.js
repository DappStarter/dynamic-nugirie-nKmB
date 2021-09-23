require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note right provide harvest nation flock gentle'; 
let testAccounts = [
"0x4becff6ab8cd8652d4997cb2ca03140901659b2d8e5555fce273be2dff87b2f4",
"0x887d51820a5f4dbcb3e7633924f0b4c6f300995a26bca130d435b2664e826b9a",
"0xc950c04f0b7cba11136a2a1d0a531689a63e0d1764a8c09e2df18eb7cb634a64",
"0x3a36577a03cad6809da81cea0e58e3c2e58bd8a758993939cf63bd2c2d377f5f",
"0xbdfb193597260807812861509b66d1aac9753c35cc37deecf25b60ca3a204f02",
"0xa1676123940ca5cad40019b7fe5e292d4943e48de5cfb68e8977ed5524252d8e",
"0x6c5ce92aeb1f1c3c10c58a938cd951647c92d8ba6bcaadea21a3b5d67168da8b",
"0x9eca8babe75c209fc2f9d5f602c4634395e517f0db698a41829fd283f20fa36c",
"0x725eb2d85a8ca4e4624426821a0c7b9a9e37033821eb6cb5fea0884a269135b4",
"0xd2fa0cba789257ca231a14e8dcdae975bd70d5c388c3f57b2568229f7f3d27ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

