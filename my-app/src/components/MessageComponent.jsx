import React from 'react';
import io from 'socket.io-client';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';
//import AuthService from "../../src/services/auth.service.js";
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

import { apiSendMessage, apiExchangedMessage, apiGetUsersWithoutAdmin, apiGetAdminUser, BASE_URL } from '../api/index';

class MessageComponent extends React.Component {

    constructor(props) {
        super(props);

        this.message = '';
        this.state = {
            idUsers: '',
            item: '',
            items:[],
            messages: [],
            receiverId: 0,
            searchInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
       
        this.socket = io(BASE_URL, { transports: ['websocket'] });

        this.socket.on('MESSAGE_RECEIVED', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };
      
        this.sendMessage = ev => {
            ev.preventDefault();
        
            const receiver = this.state.receiverId;
            const sender = this.props.profile.id;
            const message = this.message;

            if(!message)
                return;

            apiSendMessage(sender, receiver, message)
                .then((res) => {
                    console.log(res.data);
                }, (error) => {
                    console.log(error);
                });
            
            ev.target.reset();
        }
    };

    _loadExchangedMessages(userId){
        console.log(userId);
        if(!userId)
            return false;

        this.setState({receiverId: userId});

        // retrieve all previous messages exchanged between the current user and the provided userId
        apiExchangedMessage(this.props.profile.id, userId)
            .then(res => {
                console.log("response", res.data);
                this.setState({ messages: res.data.messages });
            });
    }

    handleChange(message) {
        this.message = message;
    }

    updateInput = searchString => {
        console.log(searchString);

        if(!searchString && !this.state.messages)
            return;

        const filtered = this.state.messages.filter(message => {
            console.log(message);
            return message.message.toLowerCase().includes(searchString.toLowerCase());
        });

        this.setState({messages: filtered});
    }

    componentDidMount() {

        if (this.props.profile.roles.includes("ROLE_ADMIN")){
            apiGetUsersWithoutAdmin()
             .then(res => {
                console.log("response",res.data);
                this.setState({ items: res.data.users });
            });

        }else {
            apiGetAdminUser()
             .then(res => {
                console.log("response",res.data);
                this.setState({ items: res.data.users });
            });
        }

    }

    isMessageSentByMe(message){
        if(!message)
            return false;

        if(message.idUsers === this.props.profile.id)
            return true;

        return false;
    }

    render() {
        console.log("entering render function");
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- The sidebar --> */}
                        <div className="col-md-2 col-lg-2 col-sm-2">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <br/>
                        <div className="col-sm-10 col-md-10 col-lg-10 pl-2 contenu">

                            {/*navbar component*/}
                            <NavComponent history={this.props.history} />

                            <div className="d-flex flex-column custom-container" style={{margin:"0", padding:"0"}}>
                                <div className="flex-content">
                                    <div className="head-messages">
                                    <br/>
                                        <div>
                                            <SearchBar keyword={this.searchInput} setKeyword={this.updateInput} />
                                        </div>
                                        
                                    </div>

                                    <div className="flex-column main-messages" style={{height: "fit-content", display: "flex", flexdirection: "column"}}>
                                        <div className="card" style={{display: "flex", flexshrink: "0", backgroundcolor: "#ddd"}}>
                                            <div className="card-header">
                                                <select name="user" id="user" onChange={e => this._loadExchangedMessages(e.target.value)}>
                                                    <option value="">Choose User</option>
                                                    {this.state.items && this.state.items.map((item) => {
                                                        return (
                                                            <option key={item.idUsers} value={item.idUsers}>{item.name}</option>
                                                        );
                                                    })}
                                                </select>

                                            </div>
                                        </div>

                                        <div className="messages">
                                            {this.state.messages && this.state.messages.map(message => {
                                                return (
                                                    <div className="content">
                                                        <div className={this.isMessageSentByMe(message) ? 'msgright' : 'msgleft'}
                                                            key={message.id}>
                                                            <div>{message.message}</div>
                                                            <div>{new Date(message.createdAt).toLocaleDateString("en-US", {hour: '2-digit', minute: '2-digit', second: '2-digit'})}</div> 
                                                        </div>
                                                    </div>
                                            
                                                );
                                            })}
                                        </div>

                                        <div className="card" style={{display: "webkit-flex", flexshrink: "2", backgroundcolor: "blue"}}>
                                            <form onSubmit={this.sendMessage} className="card-footer text muted" >
                                                <div className="flex">
                                                    <div className="d-flex align-items-center pr-2">
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <input type="text" placeholder="Text Message" autoComplete="off" className="form-control h-100" onChange={ev => this.handleChange(ev.target.value)} />
                                                    </div>
                                                    <button className="custom-send" type="submit">Send</button>
                                                </div>
                                            </form>
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

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}
export default connect(mapStateToProps)(MessageComponent);