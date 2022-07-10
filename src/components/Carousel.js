import React, { Component } from 'react'

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }
  // Ok this carousel ended being a bit ugly/complicated :P, so I'll comment on everything it does
  nextSlide = () => {
    // I make sure it runs only when the carousel has content
    if (this.carousel.current.children.length > 1) {
      // First Carousel Item
      const firstItem = this.carousel.current.children[0];
      // Transition Animation
      this.carousel.current.style.transition = "300ms ease-out all";
      // Get the width of every item, so I know how much translate each one
      const slideWidth = firstItem.offsetWidth;
      // Translate the item to show the new one
      this.carousel.current.style.transform = `translateX(-${slideWidth}px)`;

      // The old item has to be relocated to the end, so it will behave as an infinite carousel
      // But before relocate it, we have to wait till it finish the animation c:
      setTimeout(() => {
        this.carousel.current.style.transition = "none";
        this.carousel.current.style.transform = `translateX(0)`;
        this.carousel.current.appendChild(firstItem);
      }, 300);
    }
  };

  prevSlide = () => {
    if (this.carousel.current.children.length > 1) {
      const lastItemIndex = this.carousel.current.children.length - 1;
      const lastItem = this.carousel.current.children[lastItemIndex];
      this.carousel.current.insertBefore(lastItem, this.carousel.current.firstChild);

      this.carousel.current.style.transition = "none";
      const slideWidth = this.carousel.current.children[0].offsetWidth;
      this.carousel.current.style.transform = `translateX(-${slideWidth}px)`;

      setTimeout(() => {
        this.carousel.current.style.transition = "300ms ease-out all";
        this.carousel.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  render() {
    const { images } = this.props
    return (
      <div className='carousel'>
        <div className="carousel__container" ref={this.carousel} >
          {images.map(image => (
            <div className="carousel__item" key={image} >
              <img className="carousel__image" src={image} alt='product' />
            </div>
          ))}
        </div >
        {images.length > 1 ?
          <div className='carousel__controllers'>
            <span className='carousel__arrow' onClick={this.prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 8 14" fill="none">
                <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className='carousel__arrow' onClick={this.nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 8 14" fill="none">
                <path d="M1 13L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
          :
          null
        }
      </div >
    )
  }
}

export default Carousel