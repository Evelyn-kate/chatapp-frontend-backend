import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class SettingsComponent extends React.Component {
    // logout() {
    //     this.props.history.push('/logout');
    // }
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
                               <NavComponent history={this.props.history} />
                                
                               <div className="container">
                                    <div className="panel panel-info">
                                        <div className="panel-heading">
                                            <h3> Settings</h3>
                                            <hr/>
                                        </div>

                                        <div className="panel-body">
                                       
                                            <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    GENERAL SETTINGS
                                                </div>
                                                <div className="card-body">
                                                    <p className="card-text">Message font size</p>
                                                    <p className="card-text">Text Message Limit.</p><br/>
                                                </div>
                                            </div>

                                            <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    SMS SETTINGS
                                                </div>
                                                <div className="card-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                    <p>Request Delivery Report</p> 
                                                            </label>
                                                    </div>
                                                    <p className="card-text">Edit Quick Text.</p><br/>
                                                    <p className="card-text">SMS Storage Location.</p><br/>
                                                    
                                                </div>
                                            </div>
                               
                                            <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    NOTIFICATIONS
                                                </div>
                                                <div className="card-body">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                    <p>Pop-Up Screen</p> 
                                                            </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                    <p>Message Notifications</p> 
                                                            </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                    <p>Mute</p> 
                                                            </label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                    <p>Vibrate</p> 
                                                            </label>
                                                    </div>
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

export default SettingsComponent;