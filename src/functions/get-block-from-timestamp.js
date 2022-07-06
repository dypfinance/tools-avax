import fetchGql from "./fetch-gql"
const ETHEREUM_BLOCKS_SUBGRAPH = 'https://api.thegraph.com/subgraphs/name/dasconnor/avalanche-blocks'
const INDEXING_STATUS_ENDPOINT = window.config.indexing_status_endpoint
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
  `
const BLOCK_QUERY = `query ($gte: BigInt!, $lt: BigInt!) {
    blocks(orderBy: timestamp, orderDirection: asc, first: 1, where: {timestamp_gte: $gte, timestamp_lt: $lt}) {
      number
      timestamp
    }
  }
`
const TIMESTAMP_QUERY = `query ($number: BigInt!) {
    blocks(where: {
      number: $number
    }) {
      timestamp
    }
}`

async function getBlockFromTimestamp(timestamp) {
    let variables = {gte: timestamp*1, lt: timestamp*1 + 600}
    let response = await fetchGql(BLOCK_QUERY, variables, ETHEREUM_BLOCKS_SUBGRAPH)
    // alert(JSON.stringify(response))
    return response.data.blocks[0].number
}

async function getTimestampFromBlock(number) {
    let variables = {number}
    let response = 0
    while (1){
        response = await fetchGql(TIMESTAMP_QUERY, variables, ETHEREUM_BLOCKS_SUBGRAPH)
        if (response.data.blocks != undefined && response.data != 0 && response.data.blocks[0] != undefined){
            console.log(response)
            break
        }

    }
    return response.data.blocks[0].timestamp
}

async function getLatestBlock() {
    let response = await fetchGql(INDEXING_STATUS_QUERY, null, INDEXING_STATUS_ENDPOINT)
    return response.data.indexingStatusForCurrentVersion.chains[0].latestBlock.number
}

function get24hEarlierBlock() {
    return getLatestBlock()
            .then(b => Number(b))
            .then(getTimestampFromBlock)
            .then(t => getBlockFromTimestamp(t - 86400))
            .then(a => Number(a))
}

export { getTimestampFromBlock, getLatestBlock, get24hEarlierBlock }
export default getBlockFromTimestamp