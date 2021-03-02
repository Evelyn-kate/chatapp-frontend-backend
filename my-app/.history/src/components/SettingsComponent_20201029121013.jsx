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
                                <div class="card bg-light mb-3">
                                    <div class="card-header">
                                        Featured
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        
                                    </div>
                                </div>
                                </span>

                                <span>
                                <div class="card bg-light mb-3">
                                    <div class="card-header">
                                        Featured
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        
                                    </div>
                                </div>
                                </span>

                                <span>
                                <div class="card bg-light mb-3">
                                    <div class="card-header">
                                        Featured
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Special title treatment</h5>
                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        
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