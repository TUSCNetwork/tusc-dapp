//ropsten  *****************************************
// const contract_address = "0x04861e6eb04889f0549d52be118e7c66e92ac9dc";
// const occ_contract_address = "0x75584b2bfa5eb391c8234abcfb4cde5c07e2cf30";

// Mainnet
const contract_address = "0xc29a69daf6b159ffaa183652f4b9e9e673d88647";
const occ_contract_address = "0x0235fe624e044a05eed7a43e16e3083bc8a4287a";

const erc20_abi = [
{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
    {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [
    {
        "name": "success",
        "type": "bool"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "name": "_from",
        "type": "address"
    },
    {
        "name": "_to",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [
    {
        "name": "success",
        "type": "bool"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
    {
        "name": "",
        "type": "uint256"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [
    {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "_owner",
        "type": "address"
    }
    ],
    "name": "balanceOf",
    "outputs": [
    {
        "name": "balance",
        "type": "uint256"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
    {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "name": "_to",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "transfer",
    "outputs": [
    {
        "name": "success",
        "type": "bool"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": false,
    "inputs": [
    {
        "name": "_spender",
        "type": "address"
    },
    {
        "name": "_value",
        "type": "uint256"
    },
    {
        "name": "_extraData",
        "type": "bytes"
    }
    ],
    "name": "approveAndCall",
    "outputs": [
    {
        "name": "success",
        "type": "bool"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "constant": true,
    "inputs": [
    {
        "name": "_owner",
        "type": "address"
    },
    {
        "name": "_spender",
        "type": "address"
    }
    ],
    "name": "allowance",
    "outputs": [
    {
        "name": "remaining",
        "type": "uint256"
    }
    ],
    "payable": false,
    "type": "function"
},
{
    "inputs": [
    {
        "name": "_initialAmount",
        "type": "uint256"
    },
    {
        "name": "_tokenName",
        "type": "string"
    },
    {
        "name": "_decimalUnits",
        "type": "uint8"
    },
    {
        "name": "_tokenSymbol",
        "type": "string"
    }
    ],
    "type": "constructor"
},
{
    "payable": false,
    "type": "fallback"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "name": "_from",
        "type": "address"
    },
    {
        "indexed": true,
        "name": "_to",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
    {
        "indexed": true,
        "name": "_owner",
        "type": "address"
    },
    {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    },
    {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
];
const abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "last_occ_balance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "tusc_address",
                "type": "string"
            }
        ],
        "name": "doSwap",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "occ_token",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokens_swapped",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swaps_attempted",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "total_tokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_omega_address",
                "type": "address"
            },
            {
                "name": "_occ_contract_address",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];
