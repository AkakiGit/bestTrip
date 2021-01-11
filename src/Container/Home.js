import React from 'react';

const ShowTour = (props) => {
    const imgStyle = {
        width: "269px",
        height: "181px"
    }
    console.log(props)
    return <div className="post-box">
        <img style={imgStyle} src={props.img} alt="trip" />
        <h1 className="box-title">{props.title}</h1>
        <p className="box-text">{props.text}</p>
    </div>
}

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: props.tours
        }
    }

    render() {
        const showTours = this.state.tours.map((tour, index) => (
            <ShowTour key={index} title={tour.title} text={tour.text} img={tour.imgUrl} />
        ))

        return <div className="Home">
            { showTours }
        </div>
    }
}