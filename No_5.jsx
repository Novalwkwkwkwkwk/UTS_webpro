import React from 'react';

const ProductDetailPage = () => {
  // Simulated product data
  const productData = [
    {
      id: '1',
      name: 'Product 1',
      description: 'This is the detailed information for Product ID: 1.'
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'This is the detailed information for Product ID: 2.'
    }
  ];

  // Function to handle the "View Product Detail" button click
  const handleProductDetail = (productId) => {
    console.log(`Navigating to product detail page for Product ID: ${productId}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: '"Poppins", sans-serif'
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          width: '100%'
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#333',
            marginBottom: '1.5rem'
          }}
        >
          Product Detail
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              style={{
                flexBasis: '48%',
                backgroundColor: '#f9f9f9',
                padding: '1.5rem',
                borderRadius: '6px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
              }}
            >
              <h2
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#555',
                  marginBottom: '0.5rem'
                }}
              >
                Product ID: {product.id}
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#666',
                  marginBottom: '1.5rem'
                }}
              >
                {product.description}
              </p>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onClick={() => handleProductDetail(product.id)}
              >
                View Product Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;