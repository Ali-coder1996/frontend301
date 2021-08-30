import axios from 'axios'
import React, { Component } from 'react'
import DrinkCard from './DrinkCard'
import { Row } from 'react-bootstrap'
class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drinkData: [],
            show: false
        }
    }

    componentDidMount = () => {
        let getUrl = 'https://test301exam.herokuapp.com/getDrink'
        axios.get(getUrl).then(itm => {
            this.setState({
                drinkData: itm.data,
                show: true
            })
        })
    }
    addDrink=(data)=>{
        axios.post('https://test301exam.herokuapp.com/addDrink',data)
    }
    
    render() {
        return (
            <>
                <Row style={{gap:'40px'}}>
                    {
                        this.state.show &&
                        this.state.drinkData.map((item, idx) => {
                            return (
                                <DrinkCard key={idx} item={item} addDrink={this.addDrink}/>
                            )
                        })
                    }
                </Row>
            </>
        )
    }
}

export default Main
