import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function Products() {
  const initialData = useLoaderData();
  const [data, setData] = useState(initialData);
  const productsDivRef = useRef(null);
  const [loading, setLoading] = useState(false); // Add loading state to prevent multiple simultaneous loads

  const loadMoreData = async () => {
    if (!loading) {
      setLoading(true); // Prevent further loads while fetching data
      // Simulate data fetch
      setTimeout(() => {
        setData(data.concat([...data])); // Duplicate the data for demonstration
        setLoading(false); // Reset loading state after data is loaded
      }, 1000); // Simulate network request delay
    }
  };

  useEffect(() => {

    const checkAndLoadMoreContent = () => {
      const div = productsDivRef.current;
      if (div && div.clientHeight >= div.scrollHeight) {
        loadMoreData(); // Call your function to load more data
      }
    };
    const handleScroll = () => {
      const div = productsDivRef.current;
      if (!div) return;

      const isAtBottom = div.scrollHeight - div.scrollTop <= div.clientHeight * 1.05; // Slight threshold to trigger before reaching the exact bottom
      if (isAtBottom) {
        loadMoreData(); // Load more data when scrolled near the bottom of the div
      }
    };

    const div = productsDivRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
      checkAndLoadMoreContent(); // Initial check to load more content if needed
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, [data, loading]); // Re-attach the scroll listener when data or loading state changes

  return (
    <div ref={productsDivRef} style={{ overflowY: 'auto', height: '500px' }}> {/* Adjust height as needed */}
      <h1>Products</h1>
      <ul>
        {data.map((x, index) => (
          <li key={index}><Link to={`${x.id}`}>{x.name}</Link></li>
        ))}
      </ul>
      {loading && <p>Loading more products...</p>} {/* Optional: Loading indicator */}
    </div>
  );
}

export default Products;

export async function loader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
      ]);
    }, 3000);
  });
}
