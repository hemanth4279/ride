"use client";
import CheckoutForm from '@/components/home/CheckoutForm';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function Payment() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');

    return (
        <div className="payment-container">
            <CheckoutForm amount={amount} />
        </div>
    );
}

export default Payment;
