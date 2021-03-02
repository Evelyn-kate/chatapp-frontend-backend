import React from 'react';
import io from 'socket.io-client';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';
import axios from 'axios';

class MessageComponent extends React.Component {
    // logout() {
    //     this.props.history.push('/logout');
    // }
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
        this.socket = io('http://localhost:5000', { transports: ['websocket'] });

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };


        this.sendMessage = ev => {
            ev.preventDefault();

            const username = {
                name: this.state.username
            };
            const message = {
                name: this.state.message
            };

            axios.post('/messages', {
                username, message
            })
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
            //     this.socket.emit('SEND_MESSAGE', {
            //         author: this.state.username,
            //         message: this.state.message
            //     })
            //     this.setState({ message: '' });
        }
    }

    render() {
        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- The sidebar --> */}
                        <div className="col-3">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-9 pr-0">

                            {/*navbar component*/}

                            <NavComponent history={this.props.history} />

                            <div className="container">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <h3> Messages</h3>
                                        <hr />
                                    </div>

                                    <div className="panel-body">

                                        <div className="row">
                                            <div className="input-group">
                                                <input type="text" placeholder="Search.." className="form-control col-3" />
                                                <div className="input-group-btn col-2">
                                                    <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.location.href = 'http://google.com'; }}>
                                                        <i className="fa fa-search" style={{ color: "whitesmoke" }}></i> Search</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/*                                                 
                                                
                                            <div className="container1">
                                                <img src="../User.jpg" alt="Avatar"/>
                                                    <p>Hello. How are you today?</p>
                                                    <span className="time-right">11:00</span>
                                            </div>

                                            <div className="container1 darker">
                                                <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                                                    <p>Hey! I'm fine. Thanks for asking!</p>
                                                    <span className="time-left">11:01</span>
                                            </div>

                                            <div className="container1">
                                                <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                                                    <p>Sweet! So, what do you wanna do today?</p>
                                                    <span className="time-right">11:02</span>
                                            </div>

                                            <div className="container1 darker">
                                                <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                                                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                                                    <span className="time-left">11:05</span>
                                            </div> */}





                                        {/* <div>
                                                <form action="." onSubmit={e => {
                                                    e.preventDefault()
                                                    this.props.onSubmitMessage(this.state.message)
                                                    this.setState({ message: '' })
                                                }}
                                                >
                                                    <input type="text" placeholder={'Enter message...'} value={this.state.message}
                                                        onChange={e => this.setState({ message: e.target.value })}
                                                    />
                                                    <input type="submit" value={'Send'} />
                                                    <div className="publisher-btn" data-abc="true"><i className="fa fa-paper-plane"></i> <div className="publisher-btn text-info" data-abc="true"></div> </div>

                                                </form>
                                            </div> */}
                                        {/* making the send message properties to function*/}
                                        <div className="messages">
                                            {this.state.messages.map(message => {
                                                return (
                                                    <div>{message.author}: {message.message}</div>
                                                )
                                            })}
                                        </div>

                                        <div className="card" style={{ width: "55rem", position: "relative", }} >
                                            <div className="card-body">
                                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                                                <br />
                                                <input type="text" placeholder="Text Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                                                <br />
                                                <div className="publisher-btn" data-abc="true"><i className="fa fa-meh-o"></i> <div className="publisher-btn text-info" data-abc="true"></div> </div>
                                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MessageComponent;