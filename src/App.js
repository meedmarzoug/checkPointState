import "./App.css";
import React from "react";
import image from "./image/image.jpg";
import { render } from "@testing-library/react";

class App extends React.Component {
    state = {
        Person: {
            fullName: "Yasmine Souissi",
            bio: "I'm a futur web developper",
            profession: "Student",
            imgSrc: image,
        },
        show: false,
        interval: null,
        timer: 0,
    };
    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({ timer: this.state.timer + 1 });
            }, 1000),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    handleShowPerson = () => {
        this.setState({
            ...this.state,
            show: !this.state.show,
        });
    };

    render() {
        return (
            <>
                <div className="btn">
                    <button className="button" onClick={this.handleShowPerson}>
                        {this.state.show ? "Hide Profile" : "Show Profile"}
                    </button>
                </div>
                {this.state.show ? (
                    <section>
                        <div className="card">
                            <img
                                className="img"
                                src={this.state.Person.imgSrc}
                                alt="Yasmineimg"
                            ></img>
                            <h2 className="name">
                                {this.state.Person.fullName}{" "}
                                <span className="age">19</span>
                            </h2>
                            <h2 className="adress">Tunis</h2>
                            <p>{this.state.Person.bio}</p>

                            <p>{this.state.Person.profession}</p>
                            <div className="card-footer">
                                <div className="a1">
                                    <h4 className="nombre">800</h4>
                                    <h5 className="text"> Followers</h5>
                                </div>

                                <div className="a1">
                                    <h4 className="nombre">800</h4>
                                    <h5 className="text">Likes</h5>
                                </div>

                                <div className="a1">
                                    <h4 className="nombre">50</h4>
                                    <h5 className="text">Photos</h5>
                                </div>
                            </div>
                            <h3>{this.state.timer}</h3>
                        </div>
                    </section>
                ) : (
                    <h2 className="title">Click to show a profile</h2>
                )}
            </>
        );
    }
}

export default App;
