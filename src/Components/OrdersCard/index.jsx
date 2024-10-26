import { XMarkIcon } from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { totalPrice,totalProducts } = props;
  
  

  return (
    <div className="flex items-center justify-between mb-3 border border-black">
     <p className="">
        <span>01.02.24</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
     
     </p>
      
    </div>
  );
};

export default OrdersCard;
