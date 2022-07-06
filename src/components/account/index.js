import React from 'react'
import getFormattedNumber from '../../functions/get-formatted-number'
import { NavLink } from 'react-router-dom'

const { BigNumber } = window

export default class Subscription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinbase: '',
            selectedSubscriptionToken: Object.keys(window.config.subscription_tokens)[0],
            tokenBalance: '',
            price: '', formattedPrice: '',
            favorites: []
        }
    }

    componentDidMount() {
        window.getFavorites().then(favorites => this.setState({ favorites }))
        .catch(console.error)
        
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
        this.setState({coinbase: await window.getCoinbase()})
        this.handleSubscriptionTokenChange(this.state.selectedSubscriptionToken)
        
    }

    handleSubscriptionTokenChange = async (tokenAddress) => {
        let tokenDecimals = window.config.subscription_tokens[tokenAddress].decimals
        this.setState({selectedSubscriptionToken: tokenAddress, tokenBalance: '', formattedPrice: '', price: ''})
        let price = await window.getEstimatedTokenSubscriptionAmount(tokenAddress)
        price = new BigNumber(price).times(1.1).toFixed(0)
        let formattedPrice = getFormattedNumber(price/10**tokenDecimals, tokenDecimals)
        let tokenBalance = await window.getTokenHolderBalance(tokenAddress, this.state.coinbase)
        this.setState({price, formattedPrice, tokenBalance})
    }

    handleApprove = async (e) => {
        e.preventDefault()
        window.approveToken(this.state.selectedSubscriptionToken, window.config.subscription_address, this.state.price)
    }
    handleSubscribe = (e) => {
        e.preventDefault()
        console.log("handleSubscribe()")
        window.subscribe(this.state.selectedSubscriptionToken, this.state.price)
    }

    handleUnsubscribe = (e) => {
        e.preventDefault()
        window.unsubscribe()
    }

    GetSubscriptionForm = () => {
        let tokenDecimals = window.config.subscription_tokens[this.state.selectedSubscriptionToken].decimals
        return (
            <div>
                <strong style={{fontSize: '1.2rem'}} className='d-block mb-3'>SUBSCRIBE TO DYP TOOLS PREMIUM</strong>
                <form style={{maxWidth: '600px'}} onSubmit={this.handleSubscribe}>
                    <p className='text-muted mb-4' style={{fontSize: '.8rem'}}><i className='fas fa-info-circle'></i> The subscription tokens will be used to buy and lock DYP worth ~$75, once unsubscribed the DYP will be unlocked and sent to your wallet.</p>

                    <ul style={{fontSize: '.8rem', lineHeight: 1.5}} className='text-muted mb-4'>
                        <li><i className='fas fa-check-circle'></i> Access to manual research info for projects.</li>
                        <li><i className='fas fa-check-circle'></i> Early access to new features released in the future.</li>
                        <li><i className='fas fa-check-circle'></i> Guaranteed allocation to presales of new projects launched using our LaunchPad.</li>
                    </ul>

                    {/* <p className='mt-4'>Enter Pair Address</p>
                    <input value={this.state.pair_address} onChange={this.handlePairChange} className='form-control' type='text' placeholder='Pair Address' />
                    <br /> */}
                    {!this.props.appState.isPremium ? <div>
                        <div className='form-group'>
                            <p>Select Subscription Token</p>
                            <select disabled={!this.props.appState.isConnected} value={this.state.selectedSubscriptionToken} onChange={e => this.handleSubscriptionTokenChange(e.target.value)} className='form-control'>
                                {Object.keys(window.config.subscription_tokens).map((t) => (
                                    <option key={t} value={t}> {window.config.subscription_tokens[t].symbol} </option>
                                ))}
                            </select>
                        </div>

                        <div className='form-group'>
                            <p>Token Amount (Balance: {getFormattedNumber(this.state.tokenBalance / 10**tokenDecimals, 6 )}) </p>
                            <input disabled onChange={e => {
                                let amount = new window.BigNumber(e.target.value)
                                amount = amount.times(1e18).toFixed(0)
                                this.setState({amount})
                            }} value={this.state.formattedPrice} type='number' placeholder='Subscription Token Amount' className='form-control' />
                            <br />
                        </div>

                        <button disabled={!this.props.appState.isConnected} onClick={this.handleApprove} className='btn v1' type='button'>APPROVE</button>
                        <button disabled={!this.props.appState.isConnected} className='btn v1 ml-2' type='submit'>SUBSCRIBE</button>
                    </div>
                    :
                    <div>
                        <p>
                            <i className='fas fa-check-circle'></i> Premium Member
                        </p>
                        <p>DYP Locked in Subscription: {getFormattedNumber(this.props.appState.subscribedPlatformTokenAmount/1e18, 6)} DYP</p>
                        <button disabled={!this.props.appState.isConnected} onClick={this.handleUnsubscribe} className='btn v1' type='button'>UNSUBSCRIBE</button>    
                    </div>}
                </form>
                {/*<div>*/}
                {/*    <strong style={{fontSize: '1.2rem'}} className='d-block mb-3 mt-5'>EARLY ACCESS PREMIUM FEATURES</strong>*/}
                {/*    <ul style={{fontSize: '.8rem', lineHeight: 1.5, listStyle: 'initial'}} className='text-muted mb-4'>*/}
                {/*        <li className='mb-2'><i className='fas fa-info-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>*/}
                {/*        <li className='mb-2'><i className='fas fa-info-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                        


                <strong style={{fontSize: '1.2rem'}} className='d-block mb-3 mt-5'>MY FAVORITES</strong>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Pair Address</th>
                                <th>Tokens</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.favorites.map((f, i) => (<tr key={f.id}>
                                <td>{i+1}</td>
                                <td><NavLink className="l-clr-purple" to={`/pair-explorer/${f.id}`}>{f.id}</NavLink></td>
                                <td>{f.token0.symbol}/{f.token1.symbol} </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
                
        )
    }
    
    

    render() {
        
        return (
            <div className='locker'>
                <div className='col-md-6 px-3'>
                    <h2 style={{display: 'block', color: `var(--preloader-clr)`}}>Account &amp; Premium Subscription</h2>

                    <p>Get DYP Tools Premium Subscription</p>
                </div>
                <div className='l-table-wrapper-div p-4'>
                    <div className='mb-4'>
                        {this.GetSubscriptionForm()}
                    </div>
                    
                </div>
            </div>
        )
    }
}