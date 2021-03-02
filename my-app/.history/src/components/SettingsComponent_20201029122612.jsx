import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class SettingsComponent extends React.Component {
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
                            <div className="container">
                                {/*navbar component*/}
                                <div>
                                    <NavComponent />
                                </div>
                                <span>
                                <div className="card bg-light mb-3">
                                    <div className="card-header">
                                        GENERAL SETTINGS
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text">Text Message Limit.</p><br/>
                                        
                                    </div>
                                </div>
                                </span>

                                <span>
                                <div className="card bg-light mb-3">
                                    <div className="card-header">
                                        SMS SETTINGS
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Request Delivery Report                         <input type="radio"/> </p><br/>
                                        <p className="card-text">Edit Quick Text.</p><br/>
                                        <p className="card-text">SMS Storage Location.</p><br/>
                                        
                                    </div>
                                </div>
                                </span>

                                <span>
                                <div className="card bg-light mb-3">
                                    <div className="card-header">
                                        NOTIFICATIONS
                                    </div>
                                    <div className="card-body">
                                        <span>
                                        <input type="radio"/> Pop-Up Screen<br/>
                                        <input type="radio"/> Message Notifications<br/>
                                        <input type="radio"/> Mute<br/>
                                        <input type="radio"/> Vibrate<br/>

                                        
                                        </span>
                                        
                                    </div>
                                </div>
                                </span>
                               
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsComponent;