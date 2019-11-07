import PlayerComponent from "./PlayerComponent";
import React from 'react'

class GameAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfPlayer1 : "",
            nameOfPlayer2 : "",

            numberOfPlays1 : 1,
            numberOfPlays2 : 0,

            isPlaying1: true,
            isPlaying2: false
        };
        this.onChangeFirstPlayer = this.onChangeFirstPlayer.bind(this);
        this.onChangeSecondPlayer = this.onChangeSecondPlayer.bind(this);
        this.onClickButton1 = this.onClickButton1.bind(this);
        this.onClickButton2 = this.onClickButton2.bind(this);
    }
    render() {
        return (
            <div>
                <PlayerComponent
                    numberOfPlayer={"One"}
                    nameOfPlayer={this.state.nameOfPlayer1}
                    numberOfPlays={this.state.numberOfPlays1}
                    isPlaying = {this.state.isPlaying1}
                    onClickButton = {this.onClickButton1} />
                <PlayerComponent
                    numberOfPlayer={"Two"}
                    nameOfPlayer={this.state.nameOfPlayer2}
                    numberOfPlays={this.state.numberOfPlays2}
                    isPlaying = {this.state.isPlaying2}
                    onClickButton = {this.onClickButton2} />
                <div> Set name of player One:
                    <input onChange={this.onChangeFirstPlayer} style={{borderStyle: 'solid', borderWidth: 1, margin: 3}}/>
                </div>
                <div> Set name of player Two:
                    <input onChange={this.onChangeSecondPlayer} style={{borderStyle: 'solid', borderWidth: 1, margin: 3}}/>
                </div>
            </div>
        );
    }

    onChangeFirstPlayer(event) {
        this.setState({ nameOfPlayer1: event.target.value});
    }

    onChangeSecondPlayer(event) {
        this.setState({ nameOfPlayer2: event.target.value});
    }

    onClickButton1() {
        const num1 = this.state.numberOfPlays1;
        if (this.state.isPlaying2) {
            this.setState({ isPlaying1 : true, isPlaying2 : false, numberOfPlays1 : num1 + 1 });
        }
    }

    onClickButton2() {
        const num2 = this.state.numberOfPlays2;
        if (this.state.isPlaying1) {
            this.setState({ isPlaying2 : true, isPlaying1 : false, numberOfPlays2 : num2 + 1 });
        }
    }
}

export default GameAdmin;