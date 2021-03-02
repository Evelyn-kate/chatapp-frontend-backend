import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class MessageComponent extends React.Component {
    logout() {
        this.props.history.push('/logout');
    }
    
    render(){
        const {username} = this.props.match.params;
        console.log(username);
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
                               
                                    <NavComponent />
                               
                                
                         
                                <div className="container">
                                    <div className="panel panel-info">
                                        <div className="panel-heading">
                                            <h3> Messages</h3>
                                            <hr/>
                                        </div>

                                        <div className="panel-body">

                                            <div className="row">
                                                <div className="input-group">
                                                    <input type="text" placeholder="Search.." className="form-control col-3"/>
                                                    <div className="input-group-btn">
                                                    <   button type="submit" className="btn btn-primary"> <i className="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                                
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
                                                    <span classname="time-left">11:05</span>
                                            </div>

                                            <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0,}}>
                                                <div className="ps-scrollbar-x" tabindex="0" style={{left: 0,width: 0,}}></div>
                                            </div>

                                            <div className="ps-scrollbar-y-rail" style={{top: 0, height: 0, right: 2,}}>
                                                <div className="ps-scrollbar-y" tabindex="0" style={{top: 0, height: 2,}}></div>
                                            </div>

                                            <div className="publisher bt-1 border-light"> <img className="avatar avatar-xs" src="./image/User.jpg" alt="..."/> <input className="publisher-input" type="text" placeholder="Write something"></input> 
                                    
                                                <span className="publisher-btn file-group"> <i className="fa fa-paperclip file-browser"></i> <input type="file"/>  
                                            
                                            <div  className="publisher-btn"  data-abc="true"><i className="fa fa-meh-o"></i> <div className="publisher-btn text-info"  data-abc="true"><i className="fa fa-paper-plane"></i></div> </div></span>
                                                
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