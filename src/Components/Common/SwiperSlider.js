import React from 'react';


class SwiperSlider extends React.Component {
  render() {
    return (
      <div>
         {/* HTML SCSS JSResult Skip Results Iframe */}
        {/* Slider main container */}
        <div className="mainswiper">
        <div className="swiper-container">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {/* Slides */}
            <div className="swiper-slide">
              <div className="picture">
                <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=633&q=80" alt="" />
              </div>
              <div className="detail">
                <h3>Marie Edwards</h3>
                <span>Web Designer</span>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="picture">
                <img src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49899e285952107fdfd9415b8d3bf74a&auto=format&fit=crop&w=634&q=80" alt="" />
              </div>
              <div className="detail">
                <h3>Kelly Woods</h3>
                <span>Web Designer</span>
              </div>
            </div>
          </div>
          {/* If we need pagination */}
          <div className="swiper-pagination" />
          {/* If we need navigation buttons */}
          {/*     <div class="swiper-button-prev"></div> */}
          {/*     <div class="swiper-button-next"></div> */}
          {/* If we need scrollbar */}
          <div className="swiper-scrollbar" />
        </div>
        </div>
       </div>
    )

  }
}

export default SwiperSlider;