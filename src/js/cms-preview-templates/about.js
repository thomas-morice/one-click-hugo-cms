import React from "react";
import format from "date-fns/format";


export default class AboutPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    let pageTheme = getAsset(entry.getIn(['data', 'page_theme']));

    return <div className="page page--"></div>;
  }
}
