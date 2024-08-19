import axios from 'axios';
// import { IconX } from '@tabler/icons-react';
// import { notifications } from '@mantine/notifications';

const request = axios.create({
    baseURL: process.env.ollamaApi || '',
    headers: {
        'Content-Type': 'application/json'
    }
});
// 响应拦截器, 处理服务端的异常

// request.interceptors.response.use(
//     response => {
//         console.log("ollamaRequest",response.config.method,`${process.env.ollamaApi}${response.config.url}`)
        
//         return Promise.resolve(response);
//     },
//     error => {
//         console.log('From Ollama Server:', error);
//         if (error?.response?.status) {
//             const { status, data } = error.response;
//             return Promise.resolve({ status, data: { code: status, message: data.detail } });
//         }
//         else{
//             return Promise.resolve({ status:500 , data: { code: 500, message: error.message } });
//         }
//     }
// );
export default request;

// export async function list(){
//     // console.log("ollama list")
//     let res=await request.get("/api/tags");
//     // console.log(res)
//     return res;
// }

// export async function create(name:string,modelfile:string){
//     let res=await request.post("/api/create",{name,modelfile});
//     return res;
// }

// export async function show(name:string){
//     let res=await request.post("/api/show",{name:name});
//     return res;
// }

// export async function del(name:string){
//     let res=await request.delete("/api/delete",{data:{name:name}});
//     return res;
// }

// export async function pull(name:string){
//     let res=await request.post("/api/pull",{name:name});
//     return res;
// }

// export async function copy(source:string,destination:String){
//     let res=await request.post("/api/copy",{source:source,destination:destination});
//     return res;
// }

// export async function search(q:string,c:string,p:number,l:number){
//     let res=await request.post("/api/search",{q:q,c:c,p:p,l:l});
//     return res;
// }
