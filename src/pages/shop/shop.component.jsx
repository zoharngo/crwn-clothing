import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      const { updateCollections } = this.props.actions;
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    updateCollections: collectionMap =>
      dispatch(updateCollections(collectionMap))
  }
});

export default connect(null, mapDispatchToProps)(ShopPage);
