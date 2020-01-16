import { createStructuredSelector } from "reselect";
import { selectFetchingStatus } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isFetching: selectFetchingStatus
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;