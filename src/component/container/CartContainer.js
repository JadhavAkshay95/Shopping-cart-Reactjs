import { connect } from "react-redux";
import { addToCart } from "../../redux/Actions";
import Cart from "../functional/Cart";

const mapStateToProps = (state) => ({
  cartList: state.filter((item) => item.addToCart),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
