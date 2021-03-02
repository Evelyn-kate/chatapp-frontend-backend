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
                        <div class="col-2">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-10 pr-0">
                            <div className="container">
                                {/*navbar component*/}
                                <div>
                                    <NavComponent />
                                </div>
                            </div>

                            <div>
                                <div class="container">
                                    <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                                        <p>Hello. How are you today?</p>
                                        <span class="time-right">11:00</span>
                                 </div>

                                    <div class="container darker">
                                        <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                                            <p>Hey! I'm fine. Thanks for asking!</p>
                                            <span class="time-left">11:01</span>
                                    </div>

                                        <div class="container">
                                            <img src="/w3images/bandmember.jpg" alt="Avatar"/>
                                                <p>Sweet! So, what do you wanna do today?</p>
                                                <span class="time-right">11:02</span>
                                        </div>

                                            <div class="container darker">
                                                <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="right"/>
                                                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                                                    <span class="time-left">11:05</span>
                                         </div>
                                <div class="ps-scrollbar-x-rail" style={{left: 0, bottom: 0,}}>
                                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                </div>
                                <div class="ps-scrollbar-y-rail" style={{top: 0, height: 0, right: 2,}}>
                                    <div class="ps-scrollbar-y" tabindex="0" style={{top: 0, height: 2,}}></div>
                                </div>
                                <div class="publisher bt-1 border-light"> <img class="avatar avatar-xs" src="./image/User.jpg" alt="..."/> <input class="publisher-input" type="text" placeholder="Write something"></input> <span class="publisher-btn file-group"> <i class="fa fa-paperclip file-browser"></i> <input type="file"/> 
                                </span> <a class="publisher-btn" href="#" data-abc="true"><i class="fa fa-smile"></i></a> <a class="publisher-btn text-info" href="#" data-abc="true"><i class="fa fa-paper-plane"></i></a> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MessageComponent;