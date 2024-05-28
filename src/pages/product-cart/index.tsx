import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCarts from "../../components/ui/product-card";
import useProductStore from "../../store/product";

const ProductCart = () => {
  const { getIdProduct } = useProductStore();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const data = await getIdProduct(id);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="pt-[120px]">
        <div className=" pt-[40px]">
          <ProductCarts product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCart;
