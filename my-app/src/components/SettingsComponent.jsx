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

                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- The sidebar --> */}
                        <div className="col-md-2 col-lg-2 col-sm-2">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-10 col-lg-10 pl-2 contenu">
                           
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
                                                <div className="card-header" style = {{color: "000000"}}>
                                                    GENERAL SETTINGS
                                                </div>
                                                <div className="card-body"  style = {{color: "000000"}}>
                                                    <p className="card-text">Message font size: default</p>
                                                    <p className="card-text">Text Message Limit: unlimited</p><br/>
                                                </div>
                                            </div>

                                           {/* <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    SMS SETTINGS
                                                </div>
                                                <div className="card-body"  style = {{color: "000000"}}>
                                                    <div className="form-check"  style = {{color: "000000"}}>
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                    <p>Request Delivery Report</p> 
                                                            </label>
                                                    </div>
                                                    <p className="card-text" style = {{color: "000000"}}>Edit Quick Text.</p><br/>
                                                    <p className="card-text">SMS Storage Location.</p><br/>
                                                    
                                                </div>
                                            </div>*/}
                               
                                         {/*   <div className="card bg-light mb-3">
                                                <div className="card-header">
                                                    NOTIFICATIONS
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                    <p>Pop-Up Screen</p> 
                                                            </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                    <p>Message Notifications</p> 
                                                            </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                    <p>Mute</p> 
                                                            </label>
                                                    </div>

                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                    <p>Vibrate</p> 
                                                            </label>
                                                    </div>
                                                </div>
                                            </div>*/}
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