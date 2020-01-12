import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  updateCollections,
  updateLoadingStatus
} from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectLoadingStatus } from "../../redux/shop/shop.selector";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      const { updateCollections, updateLoadingStatus } = this.props.actions;
      updateCollections(collectionMap);
      updateLoadingStatus();
    });
  }

  componentWillUnmount() {
    const { updateLoadingStatus } = this.props.actions;
    updateLoadingStatus();
  }

  render() {
    const { match, isLoading } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverview isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionID`}
          render={props => <CollectionPage isLoading={isLoading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    updateCollections: collectionMap =>
      dispatch(updateCollections(collectionMap)),
    updateLoadingStatus: () => dispatch(updateLoadingStatus())
  }
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
