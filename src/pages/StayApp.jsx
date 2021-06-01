import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
import { StayList } from '../cmps/StayList'
import { NavBar } from '../cmps/NavBar.jsx'

class _StayApp extends Component {

    componentDidMount() {
        const filterBy = this.getFilterBy();
        this.props.loadStays(filterBy)

    }

    componentDidUpdate(prevProps, prevState) {
        const currLocation = this.getFilterBy().location
        let search = prevProps.location.search;
        let params = new URLSearchParams(search);
        let prevLocation = params.get('loc');
        if (currLocation !== prevLocation) {
            this.props.loadStays(this.getFilterBy())
        }

    }


    getFilterBy = () => {
        let search = this.props.location.search;
        let params = new URLSearchParams(search);
        let location = params.get('loc');
        const filterBy = { location }
        return filterBy
    }

    loadStays = (filterBy) => {
        this.props.loadStays(filterBy)
    }

    render() {
        const { stays } = this.props
        if (!stays) return <div>Loading...</div>
        return (
            <section className="stay-app">
                {/* <Header /> */}
                {/* <section className="search-container flex justify-center">
                    <StayFilter />
                </section> */}
                <NavBar/>
                <section>
                    <StayList stays={stays} />
                </section>
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        stays: state.stayModule.stays
    }
}
const mapDispatchToProps = {
    loadStays
}

export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)
