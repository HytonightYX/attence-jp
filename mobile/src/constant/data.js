import React from 'react'

export const DATE_FORMAT  = 'YYYY/MM/DD'
export const MONTH_FORMAT = 'YYYY/MM'

export const navIconList = [{name:'打卡', url:'/', icon:'clock-circle'},{
                             name:'请假', url:'/leave', icon:'frown'       },{
                             name:'月报', url:'/month', icon:'calendar'    },{
                             name:'审核', url:'/audit', icon:'security-scan'},{
                             name:'设置', url:'/conf', icon:'setting'     }]


export const USER_TYPE = [
  {id: 1001, name: '正式社员'},
  {id: 1002, name: '契约社员'},
  {id: 1003, name: '派遣社员'},
  {id: 1004, name: 'BP社员'},
  {id: 1005, name: '??社员'},
]


export const CARD_MARK = {
  0: {
      style: {
        color: '#f50',
      },
      label: <strong>30分钟</strong>,
     },
  1: '35',
  2: '40',
  3: {
      style: {
        color: '#f50',
      },
      label: <strong>45分钟</strong>,
     },
  4: '50',
  5: '55',
  6: {
      style: {
        color: '#f50',
      },
      label: <strong>60分钟</strong>,
     }
}

export const CLOCK_STATUS = {
  CLOCK_INIT: 0,
  CLOCK_IN: 1,
  CLOCK_OUT: 2,
  CLOCK_DONE: 3
}
