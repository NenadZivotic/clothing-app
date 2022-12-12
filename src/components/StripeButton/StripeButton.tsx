import React from "react";

import StripeCheckout from "react-stripe-checkout";

interface IProps {
  price: number;
}

const StripeButton: React.FC<IProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MCSIyLvZnQYNatBKc4vJhcg9TfYInYZkkBxUzAZtzGX0fv0bXN8aWg842nI9VYSPvXAq3Hz26aV0cVNA9aSouCa00YjQhw7Xg";

  const onToken = () => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
