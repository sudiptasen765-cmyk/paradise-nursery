import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2bb0",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Monstera",
    price: 35,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594576138-8f7d0f8b1a48",
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 28,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691143-643e2a3e4e44",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 6,
    name: "Aloe Vera",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8f3f7e1",
  },

  // Flowering Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 32,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Orchid",
    price: 40,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84",
  },
  {
    id: 9,
    name: "Jasmine",
    price: 27,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19a9d8b6c1f",
  },
  {
    id: 10,
    name: "Hibiscus",
    price: 29,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19a9d8b6c1f",
  },
  {
    id: 11,
    name: "Anthurium",
    price: 38,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1608621730125-2e5f8f8c6b2e",
  },
  {
    id: 12,
    name: "African Violet",
    price: 24,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },

  // Succulents
  {
    id: 13,
    name: "Echeveria",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 14,
    name: "Jade Plant",
    price: 21,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678",
  },
  {
    id: 15,
    name: "Haworthia",
    price: 19,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 16,
    name: "String of Pearls",
    price: 26,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
  },
  {
    id: 17,
    name: "Zebra Haworthia",
    price: 23,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 18,
    name: "Panda Plant",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const [addedItems, setAddedItems] = useState([]);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((previous) => [...previous, product.id]);
  };

  const isAdded = (id) => addedItems.includes(id);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      {/* Product Listing */}
      <main id="plants" className="product-list">
        <h1>Our Houseplants</h1>

        <p>
          Explore our collection of beautiful plants for your home.
        </p>

        {categories.map((category) => (
          <section key={category} className="plant-category">
            <h2>{category}</h2>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="plant-image"
                    />

                    <h3>{product.name}</h3>

                    <p>${product.price}</p>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded(product.id)}
                    >
                      {isAdded(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
