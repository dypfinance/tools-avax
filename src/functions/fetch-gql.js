function fetchGql(query, variables=null, url=null) {
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

export default fetchGql