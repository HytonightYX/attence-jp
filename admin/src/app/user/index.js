import React from 'react'
import { Icon, Form, Table, Input, Button, Divider, message } from 'antd'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import './index.less'
import { computed } from 'mobx'
import token from 'util/token.js'
import get from 'util/getValue'


@inject('userStore')
@observer
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			userlist: [],
		}
	}

	getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

	async componentWillMount() {
    this.setState({ loading: true })
    let userlist = await this.props.userStore.getUserList()
    console.log(userlist)
    this.setState({ loading: false, userlist:userlist.data })
  }

	render() {
		let userlist = this.state.userlist
		

		const columns = [{
        title: '用户名',
        dataIndex: 'name',
      },{
        title: '联系方式',
        dataIndex: 'phone',
      },{
        title: '部门',
        dataIndex: 'dept',
      },{
        title: '职位',
        dataIndex: 'position',
      },
    ];

		
		return (
			<div className='g-user'>
				<div className="m-userlist">
					

					<Table size='small' dataSource={userlist} columns={columns} />;

				</div>
			</div>
		)
	}
}

export default Login
