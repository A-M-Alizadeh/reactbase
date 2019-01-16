import {axiosInstance,axiosAuthInstance,tempToken} from './ApiHelper';
import APIPathHelper from './APIPathHelper';
import {store} from './../redux/store'

  //........................................Real APIs of Project

  export function Auth_Requests(){
    return{
      login: (_data)=>axiosInstance.post(`${APIPathHelper.Req_Login.url}`,_data)
    }
  }

  export function UserData_Requests(){
    return{
      loggedInModel: ()=>axiosAuthInstance.get(`${APIPathHelper.Req_LoggedInModel.url}`),
      profile: (specialityID)=>axiosAuthInstance.get(`${APIPathHelper.Req_Profile.url}${specialityID}`)
    }
  }

  export function Task_Requests(){
    return{
      allTasksList: (_data)=>axiosInstance.post(`${APIPathHelper.Req_TaskList.url}`,_data),
      myTasksList: (_data)=>axiosInstance.post(`${APIPathHelper.Req_MyTaskList.url}`,_data),
      taskPickUp: (taskID)=>axiosAuthInstance.get(`${APIPathHelper.Req_TaskPickUp.url}${taskID}`),
      taskDetail: (taskID)=>axiosAuthInstance.get(`${APIPathHelper.Req_TaskDetail.url}${taskID}`),
      taskDone: (taskID)=>axiosAuthInstance.get(`${APIPathHelper.Req_TaskDone.url}${taskID}`),
      taskCancel: (taskID)=>axiosAuthInstance.get(`${APIPathHelper.Req_TaskCancel.url}${taskID}`),
      taskIsRequested: (taskID)=>axiosAuthInstance.get(`${APIPathHelper.Req_TaskIsRequested.url}${taskID}`),
    }
  }

  export function Demand_Requests(){
    return{
      reqList: (_data)=>axiosAuthInstance.post(`${APIPathHelper.Req_RequestList.url}`,_data),
      cancelReq: (requestID)=>axiosAuthInstance.get(`${APIPathHelper.Req_CancelRequest.url}${requestID}`)
    }
  }