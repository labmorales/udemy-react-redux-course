import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {

    state = { lat: null, errorMessage: ''};

    getCoordinates() {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message })            
        )
    }

    componentDidMount(){        
        this.getCoordinates();
    }

    componentDidUpdate(){
        console.log('Componente atualizado');
    }    

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return (
            <Loading message="Please accept geo request" />   
        );        
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );        
    }
}


ReactDom.render(<App />, document.querySelector('#root'));