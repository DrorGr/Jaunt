import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export function ImgCarousel({ stay }) {

    return (
        <Carousel
            fullHeightHover={true}
            animation={'slide'}
            swipe={true}
            timeout={300}
            autoPlay={false}
            navButtonsProps={{
                style: {
                    // position:'absolute',
                    backgroundColor: 'white',
                    color: 'black'
                    //  bottom:'20px',
                }
            }}

            indicatorIconButtonProps={{
                style: {
                    color: "#ffffffba",
                }
            }}
            indicatorContainerProps={{
                style: {
                    position: 'absolute',
                    bottom: '20px',
                }
            }
            }
            activeIndicatorIconButtonProps={{
                style:{color: "white"}
            }} >

            {
                stay.imgUrls.map((img, i) =>
                    <Link to={`/stay/${stay._id}`} className="primary-btn">
                        <img src={img} key={i} />
                    </Link>)
            }

        </Carousel>
    )
}