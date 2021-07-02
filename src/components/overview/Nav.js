import React, { useState } from "react";

let Nav = ({ product, fetchProduct, changeView, currentView }) => {
  const [productQuery, setProductQuery] = useState("");
  const onChange = (e) => setProductQuery(event.target.value);

  function changeProduct(e) {
    e.preventDefault();
    if (productQuery !== false && isNaN(Number(productQuery)) === false) {
      fetchProduct(productQuery);
    }
    setProductQuery("");
  }

  return (
    <nav className="nav">
      <div className="nav__left">
        <div
          onClick={() => changeView(!currentView)}
          className="nav__left--logo"
        >
          CREAM
        </div>

        <div className="nav__left--categories">
          <span className="nav__left--category">MENS</span>
          <span className="nav__left--category">WOMENS</span>
          <span className="nav__left--category">KIDS</span>
          <span className="nav__left--category">BABY</span>
        </div>
      </div>
      <div className="nav__right">
        <form id="search-form" onSubmit={(e) => changeProduct(e)}>
          <input
            placeholder="PRODUCT #"
            aria-label="product search"
            className="prod-search"
            name="product"
            value={productQuery}
            onChange={onChange}
          ></input>
          <button
            aria-label="search for product"
            id="search-form-btn"
            form="search-form"
            type="submit"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        <svg
          height="25pt"
          viewBox="0 -32 512.016 512"
          width="25pt"
          xmlns="http://www.w3.org/2000/svg"
          className="nav__left--loginIcon"
        >
          <path d="m192 213.339844c-58.816406 0-106.667969-47.847656-106.667969-106.664063 0-58.816406 47.851563-106.6679685 106.667969-106.6679685s106.667969 47.8515625 106.667969 106.6679685c0 58.816407-47.851563 106.664063-106.667969 106.664063zm0-181.332032c-41.171875 0-74.667969 33.492188-74.667969 74.667969 0 41.171875 33.496094 74.664063 74.667969 74.664063s74.667969-33.492188 74.667969-74.664063c0-41.175781-33.496094-74.667969-74.667969-74.667969zm0 0" />
          <path d="m368 448.007812h-352c-8.832031 0-16-7.167968-16-16v-74.667968c0-55.871094 45.460938-101.332032 101.332031-101.332032h181.335938c55.871093 0 101.332031 45.460938 101.332031 101.332032v74.667968c0 8.832032-7.167969 16-16 16zm-336-32h320v-58.667968c0-38.226563-31.105469-69.332032-69.332031-69.332032h-181.335938c-38.226562 0-69.332031 31.105469-69.332031 69.332032zm0 0" />
          <path d="m496 218.675781h-181.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h181.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m410.667969 304.007812c-4.097657 0-8.191407-1.558593-11.308594-4.691406-6.25-6.253906-6.25-16.386718 0-22.636718l74.027344-74.027344-74.027344-74.027344c-6.25-6.25-6.25-16.382812 0-22.632812s16.382813-6.25 22.636719 0l85.332031 85.332031c6.25 6.25 6.25 16.386719 0 22.636719l-85.332031 85.332031c-3.136719 3.15625-7.234375 4.714843-11.328125 4.714843zm0 0" />
        </svg>
        <svg
          height="25pt"
          viewBox="0 -31 512.00026 512"
          width="25pt"
          xmlns="http://www.w3.org/2000/svg"
          className="nav__left--cartIcon"
        >
          <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0" />
          <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
          <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
        </svg>
      </div>
    </nav>
  );
};

export default Nav;
