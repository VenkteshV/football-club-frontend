import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class SearchComponent extends React.Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);
 this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.props.searchConditions(event.target.value);
  }

  render() {
    const searchText = _.isEmpty(this.props.config.searchText) ? '' : this.props.config.searchText;
    return (
      <div className="search-filter">
        <div className="search-container">
          <div>
              <div className="search-form">
                <div id="search-keyword">
                  <p className="label-style">SEARCH</p>
                  <div id="search-box">
                    <input
                      className='search-box-element'
                      type="text"
                      placeholder="Keyword"
                      value={searchText}
                      onChange={this.handleSearchChange.bind(this)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

SearchComponent.propTypes = {
  config: PropTypes.object,
searchConditions: PropTypes.func,
};
