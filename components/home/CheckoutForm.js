import React from 'react';

function CheckoutForm({ amount }) {
    const handlePayment = () => {
        alert("Button clicked!"); // Confirm button click
        console.log("Amount:", amount);

        const upiID = '6304364762@ybl';
        const name = 'Hemanth';
        const transactionID = Date.now(); // Unique transaction ID
        const currency = 'INR'; // Currency code

        const upiLink = `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&tid=${transactionID}&cu=${currency}`;
        console.log("UPI Link:", upiLink);

        // Redirect to UPI payment app
        window.location.href = upiLink;
    };

    return (
        <div className='flex flex-col justify-center items-center w-full mt-6'>
            <h2 className='m-5 font-bold'>Amount to pay: {amount}</h2>
            <button onClick={handlePayment} className='w-full bg-black text-white p-2 rounded-lg mt-2'>
                Pay with UPI
            </button>
        </div>
    );
}

export default CheckoutForm;
