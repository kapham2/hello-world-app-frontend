import React from 'react'
import OtherUserDestinationContainer from './OtherUserDestinationContainer'

class OtherUserDestinationNavigation extends React.Component {

    constructor() {
        super()
        this.state = {
            activeView: "Visited"
        }
    }

    onClickMenu = (event) => {
        // console.log("OtherUserDestinationNavigation: clicked", event.target.getAttribute('name'))
        const newActive = event.target
        const oldActive = document.getElementsByClassName("link item active")[0]
        if (newActive !== oldActive) {
            oldActive.classList.remove("active")
            newActive.classList.add("active")
            this.setState({
                activeView: event.target.getAttribute('name')
            })
        }
    }

    render() {
        // console.log("UserDestinationNavigation: this.props =>", this.props)
        return (
            <div className="ui container">
                <div className="ui text container">
                    <div className="ui stackable secondary menu">
                            <div className="link item active" data-tab="Visited" name="Visited" onClick={this.onClickMenu} >Visited</div>
                            <div className="link item" data-tab="Saved" name="Saved" onClick={this.onClickMenu} >Saved</div>
                            {/* <div className="link item" data-tab="Explore Destinations" name="Explore Destinations" onClick={this.onClickMenu} >Explore Destinations</div> */}

                            <div className="link item" data-tab="Followers" name="Followers" onClick={this.onClickMenu} >Followers</div>
                            <div className="link item" data-tab="Following" name="Following" onClick={this.onClickMenu} >Following</div>
                            {/* <div className="link item" data-tab="Explore Users" name="Explore Users" onClick={this.onClickMenu} >Explore Users</div> */}
                    </div>
                </div>
                
                <br/><br/><br/>
                <div className="ui active tab">
                    <OtherUserDestinationContainer {...this.props} activeView={this.state.activeView}/>
                </div>

            </div>
        )
    }
}

export default OtherUserDestinationNavigation













