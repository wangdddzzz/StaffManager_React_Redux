import React, { Component } from 'react';
import StaffItem from './StaffItem/StaffItem';
import { mapStateToProps } from './Panel_mapToProps';
import { connect } from 'react-redux';
require('./Panel.css');

class StaffItemPanel extends Component {
    render() {
        let items = [];
        if (this.props.items.length === 0) {
            items.push(<tr><th colSpan='5' className='tempEmpty'>暂无用户</th></tr>);
        } else {
            this.props.items.forEach(item => {
                items.push(<StaffItem key={item.key} item={item} />)
            })
        }
        return (
            <table className='itemPanel'>
                <thead>
                    <tr>
                        <th className='itemTd' width='18%'>姓名</th>
                        <th className='itemTd' width='18%'>年龄</th>
                        <th className='itemTd' width='18%'>身份</th>
                        <th className='itemTd' width='18%'>性别</th>
                        <th className='itemTd' width='28%'>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        )
    }
}

StaffItemPanel = connect(mapStateToProps)(StaffItemPanel);

export default StaffItemPanel