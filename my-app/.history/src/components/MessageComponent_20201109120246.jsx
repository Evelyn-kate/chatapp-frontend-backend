import React from 'react';
import PropTypes from 'prop-types';

import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class MessageComponent extends React.Component {
    // logout() {
    //     this.props.history.push('/logout');
    // }
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state = {
        message: '',
    }


    render() {
        return (
            <div>

                <div class="container-fluid">
                    <div class="row">
                        {/* <!-- The sidebar --> */}
                        <div class="col-3">
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
                                                    <button type="submit" className="btn btn-primary" type="button" onClick={(e) => { e.preventDefault(); window.location.href = 'http://google.com'; }}>
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




                                        <span className="publisher-btn file-group">

                                            <div>
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
                                            </div>
                                            <div className="publisher-btn" data-abc="true"><i className="fa fa-meh-o"></i> <div className="publisher-btn text-info" data-abc="true"></div> </div></span>
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