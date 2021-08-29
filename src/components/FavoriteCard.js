import React, { Component } from 'react'
import { Col,Card,Button } from 'react-bootstrap'
class FavoriteCard extends Component {
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
                            <Button onClick={()=>this.props.delete(this.props.idx)} variant="primary">delete</Button>
                            <Button onClick={()=>this.props.showModel(this.props.idx)} variant="primary">updata</Button>
                        </Card.Body>
                    </Card>
                </Col> 
            </>
        )
    }
}

export default FavoriteCard
