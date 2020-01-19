import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import CollectionOverviewPage from "../collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.container";

const ShopPage = ({ match, actions: { fetchCollectionStart } }) => {

  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewPage} />
      <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
  }
});

export default connect(null, mapDispatchToProps)(ShopPage);
