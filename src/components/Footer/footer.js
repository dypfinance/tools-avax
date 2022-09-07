
import React from 'react'
import './footer.scss'
import Discord from './Social/discord.svg'
import Email from './Social/email.svg'
import Github from './Social/github.svg'
import Instagram from './Social/instagram.svg'
import LinkedIn from './Social/linkedin.svg'
import Medium from './Social/medium.svg'
import Teams from './Social/teams.svg'
import Telegram from './Social/telegram.svg'
import Twitter from './Social/twitter.svg'
import Youtube from './Social/youtube.svg'



export default class Footer extends React.Component {
    render() {
        return (
              
            <div className="container-fluid footer-container">
            <div className="row">
              <div className="col-md-2">
                <h3>About us</h3>
                <ul className="list-unstyled footer-group">
                  <li className="footer-item">
                    <a href="https://dyp.finance/about" target='_blank'>Our team</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance#our-partners" target='_blank'>Our partners</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance/roadmap" target='_blank'>Roadmap</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance/audit" target='_blank'>Security</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance/tokenomics" target='_blank'>Tokenomics</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance/presskit" target='_blank'>Media kit</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance/contact" target='_blank'>Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3>Products and Services</h3>
                <div className="row">
                  <div className="col">
                    <ul className="list-unstyled footer-group">
                      <li className="footer-item" style={{cursor: 'pointer'}}>
                      <a href="https://dyp.finance/earn" target="_blank">Buyback</a>
                      </li>
                      <li className="footer-item" style={{cursor: 'pointer'}}>
                      <a href="https://dyp.finance/earn" target="_blank">Vault</a>
                      </li>
                      <li className="footer-item" style={{cursor: 'pointer'}}>
                        <a href='https://dyp.finance/earn' target='_blank'>Farm</a>
                      </li>
                      <li className="footer-item" style={{cursor: 'pointer'}}>
                      <a href='https://dyp.finance/earn' target='_blank'>Stake</a>
                      </li>
                      <li className="footer-item" target='_blank'>
                        <a href="https://dyp.finance/bridge">Bridge</a>
                      </li>
      
                      <li className="footer-item highlited">
                        <a href="https://dyp.finance/iDYP-token" target='_blank'>iDYP Token</a>
                      </li>
                    </ul>
                  </div>
      
                  <div className="col">
                    <ul className="list-unstyled footer-group">
                      <li className="footer-item">
                        <a href="https://dyp.finance/caws" target={'_blank'}>CAWS NFT</a>
                      </li>
                      <li className="footer-item">
                        <a href="https://dyp.finance/buyDYP" target={'_blank'}>Buy DYP</a>
                      </li>
                      <li className="footer-item">
                        <a href="https://dyp.finance/iDYP-token" target={'_blank'}>Buy iDYP</a>
                      </li>
                      <li className="footer-item">
                        <a href="https://tools.dyp.finance/" target={"_blank"}>
                          DYP Tools
                        </a>
                      </li>
                      <li className="footer-item">
                        <a href="https://dyp.finance/vote" target={'_blank'}>Governance</a>
                      </li>
                      <li className="footer-item">
                        <a href="/launchpad" target={'_blank'}>Launchpad</a>
                      </li>
                      {/* <li className="footer-item">
                        <a to="/earnv1">Finished</a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <h3>Announcements</h3>
                <ul className="list-unstyled footer-group">
                  <li className="footer-item">
                    <a href="https://dyp.finance/latestupdates" target={'_blank'}>Latest announcements</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://dyp.finance/latestupdates" target={'_blank'}>Latest events</a>
                  </li>
                  <li className="footer-item" >
                  <a href="https://dyp.finance#press" target={'_blank'}>Press</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3>Learn</h3>
                <ul className="list-unstyled footer-group">
                  <li className="footer-item">
                    <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPmcjxnKg6SgP2B1rCtBMld" target={'_blank'}>How to buy DYP</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPAbzuedp9ii6OszPT1STy8" target={'_blank'} >How to Stake</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPKtu_gWiu7vm73k_TnZOs4" target='_blank'>How to Farm</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPJ7CX0lKPaXS_ELKCk7FnW" target={'_blank'}>How to use Buyback</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.youtube.com/watch?v=t8Yr3ZIxHJA&feature=youtu.be" target={'_blank'}>How to use the Vault</a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVNMvlnKe8ouT9Ma_UE_WBx2" target={"_blank"}>
                      How to use DYP Tools
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.youtube.com/playlist?list=PL8K0d30DJYVPmVy8aBOZratFGWKIBbthl" target={'_blank'}>How to Bridge</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h3 style={{marginLeft: 2}}>Community</h3>
                <ul className="list-inline social-list">
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://twitter.com/dypfinance"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Twitter} />
                     
                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://t.me/dypfinance"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Telegram} />

                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://discord.com/invite/dypcaws"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Discord} />

                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://www.instagram.com/dyp.finance/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Instagram} />

                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://dypfinance.medium.com/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Medium} />


                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://www.youtube.com/c/DeFiYieldProtocol/featured"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Youtube} />

                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://www.linkedin.com/company/defi-yield-protocol"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={LinkedIn} />

                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="https://github.com/dypfinance"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Github} />

                    </a>
                  </li>
                  <li className="footer-item list-inline-item">
                    <a
                      href="mailto:contact@dyp.finance"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                        <img src={Email} />

                    </a>
                  </li>
                  {/* <li className='footer-item list-inline-item'>
                                   <a href="https://twitter.com/dypfinance"  target={"_blank"} rel="noreferrer"><SocialIcons name="teams" /></a>
                              </li> */}
                </ul>
              </div>
            </div>
      
            <div className="divider mb-0"></div>
      
            <div className="row subfooter">
              <div className="col-md-8">
                <ul className="list-unstyled list-inline" id='list-wrapper'>
                  <li className="list-inline-item">
                    <a href="https://dyp.finance/" target='_blank'>Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://coinmarketcap.com/currencies/defi-yield-protocol/" target={'_blank'}>CoinMarketCap</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.coingecko.com/en/coins/defi-yield-protocol" target={'_blank'}>CoinGecko</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://dyp.finance/disclaimer" target='_blank'>Disclaimer</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 copyright">
                <p>
                  Copyright © DeFi Yield Protocol {new Date().getFullYear()}. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>

        )
    }
}