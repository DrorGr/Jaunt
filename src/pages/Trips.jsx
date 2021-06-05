import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from '../cmps/Header.jsx'

class _Trips extends Component {


    formatTime(date) {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = dd + '/' + mm + '/' + yyyy;
        return date
    }

    render() {
        const { orders } = this.props
        console.log('orders ', orders);
        // console.log('orders ', orders);
        return (
            <section className="trips-page">
                <Header />
                <h2>Trips</h2>
                <div className="divider"></div>
                <div className="orders-container grid">
                    {orders.map(order =>
                        <article className="flex column">
                            <img src={order.stay.imgUrls[0]} alt="stay" />
                            <section className="order-details">
                                <div className="dates fs16">{this.formatTime(order.startDate)} - {this.formatTime(order.endDate)}</div>
                                <h2 className="country fs26">{order.stay.loc.country}</h2>
                                    <div className="divider"></div>
                                <div className="fs14 description flex space-between align-center">
                                    <div className="img-container flex">
                                        <img src={order.stay.imgUrls[0]} alt="stay" />
                                    </div>
                                    <div className="flex">{order.stay.name}</div>
                                    <span className="arrow flex  fs30">›</span>
                                </div>
                            </section>
                        </article>
                    )}
                </div>
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        // stays: state.stayModule.stays,
        orders: state.userModule.orders

    }
}
// const mapDispatchToProps = {

// }

export const Trips = connect(mapStateToProps, null)(_Trips)
