import {FaStar} from "react-icons/fa";
import React from 'react';

const colors = {
  orange: "#FFBA5A",
  grey: "a9a9a9"
}

function App() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  
  const handleClick = value =>{
    setCurrentValue(value)
  };

   return (
    <div style={styles.container}>
      <h2>Wingrow Ratings</h2>
      <div style={styles.stars}>
        {stars.map((_, index)=>{
          return(
            <FaStar
               key={index}
               size = {24}
               style = {{
                marginRight: 10,
                cursor: "pointer"
               }}
               color={(currentValue)>index ? colors.orange:colors.grey}
               onClick = {()=> handleClick(index + 1)}
               />
          )
        })}

      </div>
      <textarea placeholder="What's Your Feedback"
      style = {styles.textarea}/>

      <button style={styles.button}>Submit</button>
      
    </div>
  );
}

const styles = {
  container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea:{
    border : "1px solid #a9a9a9",
    borderRadius : 5,
    width : 300,
    margin : "20px 0",
    minHeight:100,
    padding: 10
  },
  button:{
    border : "1px solid #a9a9a9",
    borderRadius : 5,
    width : 300,
    padding: 10
  }
}

export default App;
