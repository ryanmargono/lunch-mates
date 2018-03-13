import React from 'react'
import { Divider } from 'material-ui'
import GroupButton from './GroupButton'
import Nav from '../Nav'
import { connect } from 'react-redux'
import { fetchAllUsers } from '../../reducers/users'
import { fetchAllCurrent } from '../../reducers/currentUsers'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllUsers()
        this.props.fetchAllCurrent()
    }

    render() {
        return (
            <div>
                <Nav />
                <div style={{ padding: 20 }}>
                    <h3> Find Your Lunch Mates! </h3>
                    <Divider />
                    <GroupButton />
                    <Divider />
                    
                </div>
            </div>
        )
    }
}

const mapDispatch = dispatch => ({ 
    fetchAllUsers: () => dispatch(fetchAllUsers()), 
    fetchAllCurrent: () => dispatch(fetchAllCurrent()) 
})

const mapState = store => ({
    history: store.history
})

export default connect(mapState, mapDispatch)(Home)