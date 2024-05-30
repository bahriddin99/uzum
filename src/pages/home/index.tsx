import "./style.scss";
import { useEffect, useState } from "react";
import { Carusel } from "../../components/ui/carusel/index.tsx";
import { Card } from "../../components/ui/card/index.tsx";
import { Container } from "@containers";
import useProductStore from "../../store/product";

const index = () => {
  const { getProduct, data } = useProductStore();
  const [params] = useState({ page: 1, limit: 6 });
  useEffect(() => {
    getProduct(params);
  }, [params]);

  return (
    <div className="orginal-container ">
      <Container>
        <div className="pt-[130px]">
          <Carusel />
        </div>
        <div className="py-5">
          <h1 className="text-[22px]  text-black font-bold">
            Bizning Mahsulaotlar{" "}
          </h1>
          <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {data?.map((el , index) => {
              return <Card key={index}  data={el} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
