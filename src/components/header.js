import { NavLink } from 'react-router-dom'

import getFormattedNumber from '../functions/get-formatted-number'

const Header = props => (
<header className="header-wrap"  style={{paddingLeft: '2rem'}}>
            <div className="header-left">
                <div>
                    <img src="https://dyp.finance/img/farms/avax-yield.png" alt="Image not found" style={{width: '20px', marginRight: '5px'}} />
                    <a href="#">AVAX: <span>${getFormattedNumber(props.ethPrice, 2)}</span></a>
                </div>
                <div className="dropdown bridged">
                    {/*<img src="/assets/img/icon-1.svg" alt="Image" />*/}
                    <span>Bridged on Avalanche</span>
                    <span>{getFormattedNumber(props.gasPrice, 2)} usd</span>
                    {/*<ul>*/}
                    {/*    <li><a href="#">Low: <span>271</span></a></li>*/}
                    {/*    <li><a href="#">Medium: <span>891</span></a></li>*/}
                    {/*    <li><a href="#">Fast: <span>123</span></a></li>*/}
                    {/*</ul>*/}
                </div>
                <div>
                    {/* <a href="#">HOT PAIRS <span>$1742.19</span> <img src="/assets/img/icon-2.svg" alt="Image" /></a> */}
                </div>

            </div>
            <div className="header-center">
               <div onClick={props.toggleMobileSidebar} className="hamburger-menu">
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
            </div>
            <div className="header-right">
                <div style={{whiteSpace: 'nowrap'}} className="">
                    <ul>
                        <marquee>
                        {props.appState.hotPairs.map((hotPair, i) => (<li key={i} style={{display: 'inline-block', paddingRight: '2rem'}}>
                            <NavLink to={`/pair-explorer/${hotPair.pair_address}`}>#{i+1} {hotPair.pair_name}</NavLink>
                        </li>))}
                        </marquee>
                    </ul>
                </div>
            </div>
         
        </header>
        
)

export default Header