import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

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
    </aside>
  );
};

export default CheckoutSideMenu;
