import React from 'react'
import getFormattedNumber from '../../functions/get-formatted-number'
import DatePicker from 'react-datepicker'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";


export default class Locker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unlockDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
            amount: '',
            selectedBaseToken: '0',
            pair_address: this.props.match.params.pair_id||'',
            lpBalance: '',

            recipientLocksLength: 0,
            recipientLocks: [],
            tokenLocksLength: 0,
            tokenLocks: [],

            coinbase: '',
            isLoadingMoreMyLocks: false,
            isLoadingMoreTokenLocks: false,

            totalLpLocked: '',
            baseTokens: [],
            usdValueOfLP: undefined,
            lpTotalSupply: ''
        }
    }

    componentDidMount() {
        if (window.isConnectedOneTime) {
            this.onComponentMount()
        } else {
            window.addOneTimeWalletConnectionListener(this.onComponentMount)
        }
    }
    componentWillUnmount() {
        window.removeOneTimeWalletConnectionListener(this.onComponentMount)
    }

    onComponentMount = async () => {
        this.refreshMyLocks()
        this.setState({coinbase: await window.getCoinbase()})
        let pair_id = this.props.match.params.pair_id
        let baseTokens = await window.getBaseTokens()
        this.setState({baseTokens})
        if (window.web3.utils.isAddress(pair_id)) {
            this.refreshTokenLocks(pair_id)
            this.handlePairChange(null, pair_id)
            let totalLpLocked = await window.getLockedAmount(pair_id)
            this.refreshUsdValueOfLP(pair_id, totalLpLocked, baseTokens)
            this.setState({totalLpLocked})
        }
    }

    refreshUsdValueOfLP = async (pair, amount, baseTokens) => {
        try {
            let totalSupply = await window.getTokenTotalSupply(pair)
            this.setState({lpTotalSupply: totalSupply})

            let {token0, token1} = await window.getPairTokensInfo(pair)
            let baseToken
            if (baseTokens.includes(token0.address.toLowerCase())) {
                baseToken = token0
            } else if (baseTokens.includes(token1.address.toLowerCase())) {
                baseToken = token1
            }
            let baseTokenBalance = await window.getTokenHolderBalance(baseToken.address, pair)
            let baseTokenInLp = (baseTokenBalance / (10**(baseToken.decimals*1))) * (amount/totalSupply)
            let tokenCG = window.tokenCG[baseToken.address.toLowerCase()]
            if (!tokenCG) return;
            let usdPerBaseToken = Number(await window.getPrice(tokenCG))
            let usdValueOfLP = baseTokenInLp * usdPerBaseToken * 2
            this.setState({usdValueOfLP})
        } catch (e) {
            console.error(e)
        }
    }

    refreshMyLocks = async () => {
        if (this.state.isLoadingMoreMyLocks) return;
        this.setState({isLoadingMoreMyLocks: true})
        try {
            let recipient = await window.getCoinbase()
            let recipientLocksLength = await window.getActiveLockIdsLengthByRecipient(recipient)
            recipientLocksLength = Number(recipientLocksLength)
            let step = window.config.MAX_LOCKS_TO_LOAD_PER_CALL
            let startIndex = this.state.recipientLocks.length
            let endIndex = Math.min(recipientLocksLength, startIndex+step)
            let recipientLocks = await window.getActiveLocksByRecipient(recipient, startIndex, endIndex)
            recipientLocks = this.state.recipientLocks.concat(recipientLocks)
            this.setState({recipientLocksLength, recipientLocks})
        } finally {
            this.setState({isLoadingMoreMyLocks: false})
        }
    }

    refreshTokenLocks = async token => {
        if (this.state.isLoadingMoreTokenLocks) return;
        this.setState({isLoadingMoreTokenLocks: true})
        try {
            let tokenLocksLength = await window.getActiveLockIdsLengthByToken(token)
            tokenLocksLength = Number(tokenLocksLength)
            let step = window.config.MAX_LOCKS_TO_LOAD_PER_CALL
            let startIndex = this.state.tokenLocks.length
            let endIndex = Math.min(tokenLocksLength, startIndex+step)
            let tokenLocks = await window.getActiveLocksByToken(token, startIndex, endIndex)
            tokenLocks = this.state.tokenLocks.concat(tokenLocks)
            this.setState({tokenLocksLength, tokenLocks})
        } finally {
            this.setState({isLoadingMoreTokenLocks: false})
        }
    }

    handlePairChange = (e, pair_address=null) => {
        let newPairAddress = pair_address || e.target.value
        this.setState({pair_address: newPairAddress})
        clearTimeout(this.pairChangeTimeout)
        this.pairChangeTimeout = setTimeout(this.loadPairInfo, 500)
    }
    loadPairInfo = async () => {
        let isConnected = await this.props.handleConnection()
        if (!isConnected) {
            window.alertify.message("Please connect wallet to continue!")
            return
        }
        let isAddress = window.web3.utils.isAddress(this.state.pair_address)
        if (!isAddress) return
        let pair = await window.getPairTokensInfo(this.state.pair_address)
        this.setState({pair})
        let balance = await window.getTokenHolderBalance(this.state.pair_address, await window.getCoinbase())
        this.setState({amount: balance, lpBalance: balance})
    }

    handleApprove = async (e) => {
        let selectedBaseTokenAddress = this.state.pair?this.state.pair[this.state.selectedBaseToken == '0' ? 'token0':'token1'].address:'';
        if (selectedBaseTokenAddress == '') {
            window.alertify.message("Select a supported base token!")
            return;
        }
        let baseTokens = await window.getBaseTokens()
        if (!baseTokens.includes(selectedBaseTokenAddress)) {
            console.log({selectedBaseTokenAddress, baseTokens})
            window.alertify.message("Selected base token not supported!")
            return
        }
        window.approveToken(this.state.pair_address, window.config.locker_address, this.state.amount)
    }
    handleLockSubmit = (e) => {
        e.preventDefault()
        let selectedBaseTokenAddress = this.state.pair?this.state.pair[this.state.selectedBaseToken == '0' ? 'token0':'token1'].address:'';
        window.createLock(this.state.pair_address, selectedBaseTokenAddress, this.state.amount , Math.floor(this.state.unlockDate.getTime()/1e3))
    }

    handleAmountPercentInput = percent => (e) => {
        e.preventDefault()
        let amount = new window.BigNumber(this.state.lpBalance)
        amount = amount.times(percent).div(100).toFixed(0)
        this.setState({amount})
    }

    handleClaim = id => e => {
        e.preventDefault()
        window.claimUnlocked(id)
    }

    GetPairLockInfo = () => {
        return (
            <div className='mb-4'>
                <p>Total {this.state.pair ? `${this.state.pair.token0.symbol}-${this.state.pair.token1.symbol}` : 'LP'} locked: <span style={{fontWeight: 'bold'}}>{getFormattedNumber(this.state.totalLpLocked/1e18, 18)} ({getFormattedNumber(this.state.totalLpLocked/this.state.lpTotalSupply*100, 2)}%)</span></p>
                {typeof this.state.usdValueOfLP !== 'undefined' && <p>
                    USD Value Locked: <span style={{fontWeight: 'bold'}}>${getFormattedNumber(this.state.usdValueOfLP, 2)}</span>   
                </p>}
            </div>
        )
    }

    GetCreateLockForm = () => {
        return (
            <div>
                        <strong style={{fontSize: '1.2rem'}} className='d-block mb-3'>CREATE A LOCK</strong>
                        <form style={{maxWidth: '600px'}} onSubmit={this.handleLockSubmit}>
                            <p className='text-muted' style={{fontSize: '.8rem'}}><i className='fas fa-info-circle'></i> Approx. 1% of the LP value will be sent as AVAX, which will be used to buy and lock DYP with the liquidity, DYP will be released to recipient wallet along with liquidity once unlocked.</p>

                            <p className='mt-4'>Enter Pair Address</p>
                            <input disabled={this.props.match.params.pair_id} value={this.state.pair_address} onChange={this.handlePairChange} className='form-control' type='text' placeholder='Pair Address' />
                            <br />
                            <div className='form-group'>
                                <p>Select Base Token</p>
                                <label><input onChange={e => {
                                    this.setState({selectedBaseToken: '0'})
                                }} value='0' checked={this.state.selectedBaseToken == '0'} type='radio' name='basetoken' /> {this.state.pair?.token0.symbol || 'token0'}</label><br />
                                <label><input onChange={e => {
                                    this.setState({selectedBaseToken: '1'})
                                }} value='1' checked={this.state.selectedBaseToken == '1'} type='radio' name='basetoken' /> {this.state.pair?.token1.symbol || 'token1'}</label><br />
                            </div>

                            <div className='form-group'>
                                <p>Enter Amount (Balance: {getFormattedNumber(this.state.lpBalance / 1e18, 6 )}) </p>
                                <input onChange={e => {
                                    let amount = new window.BigNumber(e.target.value)
                                    amount = amount.times(1e18).toFixed(0)
                                    this.setState({amount})
                                }} value={this.state.amount/1e18} type='number' placeholder='LP Token Amount' className='form-control' />
                                <br />
                                <div className='row'>
                                    <div className='col'>
                                        <button onClick={this.handleAmountPercentInput(25)} type='submit' className='btn btn-info btn-block'>25%</button>
                                    </div>
                                    <div className='col'>
                                        <button onClick={this.handleAmountPercentInput(50)} type='submit' className='btn btn-info btn-block'>50%</button>
                                    </div>
                                    <div className='col'>
                                        <button onClick={this.handleAmountPercentInput(75)} type='submit' className='btn btn-info btn-block'>75%</button>
                                    </div>
                                    <div className='col'>
                                        <button onClick={this.handleAmountPercentInput(100)} type='submit' className='btn btn-info btn-block'>100%</button>
                                    </div>
                                </div>
                            </div>

                            <div className='form-group'>
                                <p>Unlock Date</p>
                                <DatePicker 
                                    selected={this.state.unlockDate} 
                                    onChange={unlockDate => this.setState({unlockDate})} 
                                    showTimeSelect
                                    dateFormat='MMMM d, yyyy h:mm aa'
                                    className='form-control l-datepicker' />
                            </div>

                            <button onClick={this.handleApprove} className='btn v1' type='button'>APPROVE</button>
                            <button className='btn v1 ml-2' type='submit'>LOCK</button>
                            
                        </form>
                    </div>
                
        )
    }
    
    GetMyLocks = () => {
        return (
            <div>
                <strong style={{fontSize: '1.2rem'}} className='d-block mb-3'>MY LOCKS</strong>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Pair Address</th>
                                <th>LP Amount</th>
                                <th>DYP</th>
                                <th>Recipient</th>
                                <th>Unlocks In</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.recipientLocks.map(lock => (<tr key={lock.id}>
                                <td>{lock.id} </td>
                                <td title={lock.token}><NavLink to={`/pair-explorer/${lock.token}`}>...{lock.token.slice(35)}</NavLink> </td>
                                <td title={getFormattedNumber(lock.amount/1e18, 18)}>{getFormattedNumber(lock.amount/1e18, 6)} </td>
                                <td title={getFormattedNumber(lock.platformTokensLocked/1e18, 18)}>{getFormattedNumber(lock.platformTokensLocked/1e18, 6)}</td>
                                <td title={lock.recipient}><a rel='noopener noreferrer' target='_blank' href={`https://etherscan.io/address/${lock.recipient}`}>...{lock.recipient.slice(35)}</a></td>
                                <td title={new Date(lock.unlockTimestamp*1e3)}>{moment.duration(lock.unlockTimestamp*1e3 - Date.now()).humanize(true)} </td>
                                <td>
                                    {String(this.state.coinbase).toLowerCase() == lock.recipient.toLowerCase() && <button onClick={this.handleClaim(lock.id)} disabled={Date.now() < lock.unlockTimestamp*1e3} style={{height: 'auto'}} className='btn v1 btn-sm'>CLAIM</button>}
                                </td>
                            </tr>))}
                            {this.state.recipientLocksLength > this.state.recipientLocks.length &&<tr>
                                <td colSpan='7' className='text-center'> <a onClick={this.refreshMyLocks} href='javascript:void(0)'>{!this.state.isLoadingMoreMyLocks ?"Load more":"Loading..."} </a> </td>    
                            </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    GetTokenLocks = () => {
        return (
            <div>
                <strong style={{fontSize: '1.2rem'}} className='d-block mb-3'>PAIR LOCKS</strong>
                {this.GetPairLockInfo()}
                {this.state.tokenLocks.length > 0 && <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Pair Address</th>
                                <th>LP Amount</th>
                                <th>DYP</th>
                                <th>Recipient</th>
                                <th>Unlocks In</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tokenLocks.map(lock => (<tr key={lock.id}>
                                <td>{lock.id} </td>
                                <td title={lock.token}><NavLink to={`/pair-explorer/${lock.token}`}>...{lock.token.slice(35)}</NavLink> </td>
                                <td title={getFormattedNumber(lock.amount/1e18, 18)}>{getFormattedNumber(lock.amount/1e18, 6)} </td>
                                <td title={getFormattedNumber(lock.platformTokensLocked/1e18, 18)}>{getFormattedNumber(lock.platformTokensLocked/1e18, 6)}</td>
                                <td title={lock.recipient}><a rel='noopener noreferrer' target='_blank' href={`https://etherscan.io/address/${lock.recipient}`}>...{lock.recipient.slice(35)}</a></td>
                                <td title={new Date(lock.unlockTimestamp*1e3)}>{moment.duration(lock.unlockTimestamp*1e3 - Date.now()).humanize(true)} </td>
                                <td>
                                    {String(this.state.coinbase).toLowerCase() == lock.recipient.toLowerCase() && <button onClick={this.handleClaim(lock.id)} disabled={Date.now() < lock.unlockTimestamp*1e3}  style={{height: 'auto'}} className='btn v1 btn-sm'>CLAIM</button>}
                                </td>
                            </tr>))}
                            {this.state.tokenLocksLength > this.state.tokenLocks.length &&<tr>
                                <td colSpan='7' className='text-center'> <a onClick={() => {
                                    let pair_id = this.props.match.params.pair_id
                                    if (!(window.web3 && window.web3.utils && window.web3.utils.isAddress(pair_id))) return;

                                    this.refreshTokenLocks(pair_id)
                                }} href='javascript:void(0)'>{!this.state.isLoadingMoreTokenLocks ?"Load more":"Loading..."} </a> </td>    
                            </tr>}
                        </tbody>
                    </table>
                </div>}
            </div>
        )
    }

    render() {
        
        return (
            <div className='locker'>
                <div className='col-md-6 px-3'>
                    <h2 style={{display: 'block', color: `var(--preloader-clr)`}}>DYP Locker</h2>

                    <p>Lock Pangolin Liquidity and Check Status of Liquidity Locks.</p>
                </div>
                <div className='l-table-wrapper-div p-4'>
                    {this.props.match.params.pair_id && <div className='mb-4'>
                        {this.GetTokenLocks()}
                    </div>}
                    {this.state.recipientLocks.length > 0 && <div className='mb-5'>
                        {this.GetMyLocks()}
                    </div>}
                    <div className='mb-4'>
                        {this.GetCreateLockForm()}
                    </div>
                    
                </div>
            </div>
        )
    }
}