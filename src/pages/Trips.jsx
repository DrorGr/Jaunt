import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { loadStays } from '../store/actions/stayActions.js'
// import { setDates, setGuestAmount } from '../store/actions/orderActions.js'
// import { StayList } from '../cmps/StayList'
// import { NavBar } from '../cmps/NavBar.jsx'
import { Header } from '../cmps/Header.jsx'

class _Trips extends Component {
    // state = {
    //     filterBy: {
    //         location: '',
    //     },
    //     isModalShown: false,
    //     x: 0,
    //     y: 0
    // }
    componentDidMount() {
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const currLocation = this.getFilterBy().location
    //     let search = prevProps.location.search;
    //     let params = new URLSearchParams(search);
    //     let prevLocation = params.get('loc');
    //     if (currLocation !== prevLocation) {
    //         this.props.loadStays(this.getFilterBy())
    //     }

    // }

    // getFilterBy = () => {
    //     let search = this.props.location.search;
    //     let params = new URLSearchParams(search);
    //     let location = params.get('loc');
    //     const filterBy = { location }
    //     return filterBy
    // }

    // loadStays = (filterBy) => {
    //     this.props.loadStays(filterBy)
    // }

    render() {
        const { order } = this.props
        console.log('order ', order);
        // const {startDate, endDate} = order
        return (
            <section className="trips-page">
                <Header />
                <div>
                    <article>
                        <h2>{order.name}</h2>
                    </article>
                </div>
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        // stays: state.stayModule.stays,
        order: state.orderModule.currOrder

    }
}
// const mapDispatchToProps = {

// }

export const Trips = connect(mapStateToProps, null)(_Trips)
