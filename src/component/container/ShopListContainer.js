import { connect } from "react-redux";
import { addToCart } from "../../redux/Actions";
import ShopList from "../functional/ShopList";

const mapStateToProps = (state) => ({
  productList: state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
