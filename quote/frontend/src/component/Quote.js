import {useEffect, useState } from 'react';
import './app.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
const Quote = () => {

    const [quote,setQuote]=useState()
    const [err,setErr]=useState(false)
    const [btn,setBtn]=useState(true)

    const findQuote=()=>{
      setQuote()
        setErr(false)
        setBtn(false)
        axios.get('http://localhost:5000/api/routes/quote')
        .then((response) => {
          setBtn(true)
          setErr(false)
          console.log(response.data);
          setQuote(response.data)
        })
        .catch((error) => {
          setErr(true)
          setBtn(false)
          console.error(error);
        });


    } 

    useEffect(()=>{
        findQuote()
    },[])
  return (
    <div className='quote'>
    <Card style={{margin:"3% 4% 4% 4%"}}>
      <Card.Header style={{color:"black"}}>Quote</Card.Header>
      {quote&&
      <Card.Body style={{height:"350px"}}>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}-{quote.quote}-
            {' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title">{quote.author}</cite>
          </footer>
        </blockquote>
    
      </Card.Body>
      }
      {err&&
    
      <Card.Body style={{height:"350px"}}>
        <blockquote className="blockquote mb-0">
          <p>
              server not responding
          </p>

        </blockquote>
    
      </Card.Body>}
      
      
      {btn&&
      <Button className='btn' onClick={findQuote}>
        Generate Quote
      </Button>}

    </Card>
    </div>
  )
}

export default Quote