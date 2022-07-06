import { NavLink } from "react-router-dom"

const activateLasers = () => {
    window.$.alert('Coming Soon!')
}
const Sidebar = (props) => (
    <div onClick={props.toggleMobileSidebar} className={`sidebar ${props.isOpenInMobile ? 'open' : ''}`} >
        <div className="close-sidebar">
            <i className="fas fa-arrow-left"></i>
        </div>
        <div className="logo">
            <a href="/">
                <img className="logo-white" src="/assets/img/svg/logo.svg" alt="Image" />
                <img className="logo-black" src="/assets/img/svg/logo.svg" alt="Image" />
            </a>
        </div>
        <div className="home-menu">
            <a onClick={e => {
                e.preventDefault()
                props.handleConnection()
            }} href="#">
                {/* <img src="/assets/img/wallet.svg" alt="Image" /> */}
                <i style={{color: '#fff'}} className='fas fa-wallet'></i>
                <span>{!props.isConnected ? "Connect Wallet" : "Wallet Connected!"}</span>
            </a>
        </div>
        <div className="menu-cat-one">

            <h6 className='networks'>
                <a href="https://tools.dyp.finance/" className='hoverNetwork'>
                    <img src="https://dyp.finance/img/i1.svg" alt="Image not found" />
                    <span>Ethereum</span>
                </a>
                <a href="javascript:void(0)" className='hoverNetwork' style={{padding: '4px 11px 0'}}>
                    <img src="https://dyp.finance/img/farms/avax-yield.png" alt="Image not found" />
                    <span>Avalanche</span>
                </a>
            </h6>

            <ul>
                <li><NavLink exact to="/"><img src="/assets/img/search.svg" alt="Image" /><span>Pool Explorer</span></NavLink></li>
                <li><NavLink to="/pair-explorer"><img src="/assets/img/compass.svg" alt="Image" /><span>Pair Explorer</span></NavLink></li>
                <li><NavLink to="/big-swap-explorer"><i className="fas fa-exchange-alt" alt="Image" /><span>Big Swap Explorer</span></NavLink></li>
                <li><NavLink to="/locker"><i className="fas fa-lock" alt="Image" /><span>DYP Locker</span></NavLink></li>
                <li><NavLink to="/top-tokens"><i className="fab fa-ethereum" alt="Image" /><span>Top Tokens</span></NavLink></li>
            </ul>
        </div>
        <div className="menu-cat-two">
            <h6>Others</h6>
            <ul>
                {String(props.appState.coinbase).toLowerCase() == window.config.metamask_admin_account.toLowerCase() && <li><NavLink to="/admin"><i className="fas fa-user-cog" alt="Image" /><span>Admin</span></NavLink></li>}
                <li><NavLink to="/farms"><i className='fas fa-seedling' /><span>Yields</span></NavLink></li>
                <li><NavLink to="/account"><img src="/assets/img/person.svg" alt="Image" /><span>Account</span></NavLink></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://dyp.finance/launchpad'><i className='fas fa-rocket' /><span>LaunchPad</span></a></li>
                <li><a target='_blank' rel='noopener noreferrer' href={window.config.submission_form_link}><i className='far fa-file-alt' /><span>Submit Info</span></a></li>
                <li><a target='_blank' rel='noopener noreferrer' href="https://app.pangolin.exchange/#/swap?outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"><img src="/assets/img/cart.svg" alt="Image" /><span>Buy DYP</span></a></li>
                <li onClick={props.toggleTheme} className="change-clr"><a href="javascript:void(0)"><i className={`fas fa-${props.theme=='theme-white'?'moon':'sun'}`} /><span>Change theme</span></a></li>
            </ul>
        </div>
    </div>
            
)

export default Sidebar