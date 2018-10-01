import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {

    // 封装jsonp
    static jsonp(options) {
      return new Promise((resolve, reject) => {
        JsonP(options.url, {
          param: 'callback'
        }, function (err, response) {
          if (response) {
            // debugger;
            resolve(response);
          } else {
            reject(response.messsage);
          }
        })
      })
    }

    static ajax(options){
        let loading;
        // if (options.data && options.data.isShowLoading !== false){
        //     loading = document.getElementById('ajaxLoading');
        //     loading.style.display = 'block';
        // }
        // let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        // let baseApi = ' https://easy-mock.com/mock/5bac4d5f8e6cec555097b77b/mock';
        let baseApi = 'http://127.0.0.1:5000';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                // if (options.data && options.data.isShowLoading !== false) {
                //     loading = document.getElementById('ajaxLoading');
                //     loading.style.display = 'none';
                // }
                if (response.status == '200'){
                    // let res = response.data;
                    // console.log(res);
                    let flag = true;
                    if (flag){
                      resolve(response);
                    }else{
                      Modal.info({
                            title:"提示",
                            content:response.msg
                        })
                    }
                }else{
                  reject(response.data);
                }
            })
        });
    }
}
