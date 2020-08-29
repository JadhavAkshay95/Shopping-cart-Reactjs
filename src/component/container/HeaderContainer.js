import { connect } from "react-redux";
import Header from "../functional/Header";

const mapStateToProps = (state) => ({
  cartCount: state.filter((item) => item.addToCart).length,
});

export default connect(mapStateToProps)(Header);
