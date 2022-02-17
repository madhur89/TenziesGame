import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import './style.css'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [diceCount, setDiceCount] = React.useState(0)
    const [tenzies, setTenzies] = React.useState(false)
    const [isActive, setIsActive] = React.useState(false)
    const [isPaused, setIsPaused] = React.useState(true)
    const [time, setTime] = React.useState(0)
    const [bestTime, setBestTime] = React.useState(JSON.parse(localStorage.getItem('time')))








    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }

    }, [dice])

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);

        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);



    React.useEffect(() => {
        tenzies && handlePauseResume()
    }, [tenzies])




    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };









    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    generateNewDie()
            }))
            setDiceCount(prev => prev + 1)
            handleStart()



        } else {
            setTenzies(false)
            setDice(allNewDice())
            handleReset()




        }
    }



    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}

        />
    ))



    return (
        <>
            <main>
                {tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same.
                    Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button
                    className="roll-dice"
                    onClick={rollDice}

                >

                    {tenzies ? "New Game" : "Roll"}
                </button>
                <h4 style={{ textAlign: "center" }} >Dice Rolled:{diceCount}<br />
                    <span>Time:{time}s</span>
                </h4>

            </main>


        </>
    )
}