function fetchGql(query, variables=null, url=null) {
    if(window.ethereum?.chainId === '0xa86a') {
        return new Promise((resolve, reject) => {
        fetch(
            ((url) ||
                window.config.subgraph_url ||
            'https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex'),
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables
            })
        }).then(res => res.json())
        .then(resolve)
        .catch(reject)
    })
    }

    if(window.ethereum?.chainId === '0x1') {
        return new Promise((resolve, reject) => {
            fetch(
                ((url) ||
                window.config.subgrapheth_url || 
                'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'),
            {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query,
                    variables
                })
            }).then(res => res.json())
            .then(resolve)
            .catch(reject)
        })
    }
    
}

export default fetchGql