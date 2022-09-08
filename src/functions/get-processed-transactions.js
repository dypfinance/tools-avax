export default function getProcessedTransactions(network) {
  let config = "";
  if (network == "ethereum") {
    config = "window.config_eth";
    window.network = config;
  } else {
    config = "window.config";
    window.network = config;
  }

  return new Promise((resolve, reject) => {
    fetch(
      eval(config + ".subgraph_url") ||
        "https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{
  bundle(id: 1) {
    ethPrice
  }
  mints(first: 250, orderBy: timestamp, orderDirection: desc) {
    timestamp
    id
    amountUSD
    amount0
    amount1
    pair {
      createdAtTimestamp
      token0Price
      token1Price
      id
      token0 {
        id
        symbol
        decimals
        name
      }
      token1 {
        id
        symbol
        decimals
        name
      }
    }
  }
  burns(first: 250, orderBy: timestamp, orderDirection: desc) {
    timestamp
    id
    amountUSD
    amount0
    amount1
    pair {
      createdAtTimestamp
      id
      token0Price
      token1Price
      token0 {
        id
        symbol
        decimals
        name
      }
      token1 {
        id
        symbol
        decimals
        name
      }
    }
  }
}
`,
          variables: null,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => handleTheGraphData(res))
      .then(resolve)
      .catch(reject);
  });
}

export function getProcessedTransactionsETH() {
  return new Promise((resolve, reject) => {
    fetch(
      window.config.subgrapheth_url ||
        "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `{
bundle(id: 1) {
  ethPrice
}
mints(first: 250, orderBy: timestamp, orderDirection: desc) {
  timestamp
  id
  amountUSD
  amount0
  amount1
  pair {
    createdAtTimestamp
    token0Price
    token1Price
    id
    token0 {
      id
      symbol
      decimals
      name
    }
    token1 {
      id
      symbol
      decimals
      name
    }
  }
}
burns(first: 250, orderBy: timestamp, orderDirection: desc) {
  timestamp
  id
  amountUSD
  amount0
  amount1
  pair {
    createdAtTimestamp
    id
    token0Price
    token1Price
    token0 {
      id
      symbol
      decimals
      name
    }
    token1 {
      id
      symbol
      decimals
      name
    }
  }
}
}
`,
          variables: null,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => handleTheGraphData(res))
      .then(resolve)
      .catch(reject);
  });
}

function handleTheGraphData({ data }) {
  const chain = localStorage.getItem('network')
 
    if (chain === "43114") {
      let burns = data.burns
        .filter((mintOrBurn) => {
          return [
            mintOrBurn.pair.token0.id,
            mintOrBurn.pair.token1.id,
          ].includes(eval(window.network + ".weth_address"));
        })
        .map((mintOrBurn) => getFormattedMintOrBurn(mintOrBurn, "burn"));
      let mints = data.mints
        .filter((mintOrBurn) => {
          return [
            mintOrBurn.pair.token0.id,
            mintOrBurn.pair.token1.id,
          ].includes(eval(window.network + ".weth_address"));
        })
        .map((mintOrBurn) => getFormattedMintOrBurn(mintOrBurn, "mint"));

      let transactions = burns.concat(mints);
      transactions = transactions.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      return {
        transactions,
        ethPrice: data.bundle.ethPrice,
      };
    }
    if (chain === "1") {
      let burns = data.burns
        .filter((mintOrBurn) => {
          return [
            mintOrBurn.pair.token0.id,
            mintOrBurn.pair.token1.id,
          ].includes(window.config.weth2_address);
        })
        .map((mintOrBurn) => getFormattedMintOrBurn(mintOrBurn, "burn"));
      let mints = data.mints
        .filter((mintOrBurn) => {
          return [
            mintOrBurn.pair.token0.id,
            mintOrBurn.pair.token1.id,
          ].includes(window.config.weth2_address);
        })
        .map((mintOrBurn) => getFormattedMintOrBurn(mintOrBurn, "mint"));

      let transactions = burns.concat(mints);

      transactions = transactions.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

      return {
        transactions,
        ethPrice: data.bundle.ethPrice,
      };
    }

  
}

function getFormattedMintOrBurn(mintOrBurn, type) {
  const chain = localStorage.getItem('network')

    if (chain === "43114") {
      let tokenAmount,
        ethAmount,
        tokenDecimals = 18,
        ethDecimals = 18,
        tokenPerEth,
        tokenId,
        tokenSymbol;
      let { token0, token1 } = mintOrBurn.pair;
      if (token0.id == eval(window.network + ".weth_address")) {
        tokenSymbol = token1.symbol;
        tokenId = token1.id;
        ethAmount = mintOrBurn.amount0;
        tokenAmount = mintOrBurn.amount1;
        tokenDecimals = token1.decimals * 1;
        ethDecimals = token0.decimals * 1;
        tokenPerEth = mintOrBurn.pair.token0Price;
      } else {
        tokenSymbol = token0.symbol;
        tokenId = token0.id;
        ethAmount = mintOrBurn.amount1;
        tokenAmount = mintOrBurn.amount0;
        tokenDecimals = token0.decimals * 1;
        ethDecimals = token1.decimals * 1;
        tokenPerEth = mintOrBurn.pair.token1Price;
      }
      return {
        key: mintOrBurn.id + "-" + type,
        tokenSymbol,
        tokenPerEth: tokenPerEth * 1,
        tokenId,
        tokenAmount: tokenAmount * 1,
        ethAmount: ethAmount * 1,
        tokenDecimals: tokenDecimals * 1,
        ethDecimals: ethDecimals * 1,
        pairCreationTimestamp: mintOrBurn.pair.createdAtTimestamp * 1,
        pairId: mintOrBurn.pair.id,
        type,
        id: mintOrBurn.id,
        timestamp: mintOrBurn.timestamp * 1,
        amountUSD: mintOrBurn.amountUSD * 1,
      };
    }

    if (chain === "1") {
      let tokenAmount,
        ethAmount,
        tokenDecimals = 18,
        ethDecimals = 18,
        tokenPerEth,
        tokenId,
        tokenSymbol;
      let { token0, token1 } = mintOrBurn.pair;
      if (token0.id == window.config.weth2_address) {
        tokenSymbol = token1.symbol;
        tokenId = token1.id;
        ethAmount = mintOrBurn.amount0;
        tokenAmount = mintOrBurn.amount1;
        tokenDecimals = token1.decimals * 1;
        ethDecimals = token0.decimals * 1;
        tokenPerEth = mintOrBurn.pair.token0Price;
      } else {
        tokenSymbol = token0.symbol;
        tokenId = token0.id;
        ethAmount = mintOrBurn.amount1;
        tokenAmount = mintOrBurn.amount0;
        tokenDecimals = token0.decimals * 1;
        ethDecimals = token1.decimals * 1;
        tokenPerEth = mintOrBurn.pair.token1Price;
      }
      return {
        key: mintOrBurn.id + "-" + type,
        tokenSymbol,
        tokenPerEth: tokenPerEth * 1,
        tokenId,
        tokenAmount: tokenAmount * 1,
        ethAmount: ethAmount * 1,
        tokenDecimals: tokenDecimals * 1,
        ethDecimals: ethDecimals * 1,
        pairCreationTimestamp: mintOrBurn.pair.createdAtTimestamp * 1,
        pairId: mintOrBurn.pair.id,
        type,
        id: mintOrBurn.id,
        timestamp: mintOrBurn.timestamp * 1,
        amountUSD: mintOrBurn.amountUSD * 1,
      };
    }
  
}
