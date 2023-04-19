const  router = require('express').Router();
const quote=require('./model')
let quoteIndex = 0;
let quotes = [];

async function getNextQuote() {
  if (quoteIndex === 0) {
    // If we've reached the end of the quotes array, fetch a new set of quotes
    try {
      quotes = await quote.find();
    } catch (err) {
      console.error(err.message);
      throw new Error('Unable to fetch quotes');
    }
  }

  else if(quoteIndex>=quotes.length){// if quote index reached till maximum index value then start form 0
    quoteIndex=0
  }
  const currentQuote = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
   // Increment index and wrap around to 0 when we reach the end
  return currentQuote;
}

router.get("/quote",async(req,res)=>{
    //write here logic to send data
    const quot=await getNextQuote() 
    console.log(quot)
    res.send(quot)
})

module.exports=router