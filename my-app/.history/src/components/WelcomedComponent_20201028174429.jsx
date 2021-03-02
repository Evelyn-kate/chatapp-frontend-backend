import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';

class WelcomedComponent extends React.Component {
    logout() {
        this.props.history.push('/logout');
    }
    render(){
        const {Admin} = this.props.match.params;
        console.log(Admin);
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
                                <div className="w-100 main-text">
                                    <h1>Welcome {Admin}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomedComponent;