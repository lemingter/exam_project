import React, { Component } from 'react';
import './Exam.css';
import Piedra from './Piedra.jpg';
import Papel from './papel.jpg';
import Tijeras from './tijeras.jpg';

class Exam extends Component {
    constructor() {
        super();

        this.state = {
            playerChoice: 0,
            wins: 0,
            loses: 0,
            machineChoice: 0,
            finalBeredict: '',
        };
    }

    playing = e => {
        const num = e.target.value;
        this.setState({
            machineChoice: Math.floor(Math.random() * (3)),
            playerChoice: num,
        })

        const { machineChoice } = this.state;
        console.log(this.state.playerChoice);
        console.log(machineChoice);
        switch (num) {
            case 0:
                if(machineChoice === 0) {
                    this.setState({
                        wins: this.state.wins + 1,
                        loses: this.state.loses + 1,
                    })
                    
                    document.getElementById("machineChoice").src=Piedra;
                }
                else if(machineChoice === 1) {
                    this.setState({
                        loses: this.state.loses + 1,
                    })
                    document.getElementById("machineChoice").src=Papel;
                }
                else if(machineChoice === 2) {
                    this.setState({
                        wins: this.state.wins + 1,
                    })
                    document.getElementById("machineChoice").src=Tijeras;
                }
                document.getElementById("playerChoice").src=Piedra;
                break;

            case 1:
                if(machineChoice === 0) {
                    this.setState({
                        wins: this.state.wins + 1,
                    })
                    document.getElementById("machineChoice").src=Piedra;
                }
                else if(machineChoice === 1) {
                    this.setState({
                        wins: this.state.wins + 1,
                        loses: this.state.loses + 1,
                    })
                    document.getElementById("machineChoice").src=Papel;
                }
                else if(machineChoice === 2) {
                    this.setState({
                        loses: this.state.loses + 1,
                    })
                    document.getElementById("machineChoice").src=Tijeras;
                }
                document.getElementById("playerChoice").src=Papel;
                break;

            case 2:
                if(machineChoice === 0) {
                    this.setState({
                        loses: this.state.loses + 1,
                    })
                    document.getElementById("machineChoice").src=Piedra;
                }
                else if(machineChoice === 1) {
                    this.setState({
                        wins: this.state.wins + 1,
                    })
                    document.getElementById("machineChoice").src=Papel;
                }
                else if(machineChoice === 2) {
                    this.setState({
                        wins: this.state.wins + 1,
                        loses: this.state.loses + 1,
                    })
                    document.getElementById("machineChoice").src=Tijeras;
                }
                document.getElementById("playerChoice").src=Tijeras;
                break;

            default:
                break;
        }

        if(this.state.wins >= 2 || this.state.loses >= 2) {
            if(this.state.wins > this.state.loses)
                this.setState({
                    finalBeredict: "Ganaste",
                })
            else if(this.state.wins < this.state.loses)
                this.setState({
                    finalBeredict: "Perdiste",
                })
            else if(this.state.wins === 3 && this.state.loses === 3)
                this.setState({
                    finalBeredict: "Empate"
                })
            }
    }

    render() {
        return (
            <div>
                <p>
                    <button value={0} onClick={this.playing}><img alt = "piedra" src={Piedra} /></button>
                    <button value={1} onClick={this.playing}><img alt = "Papel" src={Papel} /></button>
                    <button value={2} onClick={this.playing}><img alt = "Tijera" src={Tijeras} /></button>
                </p>
                <p>
                    <img alt = "PlayerChoice" id="playerChoice" src={Piedra} />
                    <h2> VS </h2>
                    <img alt = "PlayerChoice" id="machineChoice" src={Piedra} />
                </p>
                <p>Marcador:</p>
                <p>{this.state.wins} - {this.state.loses}</p>
                <h1>{this.state.finalBeredict}</h1>
            </div>
        );
    }
}

export default Exam;