import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
function Home() {

  const context = useContext(ShoppingCartContext);
 
  
  const renderView = () => {
    if(context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        )
      }else{
        return(
          <div>We don't have anything</div>
        )
      }
  }
  return (
    <Layout>
      <div className="relative flex items-center justify-center w-80">
          <h1 className="text-xl font-medium">Exclusive Products</h1>
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Search a product"
          className="p-4 my-4 border border-black rounded-lg focus:outline-none w-80"
          onChange={(event)=> context.setSearchByTitle(event.target.value)}
          />
        </div>
    
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
