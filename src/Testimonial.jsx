export function Testimonial() {
  return (
    <div className="testimonial">
      <div className="test-image">
        <img
          className="test-img-one"
          src="./src/Images/images/testimon.png"
          alt=""
          width="350px"
        />
        <img
          className="test-img-two"
          src="./src/Images/images/test-rect.png"
          alt=""
          width="350px"
        />
      </div>
      <div className="test-lines">
        <div className="test-div-one">
          <p className="test-title">TESTIMONIALS</p>
          <h1 className="test-head">What Our Customers Say About Us</h1>
          <p className="test-para">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
        </div>
        <div className="test-div-two">
          <p className="test-feed">Customer Feedback</p>
          <p className="test-feed">
            ⭐ 4.9 <span className="reviews">(18.6K Reviews)</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
