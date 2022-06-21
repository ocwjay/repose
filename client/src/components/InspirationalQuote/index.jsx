import React, { useState, useEffect } from 'react';
import './InspirationalQuote.css';
import axios from 'axios';

function InspirationalQuote() {
    const [quote, setQuote] = useState({});

    const randomQuoteId = (max) => {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/quotes/${randomQuoteId(47)}`)
            .then((res) => {
                console.log(res.data);
                setQuote(res.data);
            })
            .catch((err) => {
                console.log('ERROR', err);
            });
    }, []);

    return(
        <div className='mainWidgets quoteBox'>
            <p className='quote'>{ quote.quote } | { quote.source }</p>
        </div>
    );
};

export default InspirationalQuote;

//Quotes copied from https://inspirational-quotes-api.herokuapp.com/quotes/
//Will eventually use a bigger and better api, but this guy had his free and easy to use, so credit is due