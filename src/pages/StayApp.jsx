import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadStays } from '../store/actions/stayActions.js'
import { StayFilter } from '../cmps/StayFilter'
import { StayList } from '../cmps/StayList'

class _StayApp extends Component {

    componentDidMount() {
        const filterBy = this.getFilterBy();
        this.props.loadStays(filterBy)
    }

    getFilterBy = () => {
        let search = this.props.location.search;
        let params = new URLSearchParams(search);
        let location = params.get('loc');
        const filterBy = { location }
        console.log('filterBy ', filterBy);
        return filterBy
    }

    setUrl = (loc) => {
        this.props.history.push(`/stay?loc=${loc}`)
    }

    render() {
        const { stays } = this.props
        console.log('in render ', stays);
        if (!stays) return <div>Loading...</div>
        return (
            <section className="stay-app">
                <section className="search-container flex justify-center">
                    <StayFilter 
                    setUrl={this.setUrl} 
                    />
                </section>
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
