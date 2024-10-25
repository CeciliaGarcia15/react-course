import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

import "./styles.css";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };
  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.24",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } fixed right-0 flex-col bg-white border border-black rounded-lg checkout-side-menu`}
    >
      <div className="flex items-center justify-between p-6 ">
        <h2 className="text-xl font-medium">My Order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XMarkIcon className="text-black size-6" />
        </div>
      </div>
      <div className="flex-1 px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex items-center justify-between mb-2">
          <span className="font-light ">Total:</span>
          <span className="text-xl font-medium ">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
        <button
          className="w-full py-3 text-white bg-black rounded-lg"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
        </Link>
        
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
