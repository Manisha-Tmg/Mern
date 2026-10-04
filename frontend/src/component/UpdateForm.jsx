import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isDamage, setIsDamage] = useState(false);
  const params = useParams();

  const handleUpdate = async () => {
    const data = {
      name: name,
      quantity: quantity,
      price: price,
      isDamage: isDamage,
    };

    const result = await axios({
      url: `http://localhost:8000/product/${params.id}`,
      method: "PATCH",
      data: data,
    });
  };

  const getDate = async () => {
    const data = await axios({
      url: `http://localhost:8000/product/${params.id}`,
      method: "GET",
    });
    setName(data.data.result.name);
    setQuantity(data.data.result.quantity);
    setPrice(data.data.result.price);
    setIsDamage(data.data.result.isDamage);
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <form>
      <div>
        <div>
          <div>
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              name=""
              id="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Quantity">Quantity: </label>
            <input
              type="text"
              name=""
              id="Quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Price">Price: </label>
            <input
              type="text"
              name=""
              id="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="Damage">Is Damage: </label>
            <input
              type="checkbox"
              name=""
              id="Damage"
              checked={isDamage}
              onChange={(e) => {
                setIsDamage(e.target.checked);
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
