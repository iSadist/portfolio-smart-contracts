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

# Using a test net

In progress...

 * Sepolia - test net

 * Choose Sepolia in Meta Mask

 * Get Mnemonic from Meta Mask

 * Get RPC URL from Infura

 * Setup .env file and enter RPC

Run the tests on the test net
`truffle test --network sepolia`

Deploy the contract on the test net
`truffle migrate --network sepolia`