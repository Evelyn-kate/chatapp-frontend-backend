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
                                        
                                    </div>
                                </div>
                                </span>

                                <span>
                                <div className="card bg-light mb-3">
                                    <div className="card-header">
                                        SMS SETTINGS
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        
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
                                        <input type="radio"  value="Pop-Up Screen"/> Male<br/>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        
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