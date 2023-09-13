export function NavBar() {
  return (
    <nav>
      <div className="logo-sec">
        <img src="src\Images\images\f.svg" alt="" width="15px" />
        <img src="src\Images\images\oodi.svg" alt="" width="45px" />
      </div>
      <div className="nav-sec">
        <ul>
          <li>
            <a href="#">Home</a>
            <span class="material-symbols-outlined">expand_more</span>
          </li>
          <li>
            <a href="#">Menu</a>
            <span class="material-symbols-outlined">expand_more</span>
          </li>
          <li>
            <a href="#">Services</a>
            <span class="material-symbols-outlined">expand_more</span>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
        </ul>
      </div>
      <div className="contact-sec">
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">shopping_bag</span>
        <button>
          <span class="material-symbols-outlined">phone_in_talk</span>
          Contact
        </button>
      </div>
    </nav>
  );
}
