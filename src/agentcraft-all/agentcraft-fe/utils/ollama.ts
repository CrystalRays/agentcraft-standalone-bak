import axios from 'axios';


const request = axios.create({
    baseURL: process.env.ollamaApi || '',
    headers: {
        'Content-Type': 'application/json'
    }
});
// 响应拦截器, 处理服务端的异常
request.interceptors.response.use(
    response => {
        console.log("ollamaRequest",response.config.method,`${process.env.ollamaApi}${response.config.url}`)
        return Promise.resolve(response);
    },
    error => {
        if (error?.response?.status) {
            console.log('From Ollama Server:', error);
            const { status, data } = error.response;
            return Promise.resolve({ status, data: { code: status, message: data.detail } });
        }
    }
);

export async function list(){
    let res=await request.get("/api/tags");
    return res;
}

export async function create(name:string,modelfile:string){
    let res=await request.post("/api/create",{name,modelfile});
    return res;
}

export async function show(name:string){
    let res=await request.post("/api/show",{name:name});
    return res;
}

export async function del(name:string){
    let res=await request.delete("/api/delete",{data:{name:name}});
    return res;
}

export async function pull(name:string){
    let res=await request.post("/api/pull",{name:name});
    return res;
}

export async function copy(source:string,destination:String){
    let res=await request.post("/api/copy",{source:source,destination:destination});
    return res;
}