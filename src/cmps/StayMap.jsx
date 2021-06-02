import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
// import '../assets/css/pages/about-page.css'
class _GoogleMap extends Component {

    state = {
        pos: {
            lat:null,
            lng: null
        }
    }

     componentDidMount(){
        const pos = this.props.location
        console.log(process.env)
        this.setState({ pos })
    }

    render() {

        return (
                <div className="map">
                    <Map
                        google={this.props.google}
                        zoom={10}
                         center={this.state.pos}
                        // style={{
                        //     maxWidth: '550px',
                        //     height: '450px',
                        //     margin:'0 auto'
                        //    }}
                           containerStyle={{
                            maxWidth: '1280px',
                            height: '450px',
                            margin:'0 auto',
                           }}
                    >
                        <Marker
                            position={this.state.pos}
                            name={'branch location'} />
                    </Map>
                </div>
        )
    }
}

export const StayMap = GoogleApiWrapper({
    apiKey: (`AIzaSyBnQ0ebntiaqnKC_liI8ybwWzqTD68V02w`)
})(_GoogleMap)