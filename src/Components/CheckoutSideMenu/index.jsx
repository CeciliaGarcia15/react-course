import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import "./styles.css";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
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
      <div className="px-6">
      {
        context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          
          />
        ))
      }
      </div>
      
    </aside>
  );
};

export default CheckoutSideMenu;
