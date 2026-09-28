import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAll = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const data = await axios({
      url: "http://localhost:8000/product",
      method: "GET",
    });
    setProducts(data.data.result);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleView = (_id) => {
    return async () => {
      navigate(`/readSpecific/${_id}`);
    };
  };
  const handleUpdate = (_id) => {
    return async () => {
      navigate(`/update/${_id}`);
    };
  };

  return (
    <div>
      {products.map((value, i) => {
        return (
          <div key={i}>
            <p>
              The name is {value.name} quantity is {value.quantity} price is
              {value.price}
            </p>
            <button onClick={handleView(value._id)}>View</button>
            <button
              style={{ marginLeft: "10px" }}
              onClick={handleUpdate(value._id)}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAll;
