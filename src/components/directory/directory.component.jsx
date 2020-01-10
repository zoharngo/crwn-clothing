import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirctorySections } from "../../redux/directory/dirctory.selector";
import "./directory.component.scss";

const Dirctory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirctorySections
});

export default connect(mapStateToProps)(Dirctory);
