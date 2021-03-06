import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './Header_mapToProps';
import $ from 'jquery';
require('./Header.css');

class StaffHeader extends Component {

  //搜索框onChange响应函数
  descripSearch() {
    let bar = this.refs.searchBar;
    //回调函数
    this.props.descripSearch(bar.value);
  }

  //身份框onChange响应函数
  idSearch() {
    let index = ['', '主任', '老师', '学生', '实习']
    let $select = $('#idSelect');
    let value = $select.val();
    //回调函数
    this.props.idSearch(index[value]);
  }

  //排序框onChange响应函数
  orderSearch() {
    let value = $('#orderSelect').val();
    //回调函数
    this.props.orderSearch(value);
  }


  render() {
    return (
      <div className='headerBox'>
        <h3>人员管理系统</h3>
        <table className='optHeader'>
          <tbody>
            <tr>
              <td className='headerTd'><input ref='searchBar' type="text" placeholder='Search...' onChange={this.descripSearch.bind(this)} /></td>
              <td className='headerTd'>
                <label htmlFor="idSelect">人员筛选 </label>
                <select id="idSelect" onChange={this.idSearch.bind(this)}>
                  <option value="0">全部</option>
                  <option value="1">主任</option>
                  <option value="2">老师</option>
                  <option value="3">学生</option>
                  <option value="4">实习</option>
                </select>
              </td>
              <td className='headerTd'>
                <label htmlFor="orderSelect">排列方式 </label>
                <select id="orderSelect" onChange={this.orderSearch.bind(this)}>
                  <option value="0">身份</option>
                  <option value="1">年龄升</option>
                  <option value="2">年龄降</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

StaffHeader = connect(null, mapDispatchToProps)(StaffHeader);

export default StaffHeader