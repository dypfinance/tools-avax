import fetchGql from "./fetch-gql";
const ETHEREUM_BLOCKS_SUBGRAPH =
  "https://api.thegraph.com/subgraphs/name/dasconnor/avalanche-blocks";
const ETHEREUM_BLOCKS_SUBGRAPH_ETH =
  "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks";

const INDEXING_STATUS_ENDPOINT = window.config.indexing_status_endpoint;
const INDEXING_STATUS_ENDPOINTETH = window.config.indexing_status_endpointeth;
// 'https://api.thegraph.com/index-node/graphql' ||

const INDEXING_STATUS_QUERY = `query health {
    indexingStatusForCurrentVersion(subgraphName: "dasconnor/pangolin-dex") {
      synced
      health
      chains {
        chainHeadBlock {
          number
          __typename
        }
        latestBlock {
          number
          __typename
        }
        __typename
      }
      __typename
    }
  }
  `;

const INDEXING_STATUS_QUERY_ETH = `query health {
    indexingStatusForCurrentVersion(subgraphName: "davekaj/uniswap") {
      synced
      health
      chains {
        chainHeadBlock {
          number
          __typename
        }
        latestBlock {
          number
          __typename
        }
        __typename
      }
      __typename
    }
  }
  `;

const BLOCK_QUERY = `query ($gte: BigInt!, $lt: BigInt!) {
    blocks(orderBy: timestamp, orderDirection: asc, first: 1, where: {timestamp_gte: $gte, timestamp_lt: $lt}) {
      number
      timestamp
    }
  }
`;
const TIMESTAMP_QUERY = `query ($number: BigInt!) {
    blocks(where: {
      number: $number
    }) {
      timestamp
    }
}`;

async function getBlockFromTimestamp(timestamp) {
  let variables = { gte: timestamp * 1, lt: timestamp * 1 + 600 };
  const chain = localStorage.getItem('network')

 
    if (chain === "1") {
      let response = await fetchGql(
        BLOCK_QUERY,
        variables,
        ETHEREUM_BLOCKS_SUBGRAPH_ETH
      );
      // alert(JSON.stringify(response))
      return response.data.blocks[0].number;
    }
    if (chain === "43114") {
      let response = await fetchGql(
        BLOCK_QUERY,
        variables,
        ETHEREUM_BLOCKS_SUBGRAPH
      );
      // alert(JSON.stringify(response))
      return response.data.blocks[0].number;
    }
  
}

async function getTimestampFromBlock(number) {
  let variables = { number };
  let response = 0;
  const chain = localStorage.getItem('network')

    if (chain === "1") {
      while (1) {
        response = await fetchGql(
          TIMESTAMP_QUERY,
          variables,
          ETHEREUM_BLOCKS_SUBGRAPH_ETH
        );
        if (
          response.data.blocks != undefined &&
          response.data != 0 &&
          response.data.blocks[0] != undefined
        ) {
          console.log(response);
          break;
        }
      }
      return response.data.blocks[0].timestamp;
    }
    if (chain === "43114") {
      while (1) {
        response = await fetchGql(
          TIMESTAMP_QUERY,
          variables,
          ETHEREUM_BLOCKS_SUBGRAPH
        );
        if (
          response.data.blocks != undefined &&
          response.data != 0 &&
          response.data.blocks[0] != undefined
        ) {
          console.log(response);
          break;
        }
      }
      return response.data.blocks[0].timestamp;
    }
  
}

async function getLatestBlock() {
  const chain = localStorage.getItem('network')

 
    if (chain === "1") {
      let response = await fetchGql(
        INDEXING_STATUS_QUERY_ETH,
        null,
        INDEXING_STATUS_ENDPOINTETH
      );

      return response.data.indexingStatusForCurrentVersion.chains[0].latestBlock
        .number;
    }

    if (chain === "43114") {
      let response = await fetchGql(
        INDEXING_STATUS_QUERY,
        null,
        INDEXING_STATUS_ENDPOINT
      );
      return response.data.indexingStatusForCurrentVersion.chains[0].latestBlock
        .number;
    }
  
}

async function get24hEarlierBlock() {
  const b = await getLatestBlock();
  const number = Number(b);
  const t = await getTimestampFromBlock(number);
  const a = await getBlockFromTimestamp(t - 86400);
  return Number(a);
}

export { getTimestampFromBlock, getLatestBlock, get24hEarlierBlock };
export default getBlockFromTimestamp;
