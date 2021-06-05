import DatePicker from 'react-datepicker'
import { GuestModal } from '../cmps/GuestModal';
import {utilService} from '../services/utilService';


export function CheckAvailability({ state, props, getGuestsNum, toggleModal, toggleCharge, updateGuestsAmount, handleMouseMove, setDates,changeBtn }) {


    const { startDate, endDate, isModalShown, isChargeShown, x, y, isSecondClick } = state
    const { stay, order } = props
    const { guestAmount } = order
    const style = { backgroundPosition: `calc((100 - ${x}) * 1%) calc((100 - ${y}) * 1%)` }
    return (
        <div className="availability flex column">
            <form className="check-availability flex column align-center">
                <div className="value-rate flex space-between">
                    <span><b className="fs22">${stay.price}</b> / night</span>
                    <span className="stay-rate flex align-center">
                        <i className='fa fa-star'></i>
                        <span>{stay.reviews[0].rate}</span>
                        {stay.reviews.length === 1 && <span className="reviews-amount">({stay.reviews.length} review)</span>}
                        {stay.reviews.length > 1 && <span className="reviews-amount">({stay.reviews.length} reviews)</span>}
                    </span>
                </div>
                <div className="order-details details-container fs20 flex column align-center">
                    <DatePicker
                        className="date-picker"
                        placeholderText={(props.order.startDate && props.order.endDate)? utilService.formatTime(props.order.startDate) + '-' + utilService.formatTime(props.order.endDate) : "Choose dates"}
                        onChange={date => setDates(date)}
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        monthsShown={2}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        selectsRange
                        shouldCloseOnSelect={true}
                    />
                    <div className="guests flex column" onClick={(ev) => toggleModal()}>
                        <div className="guestAmount">
                            <p>{getGuestsNum() >= 1 ? `${getGuestsNum()} Guests` : 'Add guests'} </p>
                        </div>
                        <div className="guest-modal">
                            <GuestModal isModalShown={isModalShown} guestAmount={guestAmount} updateGuestsAmount={updateGuestsAmount} />
                        </div>
                    </div>
                </div>
                {/* <button className="check-btn fs16"
                    onMouseMove={handleMouseMove}
                    style={style}
                    onClick={toggleCharge}>
                    {(!isChargeShown) ? 'Check Availability' : 'Reserve'}
                </button> */}
                {changeBtn()}
                {isChargeShown &&
                    <div className="trip-reserve flex column">
                        <p className="charge-msg">You won't be charged yet</p>
                        <p>Non-refundable • $ {stay.price}</p>
                        <p>{getGuestsNum() >= 1 ? `${getGuestsNum()} Guests` : 'No guests added'} </p>
                        {/* should add dates to  calculate nights and then calculat total anount */}
                        <p>$ {stay.price} x</p>
                        <p>Total</p>
                    </div>}
            </form>
        </div>
    )
}