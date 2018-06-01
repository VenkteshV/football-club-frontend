import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import SearchComponent from './SearchComponent.jsx';

export default class FootballerList extends React.Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

  }
  render() {
    let selectRowProp = {
    mode: 'checkbox',
    clickToSelect: false,
    bgColor: 'transparent',
  };
  let options = {
    sortName: 'name',
    sortOrder: 'asc',
    noDataText: 'There is no data to display',
  };

    var fcList = this.props.config.config;
    let data = !_.isEmpty(_.trim(this.props.config.searchResult)) ? this.props.config.searchResult :fcList;
      return (
        <div className="fc-container">
          <SearchComponent searchConditions={this.props.searchConditions} config={this.props.config}/>
          <div> <p className="label-style"> Displaying {data.length} records</p>
          <BootstrapTable
        ref={(bootstrapTable) => {
          this.table = bootstrapTable;
        }}
        containerClass="fc-list-container"
        bordered={true}
        hover
        tableBodyClass="fc-table-content"
        tableHeaderClass="fc-table-header"
        height='1000'
        data={data}
        options={options}
        scrollTop={'Top'}
        selectRow={selectRowProp}
        multiColumnSort={2}>
        <TableHeaderColumn id="fc-header-name" columnClassName="fc-content-name" className="Name"
                           dataSort={true} isKey={true} dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn id="fc-header-category" columnClassName="fc-content-category"
                           dataSort={true} dataField='club'>Club</TableHeaderColumn>
        <TableHeaderColumn id="fc-header-nationality" className = "nationality" columnClassName="fc-content-nationality"
                           dataField='nationality' dataFormat={this.priorTo} >Nationality</TableHeaderColumn>
        <TableHeaderColumn id="fc-header-id" className = "contractExpiry" columnClassName="fc-content-contractExpiry"
                           dataField='contractExpiry'>contractExpiry</TableHeaderColumn>
         <TableHeaderColumn id="fc-header-penalties" className = "penalties" columnClassName="fc-content-penalties"
                            dataField='penalties' >penalties</TableHeaderColumn>
         <TableHeaderColumn id="fc-header-workRate" className="workRate" columnClassName="fc-content-workRate"
                            dataField='workRate'>workRate</TableHeaderColumn>

      </BootstrapTable>
          </div>
        </div>
      );
}
}
FootballerList.propTypes = {
  config: PropTypes.object,
  searchConditions: PropTypes.func,
};
