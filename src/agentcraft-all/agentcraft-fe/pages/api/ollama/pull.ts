import type { NextApiRequest, NextApiResponse } from 'next';
import request from '@/utils/ollama';
import { Readable } from 'stream';
// import { ServerlessBridgeService } from '@/infra/alibaba-cloud/services/serverless-app';

interface ServerlessAppRequestBody {
    name: string,
    description: string,
    roleArn: string,
    template: string,
    parameters: any,
    autoDeploy: boolean
}

// interface ServerlessAppResoponseBody {
//     name: string,
//     description: string,
//     roleArn: string,
//     template: string,
//     parameters: any,
//     repoSource: object,
//     createdTime: number
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body: any = req.body;
    const headers = req.headers;
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'text/event-stream;charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('X-Accel-Buffering', 'no')
  
    // const mainAccountId = process.env.FC_ACCOUNT_ID || headers['x-fc-account-id'];
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
    const { modelfile = '', name = ''} = body;
    //    region: process.env.Region || 'cn-hangzhou',
    // await serverlessBridgeService.getMainOrCreateAccountRole();
    let status = 200;
    const data: any = {
        code: 200,
    }
    try {
        console.log("pulling")
        const result = await request.post("/api/pull",{name});
        const stream = result.data as unknown as Readable
        return res.send(stream);
    } catch (e: any) {
        status = 500;
        data.code = status;
        data.error = e.message
        return res.status(status).json(data);
    }
    // 
}
