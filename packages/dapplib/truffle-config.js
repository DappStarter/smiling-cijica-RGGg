require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note misery coil harvest brand equal gesture'; 
let testAccounts = [
"0x42249e88c97353a4fe29f8ed2b65435acb9c13c5958436421af44d80a0f68287",
"0xdad7decbca0f4c1908b6b916d58884b3208f51a0e6ac22c5028ee8fd6af5736f",
"0xd562d2e30294d6f9cf1636f8d97e7dd4d3370e14e41fa2bd4ad85048dd44d579",
"0xb89390c9e21f293360ba9b2e1401ec44d8f9ba010cd2958856802f8fe5498087",
"0x15ece9de9761f04cd1bec679a10358aff4513a647cd096c0d3d274f692573ea4",
"0x2e54c93109cda55b4e87e03900b492341cf8730bd4077e9c734676473cb9ccba",
"0xbb30fbe298d6eb499ff40e3df95f92927ab6fd7cb8e038acd662d6e6fc0cd9dd",
"0xea17c26b27233819be19895bbf9e509a52aca1f52dcdb21adbb4b7d223b99667",
"0x72e163e06c4747c1985cc605de8aea5a459a5c079bfd6944fb7f2feef8cbead3",
"0xf02d6d7fa8587b98c5673d0dad72533a17a159b28c64a40d5084ea69bf82ea98"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

