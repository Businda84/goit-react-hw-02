
export default function feedback({ value, totalFeedback, positiveFeedback }){
 return(  <div>
    <p>
      <b>Good:</b> {value["good"]}
    </p>
    <p>
      <b>Neutral:</b> {value["neutral"]}
    </p>
    <p>
      <b>Bad:</b> {value["bad"]}
    </p>

    <p>
      <b>Total:</b> {totalFeedback}
    </p>
   <p>
     
      <b>Positive:</b> {positiveFeedback()}%
     
      
    </p>
  </div>
)
 
}

  
  
