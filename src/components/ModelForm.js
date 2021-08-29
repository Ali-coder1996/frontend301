import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
class ModelForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.closeHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updataForm} >
                            <Form.Label>title</Form.Label>
                            <Form.Control type="text" name='strDrink' defaultValue={this.props.strDrink} />
                            <Form.Label>image</Form.Label>
                            <Form.Control type="text" name='strDrinkThumb' defaultValue={this.props.strDrinkThumb} />
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" name='idDrink' defaultValue={this.props.idDrink} />
                            <Button type='submit' variant="primary">
                                submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeHandler}>
                            Close
                        </Button>


                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModelForm
