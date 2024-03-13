import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const selectedPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await res.json();

      if (data && data.products) {
        setProducts(data.products);
      }
    })();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product, index) => {
            return (
              <span className="products__single" key={index}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disable"}
            onClick={() => selectedPageHandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(products.length / 10)].map((_, index) => {
            return (
              <span
                className={page === index + 1 ? "pagination__selected" : ""}
                key={index}
                onClick={() => selectedPageHandler(index + 1)}
              >
                {index + 1}
              </span>
            );
          })}
          <span
            className={page < products.length / 10 ? "" : "pagination__disable"}
            onClick={() => selectedPageHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
