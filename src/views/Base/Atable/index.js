import React from 'react'
// import './index.less'
import { Card, Table } from 'antd';
export default class Atable extends React.Component{

  state={
    dataSource2:[
      {
        id:'0',
        userName:'Jack',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2000-01-01',
        address:'北京市海淀区奥林匹克公园',
        time:'09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      }
  ]};

  render(){
    const columns = [
      {
        title:'id',
        key:'id',
        dataIndex:'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
    ];

    return (
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
    );
  }
}
