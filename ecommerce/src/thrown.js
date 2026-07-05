{/* {products.map((product) => {
  return (
    <div key={product.id} class="product-container">
      <div class="product-image-container">
        <img alt="image" class="product-image" src={product.image} />
      </div>

      <div class="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div class="product-rating-container">
        <img
          alt="image"
          class="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div class="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div class="product-price">
        ${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select title="options">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img alt="image" src="images/icons/checkmark.png" />
        Added
      </div>

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  );
})} */}

{/* created the Products component instead of products in the homepage */}