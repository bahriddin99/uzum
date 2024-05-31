import "./style.scss";
import { useEffect, useState } from "react";
import { Carusel } from "../../components/ui/carusel/index.tsx";
import { Card } from "../../components/ui/card/index.tsx";
import { Container } from "@containers";
import useProductStore from "../../store/product";
import GlobalPaganation from "../../components/ui/global-paganation";
const index = () => {
  const { getProduct, data,totlCount } = useProductStore();
  const [params, setParams] = useState({ page: 1, limit: 6 });
  useEffect(() => {
    getProduct(params);
  }, [params]);

  const totleCuont2 = Math.ceil(totlCount / params?.limit);

  // Function useEffect <--------------------------------------
  useEffect(() => {
    getProduct(params);
  }, [params, setParams]);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get("page");
    const pageNuber = page ? parseInt(page) : 1;
    setParams((preParams) => ({
      ...preParams,
      page: pageNuber,
    }));
  }, [location.search]);
  //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  //--- pagination tett mui <----
  const changePage = (value: number) => {
    setParams((preParams) => ({
      ...preParams,
      page: value,
    }));
  };

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
            {data?.map((el, index) => {
              return <Card key={index} data={el} />;
            })}
          </div>
         
        </div>
        <GlobalPaganation
            totleCuont={totleCuont2}
            page={params?.page}
            setParams={changePage}
          />
      </Container>
    </div>
  );
};

export default index;
