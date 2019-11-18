import React from 'react'
import { Icon, Form, Table, Input, Button,Skeleton, Modal, Tag, Divider, message } from 'antd'
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
      visible: false,
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
    let r = await this.props.userStore.getUserList()
    this.setState({ loading: false, userlist:r.data })
  }

  doStatus = async (record,status)=>{
		this.setState({ loading: true })
    let r = await this.props.userStore.setUserActive(record,status)
    this.setState({ loading: false, userlist:r.data })
  }

  

  doSetPos = (record,pos)=>{
    this.setState({ visible: true, uid:record.key, pos: pos });
  }

  handleOk = async () => {
    this.setState({ loading: true })
    let r = await this.props.userStore.setUserPos({uid:this.state.uid, pos: this.state.pos})
    this.setState({ loading: false, visible: false, userlist:r.data })
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  doDetail = ()=>{

  }

	render() {
		let userlist = this.state.userlist
		let host = 'https://manqc.site/'
		const {succ,visible, loading} = this.state

		const columns = [{
        title: '头像',
        dataIndex: 'face',
        render: d => <span className="m-face"><img src={ `${host}${d}` } alt=""/></span>
      },{
        title: '用户名',
        dataIndex: 'name',
      },{
        title: 'email',
        dataIndex: 'email',
      },{
        title: '联系方式',
        dataIndex: 'phone',
      },{
        title: '部门',
        dataIndex: 'dept',
      },{
        title: '职位',
        dataIndex: 'position',
        render: d => <span className="m-status">
        	{ d=='社长' && <Tag color="#f50"> {d}</Tag> } 
        	{ d=='部长' && <Tag color="#108ee9">{d}</Tag> }
        	{ d=='员工' && <Tag color="#87d068">{d}</Tag> }
        </span>
      },{
        title: '状态',
        dataIndex: 'status',
        render: d => <span className="m-status">
        	{ d==1 && <Tag color="red"> 正常</Tag> } 
        	{ d==0 && <Tag color="blue">未激活</Tag> }
        	{ d==2 && <Tag color="black">离职</Tag> }
        </span>
      },{
        title: '功能',
        key: 'action',
        render: (text, record, index) => (
        	<div className="m-fun">
        		<Button size="small" className="m-blue" onClick={this.doDetail.bind(this,record)}>详情</Button>
	          <Button size="small" className="c-green" onClick={this.doStatus.bind(this,record,1)}>激活</Button>
	          <Button size="small" className="c-black" onClick={this.doStatus.bind(this,record,2)}>离职</Button>
	          <Button size="small" className="c-orange" onClick={this.doSetPos.bind(this,record,'员工')}>任员工</Button>
	          <Button size="small" className="c-orange" onClick={this.doSetPos.bind(this,record,'部长')}>任部长</Button>
	          <Button size="small" className="c-orange" onClick={this.doSetPos.bind(this,record,'社长')}>任社长</Button>
        	</div>
        ),
      },
    ];

		
		return (
			<div className='g-user'>
				<div className="m-userlist">
					<Skeleton active loading={this.state.loading}>
						<Table size='small' dataSource={userlist} columns={columns} />
					</Skeleton>
				</div>

				<Modal
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={loading}
          onCancel={this.handleCancel} 
        >
          <p>确认提交任命<span className="m-strong">{this.state.pos}</span>职位?</p>
        </Modal>
			</div>
		)
	}
}

export default Login
