import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Set products data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>

      {loading ? ( // Show loading spinner while loading
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          <p className="ml-4 text-blue-500">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-gray-500 text-sm text-center mb-2">
                {product.category}
              </p>
              <p className="text-gray-700 text-center text-sm mb-4">
                {product.description.slice(0, 60)}...
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span>
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
