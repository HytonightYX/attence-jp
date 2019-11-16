import React from 'react'

export const DATE_FORMAT  = 'YYYY/MM/DD'
export const MONTH_FORMAT = 'YYYY/MM'

export const MENU_MAIN = 
   [{ title:'公司员工管理', icon:'diff',   path: '/user' },
    { title:'打卡记录管理', icon:'idcard', path: '/card' },
    { title:'请假记录管理', icon:'usergroup-add', path: '/leave' }]



export const USER_TYPE = [
  {id: 1001, name: '正式社员'},
  {id: 1002, name: '契约社员'},
  {id: 1003, name: '派遣社员'},
  {id: 1004, name: 'BP社员'},
  {id: 1005, name: '??社员'},
]

export const CLOCK_STATUS = {
  CLOCK_INIT: 0,
  CLOCK_IN: 1,
  CLOCK_OUT: 2,
  CLOCK_DONE: 3
}
