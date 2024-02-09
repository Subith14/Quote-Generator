import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/common.css'

function Main() {

    const [quote,setQuote]=useState([])
    const [result,setResult]=useState()
      
    const url = `https://dummyjson.com/quotes`

    useEffect(()=>{
      axios.get(url).then((res)=>{
        console.log(res.data.quotes);
        setQuote(res?.data.quotes)
      })
    },[])


    const quoteGenerator =()=>{
      setResult(quote[[Math.floor(Math.random() * 30)]])
      console.log(quote);
    }










  return (
    <>
    <section>
    <div className="quote">
    <h1>QUOTE-GENERATOR</h1>
        <h2> <span style={{color:'yellow'}}>"</span>{result?.quote}<span style={{color:'yellow'}}>"</span> </h2>
        <p>-{result?.author}</p>
        <button onClick={quoteGenerator} className='btn btn-outline-warning mt-5'>Quote For You</button>
    </div>
    </section>
    </>
  )
}

export default Main