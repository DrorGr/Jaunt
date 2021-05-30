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

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.location.pathname !== this.props.location.pathname){
            console.log('chnge');
        }
    }
    

    getFilterBy = () => {
        let search = this.props.location.search;
        let params = new URLSearchParams(search);
        let location = params.get('loc');
        const filterBy = { location }
        console.log('loc',location);
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
                <section className="search-container flex justify-center">
                    <StayFilter
                        loadStays={this.loadStays}
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
