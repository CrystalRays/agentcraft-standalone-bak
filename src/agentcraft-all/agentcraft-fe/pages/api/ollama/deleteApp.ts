import type { NextApiRequest, NextApiResponse } from 'next';
import request from '@/utils/ollama';
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
    const appName:any = req.query.appName;
    const headers = req.headers;
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
    // const serverlessBridgeService =  getAlibabaCloudServerlessBridge(headers);
    let status = 200;
    let data: any = {
        code: 200,
    }
    try {
        const result = await request.delete("/api/delete",{data:{name:appName}});
        data.code = result.status;
        data.data = result.data;
    } catch (e: any) {
        status = 500;
        data.code = status;
        data.error = e.message
    }
    res.status(status).json(data);
}
