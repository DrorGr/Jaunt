import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

export function ImgCarousel({ stay }) {

    return (
        <Carousel
            fullHeightHover={true}
            animation={'slide'}
            swipe={true}
            timeout={300}
            autoPlay={false}
        >

            {stay.imgUrls.map((img, i) => <img src={img} key={i} />)}

        </Carousel>
    )
}