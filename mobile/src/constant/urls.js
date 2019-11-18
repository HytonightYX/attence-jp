import { API_SERVER } from './apis'

/* User 相关 API */
export const API_USER_REGISTER       = API_SERVER + '/Register'
export const API_USER_LOGIN          = API_SERVER + '/Login'
export const API_USER_CLOCK_INFO     = API_SERVER + '/ClockInfo'
export const API_USER_CLOCK          = API_SERVER + '/Clock'
export const API_USER_FACE_UPLOAD    = API_SERVER + '/FaceUpload'
export const API_USER_FACE_CHECK     = API_SERVER + '/FaceCheck'


/* Leave 相关 API */
export const API_LEAVE_UPLOAD      = API_SERVER + '/UploadFile'
export const API_LEAVE_APPLY_LEAVE = API_SERVER + '/leave/ApplyLeave'



/* Conf 相关 API */
export const API_CONF_SAVE_CARDSCHE = API_SERVER + '/SaveCardSche'
export const API_CONF_LOAD_CARDSCHE = API_SERVER + '/LoadCardSche'


/* Comp 相关 API */
export const API_COMP_POS_LIST = API_SERVER + '/CompPosList'
export const API_COMP_DEPT_LIST = API_SERVER + '/CompDeptList'




export const HOST_IMG = API_SERVER + '/'
