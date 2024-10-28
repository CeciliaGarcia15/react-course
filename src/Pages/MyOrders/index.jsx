import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";


function MyOrders() {
  const context = useContext(ShoppingCartContext);  
  
  return (
      <Layout>
        <div className="relative flex items-center justify-center w-80">
          <h1 className="text-xl font-medium">My Orders</h1>
        </div>
    
    {
      context.order.map((order,index)=>(
      <Link key={index} to={`/my-orders/${index}`}>
        <OrdersCard 
        totalPrice={order.totalPrice} 
        totalProducts={order.totalProducts}
        />  
      </Link>

      ))
    }
    
   </Layout>
    )
  }
  
  export default MyOrders