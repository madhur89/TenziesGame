import React from "react"



export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
      
    }

let source = "";

if(props.value === 1){
    source = 'https://cdn-icons.flaticon.com/png/512/3517/premium/3517395.png?token=exp=1645095664~hmac=9848c169749dae634ff44b731d9a1191'
}else if(props.value === 2 ){
    source = "https://cdn-icons.flaticon.com/png/512/3517/premium/3517400.png?token=exp=1645095664~hmac=781c05e0d209a1e5d406042f90be2d25"
} else if(props.value === 3){
    source = "https://cdn-icons.flaticon.com/png/512/3517/premium/3517408.png?token=exp=1645095664~hmac=5abb29d9fb7eecaf10108dfb7f363507"
} else if(props.value === 4) {
    source = "https://cdn-icons.flaticon.com/png/512/3517/premium/3517414.png?token=exp=1645095664~hmac=5ac9453cf6f13fd65993dba77fc9bc78"
} else if(props.value === 5){
    source = "https://cdn-icons.flaticon.com/png/512/3517/premium/3517420.png?token=exp=1645095664~hmac=73868d033843d9f3a8365665612ce9cb"
} else {
    source = "https://cdn-icons.flaticon.com/png/512/3517/premium/3517427.png?token=exp=1645095664~hmac=dde090d9a882481b3d870bcdf5d90c8a"
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