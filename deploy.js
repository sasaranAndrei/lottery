const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'save tennis sunset path game party town taxi matrix ask mention bicycle',
  'https://goerli.infura.io/v3/66e0701d880641a2aecc334ebb40805a'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  contract = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  // console.log(interface);
  console.log('Contract deployed to ', contract.options.address);
  
  // provider.engine.stop();
};

deploy();
