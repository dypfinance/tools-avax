import React, { useState } from "react";
import validateInfo from "./validateinfo";

const SubmitInfo = () => {
  const initialState = {
    project_name: "",
    nft_number: "",
    ticker: "",
    contract_address: "",
    about: "",
    audit_info: "",
    audit_link: "",
    website_link: "",
    twitter: "",
    coinmarket: "",
    telegram: "",
    coingecko: "",
  };

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) =>
  {
      e.preventDefault();

      setErrors(validateInfo(values));

  };

  return (
    <div>
      <div className="row px-3 table-title">
        <div>
          <h2 style={{ display: "block",  color: 'var(--preloader-clr)' }}>Submit form</h2>
          <p className="d-block">
            Search for new pools, add or remove liquidity in a pair
          </p>
        </div>
      </div>
      <div className="px-3 table-title" style={{ paddingBottom: "6rem" }}>
        <form>
          <div>
            <h5>Your details</h5>
            <div className="row mt-3 mb-4">
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">Project name</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="project_name"
                    id="project_name"
                    value={values.project_name}
                    onChange={handleChange}
                    placeholder="Project name"
                  />
                  {errors.project_name && (
                    <span className="errormessage">{errors.project_name}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <span className="required-text">Nr. of NFT to created</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="nft_number"
                    id="nft_number"
                    value={values.nft_number}
                    onChange={handleChange}
                    placeholder="Nft number"
                  />
                  {errors.nft_number && (
                    <span className="errormessage">{errors.nft_number}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">Ticker symbol</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="ticker"
                    id="ticker"
                    value={values.ticker}
                    onChange={handleChange}
                    placeholder="Ticker"
                  />
                  {errors.ticker && (
                    <span className="errormessage">{errors.ticker}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <span className="required-text">
                    Uniswap pair contract list
                  </span>
                  <input
                    type="text"
                    className="inputfield"
                    name="contract_address"
                    id="contract_address"
                    value={values.contract_address}
                    onChange={handleChange}
                    placeholder="Contract address"
                  />
                  {errors.contract_address && (
                    <span className="errormessage">
                      {errors.contract_address}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-wrapper">
                  <span className="required-text">About the project</span>
                  <textarea
                    className="form-control"
                    id="inputAddress"
                    name="message"
                    rows="5"
                    cols="2"
                    onChange={handleChange}
                    value={values.about}
                  />
                  {errors.about && (
                    <span className="errormessage">{errors.about}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5>Smart contract details</h5>
            <div className="row mt-3 mb-4">
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">
                    Smart contract audit info
                  </span>
                  <input
                    type="text"
                    className="inputfield"
                    name="audit_info"
                    id="audit_info"
                    value={values.audit_info}
                    onChange={handleChange}
                    placeholder="Audit info"
                  />
                  {errors.audit_info && (
                    <span className="errormessage">{errors.audit_info}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">
                    Smart contract audit link
                  </span>
                  <input
                    type="text"
                    className="inputfield"
                    name="audit_link"
                    id="audit_link"
                    value={values.audit_link}
                    onChange={handleChange}
                    placeholder="Audit link"
                  />
                  {errors.audit_link && (
                    <span className="errormessage">{errors.audit_link}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5>Additional links</h5>
            <div className="row mt-3 mb-4">
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">Website link</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="website_link"
                    id="website_link"
                    value={values.website_link}
                    onChange={handleChange}
                    placeholder="Website link"
                  />
                  {errors.website_link && (
                    <span className="errormessage">{errors.website_link}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <span className="required-text">Twitter link</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="twitter"
                    id="twitter"
                    value={values.twitter}
                    onChange={handleChange}
                    placeholder="Twitter link"
                  />
                  {errors.twitter && (
                    <span className="errormessage">{errors.twitter}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">Coinmarket link</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="coinmarket"
                    id="coinmarket"
                    value={values.coinmarket}
                    onChange={handleChange}
                    placeholder="Coinmarket link"
                  />
                  {errors.coinmarket && (
                    <span className="errormessage">{errors.coinmarket}</span>
                  )}
                </div>
                <div className="input-wrapper">
                  <span className="required-text">Telegram link</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="telegram"
                    id="telegram"
                    value={values.telegram}
                    onChange={handleChange}
                    placeholder="Telegram link"
                  />
                  {errors.telegram && (
                    <span className="errormessage">{errors.telegram}</span>
                  )}
                </div>
              </div>
              <div className="col-lg-4 single-cell">
                <div className="input-wrapper">
                  <span className="required-text">Coingecko link</span>
                  <input
                    type="text"
                    className="inputfield"
                    name="coingecko"
                    id="coingecko"
                    value={values.coingecko}
                    onChange={handleChange}
                    placeholder="Coingecko link"
                  />
                  {errors.coingecko && (
                    <span className="errormessage">{errors.coingecko}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 buttons-wrapper">
            <div className="col-lg-4 single-cell">
              <div className="submitbtn" onClick={handleSubmit}>
                <span className="submit-text">Submit</span>
              </div>
            </div>
            <div className="col-lg-4 single-cell">
              <div className="clearbtn" onClick={()=>{setValues({ ...initialState });}}>
                <span className="clear-text">Clear form</span>
              </div>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

export default SubmitInfo;
