import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
      
    }

let source;

if(props.value === 1){
    source = "./DieImg/1nos.png"
}else if(props.value === 2 ){
    source = "./DieImg/2nos.png"
} else if(props.value === 3){
    source = "./DieImg/3nos.png"
} else if(props.value === 4) {
    source = "./DieImg/4nos.png"
} else if(props.value === 5){
    source = "./DieImg/5nos.png"
} else {
    source = "./DieImg/6nos.png"
}
    
    
    
    return (
        <>
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}      
        >
            <h2 className="die-num"><img src={source} width="40px" height="40px"/></h2>
        </div>
        
        

        </>
    )
}