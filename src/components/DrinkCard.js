import React, { Component } from 'react'
import { Col,Card,Button } from 'react-bootstrap'
class DrinkCard extends Component {
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{this.props.item.strDrink}</Card.Title>
                            <Card.Text>
                                {this.props.item.idDrink}
                            </Card.Text>
                            <Button onClick={()=>this.props.addDrink(this.props.item)} variant="primary">Add to favorite</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default DrinkCard
