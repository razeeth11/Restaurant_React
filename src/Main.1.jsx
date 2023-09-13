export function Main() {
  return (
    <main>
      <div className="left-div">
        <h1 className="marketing-head">
          Dive into Delights Of Delectable <span className="food">Food</span>
        </h1>
        <p className="marketing-para">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="order-buttons">
          <button className="order">Order Now</button>
          <p className="watch">
            Watch Video{" "}
            <span class="material-symbols-rounded play-btn">play_arrow</span>
          </p>
        </div>
      </div>
      <div className="right-div">
        <div className="ellipse">
          <img
            className="ellipse-circle"
            src="src\Images\images\ellipse-4.svg"
            alt=""
            width="500px"
          />
          <img
            className="main-pic"
            src="src\Images\images\main-pic.png"
            alt=""
            width="550px"
          />
          <p className="spicy">Hot Spicy Food🌶️</p>
          <div className="recommend-foods">
            <div className="recommend">
              <img src="src\Images\images\noodles.png" alt="" width="50px" />
              <div className="recommend-card">
                <p className="title">Spicy Noodles</p>
                <p className="rating">⭐⭐⭐</p>
                <p>
                  <span className="dollar-sign">$</span>18.00
                </p>
              </div>
            </div>
            <div className="recommend">
              <img src="src\Images\images\noodles1.png" alt="" width="50px" />
              <div className="recommend-card">
                <p className="title">Vegetarian Salad</p>
                <p className="rating">⭐⭐⭐</p>
                <p>
                  <span className="dollar-sign">$</span>26.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
