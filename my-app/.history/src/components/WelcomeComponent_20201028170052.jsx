import React from 'react';

class WelcomeComponent extends React.Component {
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
                            
                        </div>
                        <div className="col-10 pr-0">
                            <div className="container">
                                {/*navbar component*/}
                                <div className="w-100 main-text">
                                    <h1>Welcome {username}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;