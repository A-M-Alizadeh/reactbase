export default {
    BASE_URL: 'http://172.16.10.134:8080',

    //..............................................................Real API Paths of Project
    Req_Login:{
      method: 'post',
      url:'/v2/samp/auth/login',
    },//---------------------------------------------user data requests
    Req_LoggedInModel:{
      method: 'get',
      url:'/v2/mobile/user/loggedInModel',
    },
    Req_Profile:{
      method: 'get',
      url:'/v2/mobile/user/profile/',
    },//----------------------------------------------task requests
    Req_TaskList:{ 
      method: 'post',
      url:'/v2/mobile/task/new',
    },
    Req_MyTaskList:{ 
      method: 'post',
      url:'/v2/mobile/task/mine',
    },
    Req_TaskPickUp:{
      method: 'get',
      url:'/v2/mobile/task/pickup/',
    },
    Req_TaskDetail:{
      method: 'get',
      url:'/v2/mobile/task/details/',
    },
    Req_TaskDone:{
      method: 'get',
      url:'/v2/mobile/task/done/',
    },
    Req_TaskCancel:{
      method: 'get',
      url:'/v2/mobile/task/cancel/',
    },
    Req_TaskIsRequested:{
      method: 'get',
      url:'/v2/mobile/task/isRequested/',
    },//----------------------------------------------reuest :) requests
    Req_RequestList:{
      method: 'post',
      url:'/v2/mobile/request/list',
    },
    Req_CancelRequest:{
      method: 'get',
      url:'/v2/mobile/request/cancel/',
    },

  };

