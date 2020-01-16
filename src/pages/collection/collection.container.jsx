import { createStructuredSelector } from "reselect";
import { selectCollectionLoaded } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isFetching: state => !selectCollectionLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
