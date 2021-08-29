import axios from 'axios'
import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
import { Row } from 'react-bootstrap'
import ModelForm from './ModelForm'
class Favorite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            FavoriteData: [],
            show: false,
            strDrink: '',
            strDrinkThumb: '',
            idDrink: '',
            index:0
        }
    }

    componentDidMount = () => {
        let url = 'http://localhost:8000/getData'
        axios.get(url).then(item => {
            this.setState({
                FavoriteData: item.data,
                show: true,
                showModel:false
            })
        })
    }
    delete = (index) => {
        const id = this.state.FavoriteData[index]._id
        axios.delete(`http://localhost:8000/deleteDrink/${id}`).then(item => {
            this.setState({
                FavoriteData: item.data,
                
            })
        })
    }

    showModel = (index) => {
        this.setState({
            strDrink:this.state.FavoriteData[index].strDrink ,
            strDrinkThumb: this.state.FavoriteData[index].strDrinkThumb,
            idDrink:this.state.FavoriteData[index].idDrink, 
            showModel:true,
            index:index
        })
    }
    closeHandler=()=>{
        this.setState({
            showModel:false
        })
    }
    updataForm=(e)=>{
        e.preventDefault();
        const id = this.state.FavoriteData[this.state.index]._id
        let data ={
            strDrink:e.target.strDrink.value ,
            strDrinkThumb: e.target.strDrinkThumb.value,
            idDrink:e.target.idDrink.value, 
        }
        console.log(data)
        axios.put(`http://localhost:8000/updataDrink/${id}`,data).then(item => {
            this.setState({
                FavoriteData: item.data,
                
            })
        })
    }

    render() {
        return (
            <>
                <Row>
                    {
                        this.state.show &&
                        this.state.FavoriteData.map((item, idx) => {
                            return (
                                <FavoriteCard item={item} idx={idx} showModel={this.showModel} delete={this.delete} />
                            )
                        })
                    }
                    <ModelForm strDrink={this.state.strDrink}
                    strDrinkThumb={this.state.strDrinkThumb}
                    idDrink={this.state.idDrink}
                    showModel={this.state.showModel}
                    closeHandler={this.closeHandler}
                    updataForm={this.updataForm}
                    />
                </Row>
            </>
        )
    }
}

export default Favorite
