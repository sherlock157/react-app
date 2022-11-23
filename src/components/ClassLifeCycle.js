import React, {Component} from 'react';

class ClassLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("this text from constructor function")
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("this text from componentDidMount function");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("this text from componentDidUpDate function");
        document.title = this.state.count;
    }

    componentWillUnmount() {
        console.log("this text from componentWillUnmount function")
    }

    render() {
        const update = () => {
            this.setState({count: this.state.count + 1})
        }
        console.log("this text from render function")
        return (
            <div>
                <button type="button" onClick={update}>click!</button>

            </div>
        );
    }


}

export default ClassLifeCycle;

// render - component sahifaga chiqayotganda ishlaydi
// constructor - component yaratilayotganda ishlaydi
// componentDidMount - component render bo'lgandan so'ng ishlaydi
// componentDidUpdate - component da state yoki props o'zgarganda ishlaydi
