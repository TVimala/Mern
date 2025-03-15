import React from 'react'
import { useSearchParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'product1' },
  { id: 2, name: 'product2' },
  { id: 3, name: 'product3' }
];

function Product() {
  const [searchParams, setSearchParams] = useSearchParams(); 
  const query = searchParams.get('query') || ''; 

  const handleSearch = (e) => {
    setSearchParams({ query: e.target.value }); 
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>
      <input type="text" value={query} onChange={handleSearch} />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
