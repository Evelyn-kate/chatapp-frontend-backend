import { Component } from 'React'
import './App.scss';
import './index.js';
import chat from "./MessageComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <chat />
            </div>
        );
    }

}

export default App;