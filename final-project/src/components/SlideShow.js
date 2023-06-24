import React from "react";
import "../styles/Slideshow.css"

class Slideshow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        slideIndex: 1
      };
    }
  
    componentDidMount() {
      this.showSlides(this.state.slideIndex);
    }
  
    plusSlides(n) {
      this.showSlides(this.state.slideIndex + n);
    }
  
    currentSlide(n) {
      this.showSlides(n);
    }
  
    showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        n = 1;
      }
      if (n < 1) {
        n = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[n - 1].style.display = "block";
      dots[n - 1].className += " active";
      this.setState({ slideIndex: n });
    }
  
    render() {
      return (
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src="/images/1.png" style={{ width: "100%" }} alt="eyebag_removal" />
          </div>
  
          <div className="mySlides fade">
            <img src="/images/2.png" style={{ width: "100%" }} alt="led_facial" />
          </div>
  
          <div className="mySlides fade">
            <img src="/images/3.png" style={{ width: "100%" }} alt="skin_facial" />
          </div>

          <div className="mySlides fade">
            <img src="/images/4.png" style={{ width: "100%" }} alt="gluta_drip" />
          </div>

          <div className="mySlides fade">
            <img src="/images/5.png" style={{ width: "100%" }} alt="microneedling" />
          </div>

          <div className="mySlides fade">
            <img src="/images/6.png" style={{ width: "100%" }} alt="underarm_whitening" />
          </div>
  
          <div className="prev" onClick={() => this.plusSlides(-1)}>
            <img src="/images/prev.svg" alt="Previous" />
          </div>
          <div className="next" onClick={() => this.plusSlides(1)}>
            <img src="/images/next.svg" alt="Next" />
          </div>

  
          <div style={{ textAlign: "center" }}>
            <span className="dot" onClick={() => this.currentSlide(1)}></span>
            <span className="dot" onClick={() => this.currentSlide(2)}></span>
            <span className="dot" onClick={() => this.currentSlide(3)}></span>
            <span className="dot" onClick={() => this.currentSlide(4)}></span>
            <span className="dot" onClick={() => this.currentSlide(5)}></span>
            <span className="dot" onClick={() => this.currentSlide(6)}></span>
          </div>
        </div>
      );
    }
}
  
export default Slideshow;