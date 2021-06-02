export function GuestModal({ isModalShown, updateGuestsAmount, guetsAmount }) {
    // console.log('guetsAmount ', guetsAmount.adults);
    const data =
        [{ main: "Adults", sub: "Ages 13 or above", num: 0 }]
    return (
        isModalShown &&
        <div className="guests-modal flex column">
            <div className="adults flex space-between">
                <div className="txt flex column">
                    <p>Adults</p>
                    <p>Ages 13 or above</p>
                </div>
                <div className="btns flex space-between align-center">
                    <button onClick={()=>updateGuestsAmount('adults', --guetsAmount.adults)}><i className="fas fa-minus"></i></button>
                    <span>{guetsAmount.adults}</span>
                    <button onClick={()=>updateGuestsAmount('adults', ++guetsAmount.adults)}><i className="fas fa-plus"></i></button>
                </div>
            </div>
            <div className="children flex space-between">
                <div className="txt flex column">
                    <p>Children</p>
                    <p>Ages 2–12</p>
                </div>
                <div className="btns flex space-between align-center">
                    <button><i className="fas fa-minus"></i></button>
                    <span>{guetsAmount.children}</span>
                    <button><i className="fas fa-plus"></i></button>
                </div>
            </div>

            <div className="infants flex space-between">
                <div className="txt flex column">
                    <p>Infants</p>
                    <p>Under 2</p>
                </div>
                <div className="btns flex space-between align-center">
                    <button><i className="fas fa-minus"></i></button>
                    <span>{guetsAmount.infants}</span>
                    <button><i className="fas fa-plus"></i></button>
                </div>
            </div>
            {/* {data.map((section,idx) => <Prev data={data} key={idx}/>)} */}
        </div>
        // }
    )
}



    //     export function Prev({data}){
    //         console.log(data);
    //         return (
    //             <div className="adults flex space-between">
    //     <div className="txt flex column">
    //         <p>{data.main}</p>
    //         <p>{data.sub}</p>
    //     </div>
    //     <div className="btns flex space-between align-center">
    //         <button><i className="fas fa-minus"></i></button>
    //         {/* <span>{data.num}</span> */}
    //         <button><i className="fas fa-plus"></i></button>
    //     </div>
    // </div>
    //   )
    // }

