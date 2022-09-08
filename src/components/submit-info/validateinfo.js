export default function validateInfo(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email Address is Invalid";
  }
  if (!values.project_name.trim()) {
    errors.project_name = "This field is required";
  }

  if (!values.logo_link.trim()) {
    errors.logo_link = "This field is required";
  }

  if (!values.ticker.trim()) {
    errors.ticker = "This field is required";
  }

  if (!values.contract_address.trim()) {
    errors.contract_address = "This field is required";
  }
  if (!values.about.trim()) {
    errors.about = "This field is required";
  }

  if (!values.audit_info.trim()) {
    errors.audit_info = "This field is required";
  }
  if (!values.audit_link.trim()) {
    errors.audit_link = "This field is required";
  }

  if (!values.website_link.trim()) {
    errors.website_link = "This field is required";
  }
  if (!values.twitter.trim()) {
    errors.twitter = "This field is required";
  }
  if (!values.coinmarket.trim()) {
    errors.coinmarket = "This field is required";
  }
  if (!values.telegram.trim()) {
    errors.telegram = "This field is required";
  }

  if (!values.coingecko.trim()) {
    errors.coingecko = "This field is required";
  }

  return errors;
}
