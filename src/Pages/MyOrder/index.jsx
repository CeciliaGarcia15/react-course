import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
    return (
      <Layout>
        <div className="relative flex items-center justify-center mb-6 w-80">
        <Link to='/my-orders' className="absolute left-0">
        <ChevronLeftIcon 
          className="text-black cursor-pointer size-6"
          />
        </Link>
        
        
          <h1> My order</h1>
          
        </div>
       
        <div className="flex flex-col w-80">

        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
      </Layout>
    )
  }
  
  export default MyOrder
