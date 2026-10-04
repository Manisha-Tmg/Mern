import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadSpecific = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  const id = params.id;

  const getDate = async () => {
    const data = await axios({
      url: `http://localhost:8000/product/${id}`,
      method: "GET",
    });
    setProduct(data.data.result);
  };
  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>
      <p>The product name is {product?.name}.</p>
      <p>The product price is {product?.price}.</p>
      <p>The product price is {product?.quantity}.</p>
    </div>
  );
};

export default ReadSpecific;
