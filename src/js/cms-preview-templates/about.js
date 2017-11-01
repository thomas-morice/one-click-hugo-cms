import React from "react";
import format from "date-fns/format";


export default class AboutPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let pageTheme = entry.getIn(['data', 'page_theme']);
    return  <div className={ `page page--${pageTheme}` }>
                <div className='page__header'> 
                    <div className='page__title'> { entry.getIn(['data', 'headline', 'title']) } </div>
                    <div className='page__subtitle'> { entry.getIn(['data', 'headline', 'text']) } </div>
                </div>
            </div>;
  }
}