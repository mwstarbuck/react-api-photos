import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'



class Fetcher extends Component {

    componentDidMount() {
        this.props.onPhotoFetched()
        // let url = "https://jsonplaceholder.typicode.com/photos"

        // fetch(url)
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //     })
    }

    render() {
        let photos = this.props.photosList
        console.log(photos)
        let photoItems = photos.map((photo) => {
            return (
                <li><img src={photo.thumbnailUrl}></img>{photo.title}</li>
            )
        })
        return (

            <ul>{photoItems}</ul>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        photosList: state.photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPhotoFetched: () => dispatch(actionCreators.photoFetched())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Fetcher)