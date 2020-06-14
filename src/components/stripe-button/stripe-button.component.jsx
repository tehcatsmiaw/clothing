import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51GtzLyIdYfYLaFY1M3MgIlJWI6smLhwcVeAAjHgAqFmqiRHuJl9ANms6qU2iUkp37oXT2f7595CbX5pnhs6JtXT600Sd9H8Zh9";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Completed");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN"
			billingAddress
			shippingAddress
			image="https://svgur.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
