import "./style.scss";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Container } from "@containers";
import useLikeStore from "../../store/like";
import { Card } from "../../components/ui/card/index.tsx";

const index = () => {
  const { getLikes, data } = useLikeStore();

  useEffect(() => {
    getLikes();
  }, []);
  return (
    <Container>
      <ToastContainer />
      <div>
        <div className="orginal-container mt-[150px]">
          <h1 className="py-2 text-gray-500 text-[20px]">
            {" "}
            Saralangan mahsulotlar{" "}
          </h1>
          <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {data?.map((el, index) => {
              return <Card key={index} data={el} />;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
