export default function validateInfo(values) {
  let errors = {};
  if(!values.email){
    errors.email = "Email Required"
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = "Email Address is Invalid"
}
  if (!values.project_name.trim()) {
    errors.project_name = "Project name is Required";
  }

  if (!values.logoimg.trim()) {
    errors.logoimg = "Link to download 512x512 png logo image is Required";
  }

  if (!values.nft_number.trim()) {
    errors.nft_number = "Nft number is Required";
  }
  if (!values.ticker.trim()) {
    errors.ticker = "Ticker is Required";
  }

  if (!values.contract_address.trim()) {
    errors.contract_address = "Contract address is Required";
  }
  if (!values.about.trim()) {
    errors.about = "About info is Required";
  }

  if (!values.audit_info.trim()) {
    errors.audit_info = "Audit info is Required";
  }
  if (!values.audit_link.trim()) {
    errors.audit_link = "Audit link is Required";
  }

  if (!values.website_link.trim()) {
    errors.website_link = "Website link is Required";
  }
  if (!values.twitter.trim()) {
    errors.twitter = "Twitter link is Required";
  }
  if (!values.coinmarket.trim()) {
    errors.coinmarket = "Coinmarket link is Required";
  }
  if (!values.telegram.trim()) {
    errors.telegram = "Telegram link is Required";
  }

  if (!values.coingecko.trim()) {
    errors.coingecko = "Coingecko link is Required";
  }

  return errors;
}
