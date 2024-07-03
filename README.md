# Comments
This is for comments smart contract for Nedralia portfolio. The purpose is to have a Web3 comment section
on the site, decentralizing the storage of those comments.

# Tools
These are the tools and technologies used in the project.

* truffle
* ganache-cli
* geth
* solidity

Node version 18 should be used.

# Folders

### ./build
Here are the compiled contracts.

### ./contracts
The smart contracts.

### ./migrations
The migration scripts to push and deploy new changes to the blockchain.

### ./test
Testing for the smart contract functionality.

# Commands
Before starting, it is important to have the Truffle configuration correctly set up. The same IP address and port need to be used for a successful connection.

To run a local blockchain, use either Ganache UI, ganache-cli or Truffle develop.

`truffle develop`

This command starts a local node.

`migrate --reset`

Since the node is a fresh blockchain, the migration scrips need to run.

`truffle test`

Run the tests to make sure the code is working.

# Solc version

An important aspect in development to consider is the Solidity compiler version.
It can be specified in truffle-config.js.

Be sure to specify the same version in the pragma statement at the top of the contract files.

# Testing using Geth
Start a geth node
`geth --http --dev`

Migrate to the geth node
`truffle migrate --network geth`

# Testing with Ganache UI or ganache-cli
This one is similar to Geth.

Start Ganache UI or run
`ganache-cli`

Migrate the contract to Ganache
`truffle migrate --network ganache`

Run the tests on the Ganache node
`truffle test --network ganache`

# Using a test net
Before deploying to the main net, a test net should be used. In this project, Sepolia is used.

Sepolia is a test net, mimicking the Ethereum main net. It is set up in *truffle-config.js* under networks > sepolia with its correct data.

To work properly, it needs an **RPC URL** and a **MNEMONIC** phrase.

## Getting the Sepolia parameters
First off, an Infura account is needed to communicate with Ethereum.

* Setup & Login to Infura account
* Get RPC URL from Infura
* Setup .env (from .env.example) file and enter RPC

Once you have that URL, the mnemonic phrase is needed. Any wallet will do, but let's use Meta Mask in this example.

 * Install Meta Mask plugin
 * Get Mnemonic from Meta Mask
 * Choose Sepolia in Meta Mask
 * Enter Mnemonic into .env file

Run the tests on the test net
`truffle test --network sepolia`

Deploy the contract on the test net
`truffle migrate --network sepolia`