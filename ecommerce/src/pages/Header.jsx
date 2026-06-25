import './Header.css'

export function Header() {
  return (
    <div class="header">
      <div class="left-section">
        <a href="/" class="header-link">
          <img alt="image" class="logo" src="images/logo-white.png" />
          <img
            alt="image"
            class="mobile-logo"
            src="images/mobile-logo-white.png"
          />
        </a>
      </div>

      <div class="middle-section">
        <input class="search-bar" type="text" placeholder="Search" />

        <button class="search-button">
          <img
            alt="image"
            class="search-icon"
            src="images/icons/search-icon.png"
          />
        </button>
      </div>

      <div class="right-section">
        <a class="orders-link header-link" href="/orders">
          <span class="orders-text">Orders</span>
        </a>

        <a class="cart-link header-link" href="/checkout">
          <img alt="image" class="cart-icon" src="images/icons/cart-icon.png" />
          <div class="cart-quantity">3</div>
          <div class="cart-text">Cart</div>
        </a>
      </div>
    </div>
  );
}

