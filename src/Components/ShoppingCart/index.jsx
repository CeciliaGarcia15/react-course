import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)
    const openCheckoutSideMenu = () => {
        context.openCheckout()
        context.closeProductDetail()
    }

    return (
        <div className="relative flex gap-0.5 items-center" onClick={() => openCheckoutSideMenu()}>
            <ShoppingBagIcon className="cursor-pointer size-6 fill-none stroke-black"/>
            <div className="absolute bottom-3.5 left-3.5 flex justify-center 
            items-center rounded-full bg-black size-4 text-xs text-white"
            >
            {context.cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart