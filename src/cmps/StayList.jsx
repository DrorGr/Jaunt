import { StayPreview } from '../cmps/StayPreview.jsx'

import { Component } from 'react';
import { connect } from 'react-redux'




class _StayList extends Component {




    render() {
        const { stays } = this.props
        const { location } = this.props.match.params
        const filteredStays = stays.filter(stay => new RegExp(stay.loc.country, 'i').test(location))
      
        return (
            <section className="stay-list card-grid">
                {filteredStays.map((stay) => 
                    <StayPreview key={stay._id}
                        stay={stay}
                    // delayTrans={idx * 150}
                    // onRemoveStay={onRemoveStay} 
                    // loggedInUser={loggedInUser}
                    />
                )}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays,
        // users: state.userModule.users,
        // loggedInUser: state.userModule.loggedInUser
    }
}
// const mapDispatchToProps = {
//     loadStays,
//     // loadUsers,
// }

export const StayList = connect(mapStateToProps)(_StayList)
// export function StayList({ stays, onRemoveStay, loggedInUser }) {
//     return (
//         <section className="stay-list card-grid">
//             {stays.map((stay, idx) => <StayPreview key={stay._id}
//                 stay={stay}
//                 // delayTrans={idx * 150}
//                 // onRemoveStay={onRemoveStay} 
//                 // loggedInUser={loggedInUser}
//                 />)}
//         </section>
//     )
// }