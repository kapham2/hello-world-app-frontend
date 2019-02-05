import React from 'react'
import { connect } from 'react-redux'
import LogoutNavigation from './LogoutNavigation'
import ExplorePlacesPeopleContainer from './ExplorePlacesPeopleContainer'

class ExploreContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            search: "",
            activeView: "Places"
        }
    }

    setActiveView = (newView) => {
        // console.log("ExploreContainer: => setActiveView", newView)
        this.setState({ activeView: newView })
    }

    onClickMenu = (event) => {
        // console.log("Explore Container: clicked", event.target.getAttribute('name'))
        this.setActiveView(event.target.getAttribute('name'))
    }

    onChangeSearch = (e) => {
        // console.log("ExploreContainer: onChangeSearch =>", e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    clearSearch = () => {
        this.setState({
            search: ""
        })
    }

    render() {
        // console.log("ExploreContainer: this.props =>", this.props)
        return (
            <div className="ui very padded grid">
                <div className="row"></div>

                <div className="ui row">
                    <LogoutNavigation {...this.props} setActiveView={this.setActiveView} search={this.state.search} onChangeSearch={this.onChangeSearch} />
                </div>

                <div className="row">
                    <div className="ui text container">
                        <div className="ui very relaxed unstackable items">
                            <div className="item">

                                <div className="ui small circular image">
                                    <img src="/helloworldsquare.jpg" alt="" />
                                </div>

                                <div className="content">
                                    <p className="header">Explore</p>
                                    <div className="meta">
                                        <span className="cursor-pointer" name="Places" onClick={this.onClickMenu}>cities</span> · <span className="cursor-pointer" name="People" onClick={this.onClickMenu}>people</span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                    <div className="extra">
                                        <p></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {/* <ExploreNavigation {...this.props} search={this.state.search} clearSearch={this.clearSearch} /> */}
                    <ExplorePlacesPeopleContainer {...this.props} activeView={this.state.activeView} search={this.state.search} clearSearch={this.clearSearch}/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        avatar_url: state.avatar_url,
        user_visited_destinations: state.user_visited_destinations,
        user_saved_destinations: state.user_saved_destinations,
        more_destinations: state.more_destinations,
        user_followers: state.user_followers,
        user_following: state.user_following,
        more_users: state.more_users,
        // user_destinations: state.user_destinations,
        // follows: state.follows
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setOtherUser: data => dispatch({ type: 'SET_OTHER_USER', data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)

