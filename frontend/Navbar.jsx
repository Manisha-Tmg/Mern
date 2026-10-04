import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/create"} style={{ textDecoration: "none" }}>
        Create Product
      </NavLink>
      <NavLink
        to={"/read"}
        style={{ marginLeft: "10px", textDecoration: "none" }}
      >
        Read Product
      </NavLink>
      {/* <NavLink
        to={"/update"}
        style={{ marginLeft: "10px", textDecoration: "none" }}
      >
        Update Product
      </NavLink> */}
      {/* <NavLink
        to={"/delete"}
        style={{ marginLeft: "10px", textDecoration: "none" }}
      >
        Delete Product
      </NavLink> */}
    </div>
  );
};

export default Navbar;
