export function Contact() {
  return (
    <div className="contact">
      <div className="contact-logo">
        <div className="cont-logo-div">
          <img
            className="con-logo"
            src="src\Images\images\f.svg"
            alt=""
            width="15px"
          />
          <img src="src\Images\images\oodi.svg" alt="" width="60px" />
        </div>
        <p className="contact-para">
          Savor the artistry where every dish is a culinary masterpiece
        </p>
      </div>
      <div className="links-div">
        <div className="use-links">
          <p>Useful Links</p>
          <a href="#">About Us</a>
          <a href="#">Events</a>
          <a href="#">Blogs</a>
          <a href="#">FAQ</a>
        </div>
        <div className="main-link">
          <p>Main Menu</p>
          <a href="#">Home</a>
          <a href="#">Offers</a>
          <a href="#">Menus</a>
          <a href="#">Reservations</a>
        </div>
        <div className="contact-link">
          <p>Contact Us</p>
          <a href="#">example@gmail.com</a>
          <a href="#">+97 5462890</a>
          <a href="#">Social Media</a>
        </div>
      </div>
    </div>
  );
}
