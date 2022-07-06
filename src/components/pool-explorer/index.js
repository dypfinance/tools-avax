import React from 'react'
import moment from 'moment'
import DataTable, { createTheme } from 'react-data-table-component'
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom'
import getProcessedTransactions from '../../functions/get-processed-transactions'
import getFormattedNumber from '../../functions/get-formatted-number'


const Circular = () => (
    // we need to add some padding to circular progress to keep it from activating our scrollbar
    <div style={{ padding: '60px' }}>
        <CircularProgress color='inherit' size={75} />
    </div>
);


createTheme('solarized', {
    text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(0,0,0,.12)',
    },
    background: {
        default: 'transparent',
    },
    context: {
        background: 'transparent' || '#E91E63',
        text: '#FFFFFF',
    },
    divider: {
        default: 'rgba(81, 81, 81, 1)',
    },
    button: {
        default: '#FFFFFF',
        focus: 'rgba(255, 255, 255, .54)',
        hover: 'rgba(255, 255, 255, .12)',
        disabled: 'rgba(255, 255, 255, .18)',
    },
    sortFocus: {
        default: 'rgba(255, 255, 255, .54)',
    },
    selected: {
        default: 'rgba(0, 0, 0, .7)',
        text: '#FFFFFF',
    },
    highlightOnHover: {
        default: 'rgba(0, 0, 0, .7)',
        text: '#FFFFFF',
    },
    striped: {
        default: 'rgba(0, 0, 0, .87)',
        text: '#FFFFFF',
    },
});

export default class PoolExplorer extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            ethPrice: '...',
            gasPrice: '...',
            processedTransactions: [],
            filteredTransactions: [],
            isLoading: true,
            filteredByTokenId: '',
            filteredByTxnType: '' // 'burn' | 'mint' | ''
        }
    }

    componentDidMount() {
        this.fetchTransactions()
    }

    // componentDidUpdate() {
    //     //this.fetchTransactions()
    // }

    fetchTransactions = async () => {
        try {
            let network = this.props.network
            let { transactions, ethPrice } = await getProcessedTransactions(network)
            console.log({ transactions, ethPrice })

            // TODO: Filter this to last 4 hour transactions once synced
            transactions = transactions
            // .filter(txn => txn.timestamp*1e3 >= Date.now() - 4 * 60 * 60 * 1000)
            this.setState({ processedTransactions: transactions, filteredTransactions: transactions, 
                ethPrice 
            })
        } finally {
            this.setState({isLoading: false})
        }
        
    }

    filterByTokenId = (tokenId) => {
        if (!tokenId) {
            this.setState({filteredByTokenId: '', filteredTransactions: JSON.parse(JSON.stringify(this.state.processedTransactions))})
            return
        }
        let filteredTransactions = JSON.parse(JSON.stringify(this.state.processedTransactions))
        filteredTransactions = filteredTransactions.filter(txn => txn.tokenId == tokenId)
        this.setState({filteredTransactions, filteredByTokenId: tokenId})
    }

    filterByTxnType = (txnType) => {
        if (!txnType) {
            this.setState({ filteredByTxnType: '', filteredTransactions: JSON.parse(JSON.stringify(this.state.processedTransactions)) })
            return
        }
        let filteredTransactions = JSON.parse(JSON.stringify(this.state.processedTransactions))
        filteredTransactions = filteredTransactions.filter(txn => txn.type == txnType)
        this.setState({ filteredTransactions, filteredByTxnType: txnType })
    }

    filterByTokenSymbol = (tokenSymbol) => {
        if (!tokenSymbol) {
            this.setState({ filteredByTokenSymbol: '', filteredTransactions: JSON.parse(JSON.stringify(this.state.processedTransactions)) })
            return
        }
        let filteredTransactions = JSON.parse(JSON.stringify(this.state.processedTransactions))
        filteredTransactions = filteredTransactions.filter(txn => String(txn.tokenSymbol).toLowerCase().startsWith(tokenSymbol.toLowerCase()))
        this.setState({ filteredTransactions, filteredByTokenSymbol: tokenSymbol })
    }

    GetDataTable = () => {
        let now = Date.now()


        const columns = [
            {
                name: 'Token',
                selector: 'tokenSymbol',
                sortable: true,
                cell: txn => <a rel='noopener noreferrer' target="_blank" href={`https://cchain.explorer.avax.network/address/${txn.tokenId}`}>{txn.tokenSymbol}</a>
            },
            {
                name: 'Time',
                selector: 'timestamp',
                sortable: true,
                cell: txn => <td title={new Date(txn.timestamp * 1e3)}>{moment.duration(txn.timestamp * 1e3 - now).humanize(true)}</td>
            },
            {
                name: 'Actions',
                minWidth: '165px',
                cell: txn => (
                    <div className='l-table-actions'>
                        <a onClick={e => {
                            e.preventDefault()
                            this.filterByTokenId(this.state.filteredByTokenId == '' ? txn.tokenId : '')
                        }} title="Filter by token" href="#"><i style={{ fontSize: '18px', position: 'relative', top: '5px', color: this.state.filteredByTokenId == txn.tokenId ? 'red' : 'inherit' }} className={`fas fa-${this.state.filteredByTokenId == txn.tokenId ? 'times' : 'filter'}`}></i></a>
                        <a rel='noopener noreferrer' target="_blank" title="Buy at Pangolin" href={`https://app.pangolin.exchange/#/swap?outputCurrency=${txn.tokenId}`}><img src="/images/pangolin.png" width="18" alt="" /></a>
                        <a rel='noopener noreferrer' target="_blank" title={txn.id.split('-')[0]} href={`https://cchain.explorer.avax.network/tx/${txn.id.split('-')[0]}`}><img className='icon-bg-white-rounded' src="/images/cchain.png" width="18" alt="" /></a>
                        {/* <a rel='noopener noreferrer' target="_blank" title="Blocked Liquidity" href={`https://www.unicrypt.network/amm/uni/pair/${txn.pairId}`}><img className='icon-bg-white-rounded' src="/images/unicrypt_v3.svg" width="18" alt="" /></a> */}
                        <NavLink title="DYP Locker" to={`/locker/${txn.pairId}`}><i style={{ color: 'var(--preloader-clr)', fontSize: '20px', position: 'relative', top: '5px' }} className='fas fa-lock' /></NavLink>
                        <NavLink title="Pair Explorer" to={`/pair-explorer/${txn.pairId}`}><i style={{ fontSize: '20px', position: 'relative', top: '5px' }} className='far fa-compass'></i></NavLink>
                    </div>
                )
            },
            {
                name: 'Type',
                selector: 'type',
                sortable: true,
                cell: txn => <a target="_blank" rel="noopener noreferrer" href={`https://cchain.explorer.avax.network/address/${txn.pairId}`}><span className={`badge badge-${txn.type == 'burn' ? 'danger' : 'light'} p-2`}>{txn.type == 'burn' ? 'REMOVE' : 'ADD'}</span></a>
            },
            {
                name: 'Token Price USD',
                selector: 'tokenPerEth',
                sortable: true,
                format: txn => `$${ getFormattedNumber(txn.tokenPerEth * this.state.ethPrice, 8) }`
            },
            {
                name: 'Total Value',
                selector: 'amountUSD',
                sortable: true,
                format: txn => `$${getFormattedNumber(txn.amountUSD, 2)}`
            },
            {
                name: 'Token Amount',
                selector: 'tokenAmount',
                sortable: true,
                format: txn => `${getFormattedNumber(txn.tokenAmount, 8)} ${txn.tokenSymbol}`
            },
            {
                name: 'AVAX Amount',
                selector: 'ethAmount',
                sortable: true,
                format: txn => `${ getFormattedNumber(txn.ethAmount, 8) } AVAX`
            },
            {
                name: 'Pair Created',
                selector: 'pairCreationTimestamp',
                sortable: true,
                cell: txn => <div title={new Date(txn.pairCreationTimestamp*1e3)}>{ moment.duration(txn.pairCreationTimestamp * 1e3 - now).humanize(true) }</div>
            }
        ]
        return (
            <DataTable progressComponent={<Circular />} compact={true} keyField='key' 
            theme={this.props.theme == 'theme-white' ? 'light' : 'solarized'} persistTableHead={false} progressPending={this.state.isLoading} fixedHeader={true} pagination={true} paginationPerPage={50} paginationRowsPerPageOptions={[50, 100, 250, 500]} columns={columns} data={this.state.filteredTransactions} />
        )
    }

    render() {


        return (  
            
            <div>
                <div className='row px-3'>
                    <div className='col-md-6'>
                        <h2 style={{display: 'block', color: `var(--preloader-clr)`}}>Pool Explorer</h2>
                        <p className='d-block'>Search for new pools, add or remove liquidity in a pair.</p>
                    </div>
                    <div className='col-md-6'>
                    <div className="search-box">
                            <form id="searchform">
                                <input value={this.state.filteredByTokenSymbol} onChange={e => {
                                    this.setState({filteredByTokenSymbol: e.target.value})
                                    this.filterByTokenSymbol(e.target.value)
                                }} type="text" id="search-bar" style={{paddingBottom: '3px'}} autoComplete="off" placeholder="Filter by Token" className='l-border-black' />
                                <button type="submit" id="submit"><img src="/assets/img/search-2.png" alt="Image" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                 <div className="table-box">
                    <div className="table-title">
                        <h4>Pangolin Pools Activity</h4>
                    </div>
                    <div className="l-table-wrapper-div">
                        {this.GetDataTable()}
                    </div>
                    {/* <div className="page-nav">
                        <ul>
                            <li><a href="#"><img src="assets/img/arrow-left.png" alt="Image" /></a></li>
                            <li><span>Page 1 of 20</span></li>
                            <li><a href="#"><img src="assets/img/arro-right.png" alt="Image" /></a></li>
                        </ul>
                    </div> */}
                </div> 
            </div>
        
        )
    }
}
