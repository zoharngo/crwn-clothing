import React, { useEffect, Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewPage = lazy(() =>
  import("../collections-overview/collections-overview.container")
);
const CollectionPage = lazy(() => import("../collection/collection.container"));

const ShopPage = ({ match, actions: { fetchCollectionStart } }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewPage}
        />
        <Route
          path={`${match.path}/:collectionID`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
  }
});

export default connect(null, mapDispatchToProps)(ShopPage);
