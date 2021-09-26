import React from 'react';
// import '../../Assets/css/swiper'

class Slider extends React.Component {

    constructor() {
        super();
        //banner
        // this.handleBannerList = this.handleBannerList.bind(this);
        this.state = {
            sliderLoaded: false,
            sliderIndex: true
        }
    }

    rengerGlider = () => {

        new window.Glider(document.querySelector('.glider'), {
            slidesToShow: "1",
            slidesToScroll: 1,
            scrollLock: true,
            duration: 0.25,
            draggable: true,
            rewind: true,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            },

            responsive: [
                {
                    // screens greater than >= 1024px
                    breakpoint: 950,
                    settings: {
                        slidesToShow: "3",
                        slidesToScroll: 1,
                        itemWidth: 150,
                        duration: 0.25
                    }
                },
            ]
        });
    }
    componentDidMount() {
        this.rengerGlider()
    }
    render() {
        return (
            <div className="slideshowMobileGliderContainer">

                <div className="glider">
                    <div> <div className="rotateStyle"> <img src="/images/sectionImages/Atom-Access.png" alt="" />
                        <img src="/images/sectionImages/Atom-Access.png" alt="" /></div></div>
                    <div> <div className="rotateStyle"> <img src="/images/sectionImages/Atom-Access.png" alt="" />
                        <img src="/images/sectionImages/Atom-Access.png" alt="" /></div></div>
                    <div> <div className="rotateStyle"> <img src="/images/sectionImages/Atom-Access.png" alt="" />
                        <img src="/images/sectionImages/Atom-Access.png" alt="" /></div></div>
                    <div> <div className="rotateStyle"> <img src="/images/sectionImages/Atom-Access.png" alt="" />
                        <img src="/images/sectionImages/Atom-Access.png" alt="" /></div></div>
                    <div> <div className="rotateStyle"> <img src="/images/sectionImages/Atom-Access.png" alt="" />
                        <img src="/images/sectionImages/Atom-Access.png" alt="" /></div></div>
                </div>
                <div className="btnSlider">
                    <button aria-label="Previous" className="glider-prev"><img src="/images/left.png" /></button>
                    <button aria-label="Next" className="glider-next"><img src="/images/right.png" /></button>
                </div>
            </div>
        )

    }
}

export default Slider;