import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionOverviewPage from "../collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.container";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props.actions;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewPage}
        />
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
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  }
});

export default connect(null, mapDispatchToProps)(ShopPage);
