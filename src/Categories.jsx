export function Categories() {
  return (
    <>
      <div className="categories-sec">
        <div className="categories-lines">
          <p>CUSTOMER FAVORITES</p>
          <h1>Popular Categories</h1>
        </div>
        <div className="categories-img">
          <div className="category">
            <img src="src/Images/images/cat-1.png" alt="" />
            <p className="dish-variety">Main Dish</p>
            <p className="dishes">(86 Dishes)</p>
          </div>
          <div className="category">
            <img src="src/Images/images/cat-2.png" alt="" />
            <p className="dish-variety">Break Fast</p>
            <p className="dishes">(12 Dishes)</p>
          </div>
          <div className="category">
            <img src="src/Images/images/cat-3.png" alt="" />
            <p className="dish-variety">Dessert</p>
            <p className="dishes">(26 Dishes)</p>
          </div>
          <div className="category">
            <img src="src/Images/images/cat-4.png" alt="" />
            <p className="dish-variety">Browse All</p>
            <p className="dishes">(86 Dishes)</p>
          </div>
        </div>
      </div>
      <div className="special-sec">
        <div className="special-lines">
          <p>SPECIAL DISHES</p>
          <h1>Standout Dishes From Our Menu</h1>
        </div>
        <div className="special-image">
          <div className="special-img">
            <img src="./src/Images/images/spl-1.png" alt="" width="140px" />
            <span class="material-symbols-rounded heart">favorite</span>
            <div className="spl-img-lines">
              <p>Fattoush salad</p>
              <p>Description of the item</p>
              <p>
                <span className="dollar-sign">$</span>24.00
              </p>
            </div>
          </div>
          <div className="special-img">
            <img src="./src/Images/images/spl-3.png" alt="" width="140px" />
            <span class="material-symbols-rounded heart">favorite</span>
            <div className="spl-img-lines">
              <p>Fattoush salad</p>
              <p>Description of the item</p>
              <p>
                <span className="dollar-sign">$</span>24.00
              </p>
            </div>
          </div>
          <div className="special-img">
            <img src="./src/Images/images/spl-2.png" alt="" width="140px" />
            <span class="material-symbols-rounded heart">favorite</span>
            <div className="spl-img-lines">
              <p>Fattoush salad</p>
              <p>Description of the item</p>
              <p>
                <span className="dollar-sign">$</span>24.00
              </p>
            </div>
          </div>
          <div className="special-img">
            <img src="./src/Images/images/spl-3.png" alt="" width="140px" />
            <span class="material-symbols-rounded heart">favorite</span>
            <div className="spl-img-lines">
              <p>Fattoush salad</p>
              <p>Description of the item</p>
              <p>
                <span className="dollar-sign">$</span>24.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
