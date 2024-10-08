import type { NextApiRequest, NextApiResponse } from 'next';
import request from '@/utils/ollama';
// import { ServerlessBridgeService } from '@/infra/alibaba-cloud/services/serverless-app';




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const headers = req.headers;
    const { onlyurl=false } = req.query;
    
    // const accessKeyId: any = process.env.ALIBABA_CLOUD_ACCESS_KEY_ID || headers['x-fc-access-key-id'];
    // const accessKeySecret: any = process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET || headers['x-fc-access-key-secret'];
    // const securityToken: any = process.env.ALIBABA_CLOUD_SECURITY_TOKEN || headers['x-fc-security-token'];
    // let credential = undefined;
    // if (accessKeyId) {
    //     credential = {
    //         accessKeyId,
    //         accessKeySecret,
    //         securityToken
    //     }
    // }
    // const serverlessBridgeService = new ServerlessBridgeService(credential);
    // const serverlessBridgeService = getAlibabaCloudServerlessBridge(headers);
    let status = 200;
    let data: any = {
        code: 200,
    }
    if(onlyurl){
        data.data = [process.env.ollamaApi+"/v1/chat/completions"]
    }
    else{
        try {
            const result = await request.get("/api/tags");
            // console.log(result)
            data.code = result.status;
            // const agentCraftAppList = .result;
            data.data = result.data;//agentCraftAppList.filter((item: any) => item.name.indexOf(appFilter) === 0 || (item.name.indexOf('AgentCraftApp') === 0 && appFilter === 'AgentCraft_FM')); //兼容最开始的FM命名
            
        } catch (e: any) {
            status = 500;
            data.code = status;
            data.error = e.message+e.stack;
        }
    }
    
    res.status(status).json(data);
}
