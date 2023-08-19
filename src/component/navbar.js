import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
// import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

const Navbar = () => {
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>redux toolkit</h3>
          <div className="nav-container">
            {/* <DoNotDisturbIcon /> */}
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{totalItems}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
