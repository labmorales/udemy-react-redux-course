import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {span: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = (e) => {
        console.log(this.imageRef.current.clientHeight);
        const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
        this.setState({spans});
    }

    render() {
        const {alt_description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={alt_description} src={urls.small}  />
            </div>
        );
    }
}

export default ImageCard;