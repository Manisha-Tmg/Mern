import { useState } from "react";

const UpdateForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [isDamage, setIsDamage] = useState(false);

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
          <button onClick={handleClick}>Update</button>
        </div>
      </div>
    </form>
  );
};

export default UpdateForm;
