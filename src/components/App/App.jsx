import { useState,useEffect } from 'react'

import Feedback from '../Feedback/Feedback'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  
  
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem("count");
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  })

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };
  const positiveFeedback = () => {
    return(Math.round( count.good/totalFeedback*100) )
    

}

  
  
 const resetFeedback = () => {
   setCount({good: 0,
        neutral: 0,
          bad: 0})
 }
  
   useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const totalFeedback = count.good + count.neutral + count.bad;
  

  return (
    <div>
    <h1>Sip Happens Café</h1>
 
      <p>
Please leave your feedback about our service by selecting one of the options below.
      </p>
      <div />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {
        totalFeedback > 0 &&
        <Feedback
        value={count}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
     
       
      />
      }
      <Notification/>
      
      
      
  </div>

    

  )

}
export default App
