import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    //stripe processes money in paise
    const publishableKey = 'pk_test_51L4MWMSAxFe77OU1fa8Dlmr25NJAyrCP2RCBcNU898I3ZZte61kBBFHnq3oUTclXVmFBKYaKVX3oTrSbD0EdqrhS003YjNqqNZ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='GamerStop Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/hpW.svg'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            currency='INR'
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;