"use strict";exports.id=3502,exports.ids=[3502],exports.modules={3502:(e,t,s)=>{s.d(t,{G:()=>ServerlessBridgeService});var i=s(3272),c=s(78),r=s.n(c),n=s(2151),l=s.n(n),a=s(8113),o=s.n(a);let ServerlessDevsClient=class ServerlessDevsClient extends r(){constructor(e){super(e)}};let FcClient=class FcClient extends o(){constructor(e){super(e)}async getOrCreateAppWorkSpace(){}};let ServerlessBridgeServerlessDevs=class ServerlessBridgeServerlessDevs{constructor(e){this.client=this.createServerlessDevsClient(e)}createServerlessDevsClient(e){let t=e??{accessKeyId:process.env.AK,accessKeySecret:process.env.SK};t.endpoint="serverless-dualstack.cn-hangzhou.aliyuncs.com";let s=new i.Config(t);return new ServerlessDevsClient(s)}async createApplication(e){let t=new c.CreateApplicationRequest(e),s=await this.client.createApplication(t);return s}async deleteApplication(e){let t=await this.client.deleteApplication(e);return t}async getApplication(e){return await this.client.getApplication(e)}async listApplications(){let e=new c.ListApplicationsRequest({}),t=await this.client.listApplications(e);return t}};let ServerlessBridgeFc=class ServerlessBridgeFc{constructor(e,t){this.client=this.createFcClient(e,t)}createFcClient(e,t){let s=e??{accessKeyId:process.env.AK,accessKeySecret:process.env.SK};s.endpoint=`${t}.${process.env.Region}.fc.aliyuncs.com`;let c=new i.Config(s);return new FcClient(c)}async invokeFunction(e,t){let s=new a.InvokeFunctionHeaders({}),i=new a.InvokeFunctionRequest({body:l().toBytes(JSON.stringify(t))}),c=new n.RuntimeOptions({});return await this.client.invokeFunctionWithOptions(e.serviceName,e.functionName,i,s,c)}async listFunctions(e){let t=new a.ListFunctionsHeaders({}),s=new a.ListFunctionsRequest(e),i=new n.RuntimeOptions({});return await this.client.listFunctionsWithOptions("",s,t,i)}async updateFunction(e){let t=new a.UpdateFunctionHeaders({}),s=e.environmentVariables,i=new a.UpdateFunctionRequest({environmentVariables:s}),c=new n.RuntimeOptions({});return await this.client.updateFunctionWithOptions(e.serviceName,e.functionName,i,t,c)}async getService(e){let t=new a.GetServiceHeaders({}),s=new a.GetServiceRequest({}),i=new n.RuntimeOptions({});return await this.client.getServiceWithOptions(e.serviceName,s,t,i)}async getFunction(e){let t=new i.Params({action:"GetFunction",version:"2021-04-06",protocol:"HTTPS",method:"GET",authType:"AK",style:"FC",pathname:`/2021-04-06/services/${e.serviceName}/functions/${e.functionName}`,reqBodyType:"json",bodyType:"json"}),s=new n.RuntimeOptions({}),c=new i.OpenApiRequest({});return await this.client.callApi(t,c,s)}};var y=s(487),u=s.n(y);let RamClient=class RamClient extends u(){constructor(e){super(e)}};let ServerlessBridgeRam=class ServerlessBridgeRam{constructor(e){this.client=this.createRameClient(e)}createRameClient(e){let t=e??{accessKeyId:process.env.AK,accessKeySecret:process.env.SK};t.endpoint="ram.aliyuncs.com";let s=new i.Config(t);return new RamClient(s)}async createUser(e){let t=new y.CreateUserRequest(e);await this.client.createUser(t)}async getRole(e){let t=new y.GetRoleRequest({roleName:e}),s=new n.RuntimeOptions({}),i=await this.client.getRoleWithOptions(t,s);return i.body}async getUser(e){try{let t=new y.GetUserRequest({userName:e}),s=new n.RuntimeOptions({}),i=await this.client.getUserWithOptions(t,s);return i.body}catch(e){return{error:e}}}async deleteAccessKey(e,t){let s=new y.DeleteAccessKeyRequest({userAccessKeyId:t,userName:e}),i=new n.RuntimeOptions({}),c=await this.client.deleteAccessKeyWithOptions(s,i);return c.body}async createAccessKey(e){let t=new y.CreateAccessKeyRequest({userName:e}),s=await this.client.createAccessKey(t);return s.body}async listAccessKeys(e){try{let t=new y.ListAccessKeysRequest({userName:e}),s=new n.RuntimeOptions({}),i=await this.client.listAccessKeysWithOptions(t,s);return i.body?.accessKeys.accessKey}catch(e){return[]}}async createRole(e){let t=new y.CreateRoleRequest(e),s=new n.RuntimeOptions({}),i=await this.client.createRoleWithOptions(t,s);return i.body}async attactRolePolicy(e){let t=new y.AttachPolicyToRoleRequest(e),s=new n.RuntimeOptions,i=await this.client.attachPolicyToRoleWithOptions(t,s);return i.body}async attachPolicyToUser(e){try{let t=new y.AttachPolicyToUserRequest(e),s=new n.RuntimeOptions({}),i=await this.client.attachPolicyToUserWithOptions(t,s);return i.body}catch(e){return{error:e}}}async detachPolicyFromUser(e){try{let t=new y.DetachPolicyFromUserRequest(e),s=new n.RuntimeOptions({}),i=await this.client.detachPolicyFromUserWithOptions(t,s);return i.body}catch(e){return{error:e}}}async createPolicy(e){try{let t=new y.CreatePolicyRequest(e),s=new n.RuntimeOptions({});return await this.client.createPolicyWithOptions(t,s)}catch(e){return{error:e}}}};var p=s(319),v=s.n(p);let StsClient=class StsClient extends v(){constructor(e){super(e)}};let ServerlessBridgeSts=class ServerlessBridgeSts{constructor(e){this.client=this.createStsClient(e)}createStsClient(e){let t=e??{accessKeyId:process.env.AK,accessKeySecret:process.env.SK};t.endpoint=`sts.${process.env.Region}.aliyuncs.com`;let s=new i.Config(t);return new StsClient(s)}async assumeRole(e){e.roleArn="";let t=new p.AssumeRoleRequest(e),s=await this.client.assumeRole(t);return s.body}async getCallerIdentity(){return await this.client.getCallerIdentity()}async assumeRoleWithSAML(){}};var h=s(2807),w=s.n(h);let VpcClient=class VpcClient extends w(){constructor(e){super(e)}};let ServerlessBridgeVpc=class ServerlessBridgeVpc{constructor(e){this.client=this.createVpcClient(e)}createVpcClient(e){let t=e??{accessKeyId:process.env.AK,accessKeySecret:process.env.SK};t.endpoint="vpc.aliyuncs.com";let s=new i.Config(t);return new VpcClient(s)}describeVpcs({vpcId:e,regionId:t}){let s=new h.DescribeVpcsRequest({regionId:t,vpcId:e}),i=new n.RuntimeOptions({});return this.client.describeVpcsWithOptions(s,i)}async createVSwitch(e){let t=new h.CreateVSwitchRequest(e),s=new n.RuntimeOptions({});return await this.client.createVSwitchWithOptions(t,s)}};process.env.FcConsoleAssumeRoleName;let d="AliyunFCServerlessDevsRole",S={Statement:[{Action:"sts:AssumeRole",Effect:"Allow",Principal:{Service:["fc.aliyuncs.com"]}}],Version:"1"},A=["AliyunFCServerlessDevsRolePolicy","AliyunFCDefaultRolePolicy","AliyunFCFullAccess","AliyunNASFullAccess","AliyunVPCFullAccess"];let ServerlessBridgeService=class ServerlessBridgeService{constructor(e,t){this.config=e,this.serverlessBridgeRam=new ServerlessBridgeRam(e),this.serverlessBridgeSts=new ServerlessBridgeSts(e),this.serverlessBridgeServerlessDevs=new ServerlessBridgeServerlessDevs(e),this.serverlessBridgeFc=new ServerlessBridgeFc(e,t),this.serverlessBridgeVpc=new ServerlessBridgeVpc(e)}getServerlessBridgeRam(){return this.serverlessBridgeRam}getServerlessBridgeSts(){return this.serverlessBridgeSts}getServerlessBridgeVpc(){return this.serverlessBridgeVpc}getServerlessBridgeFc(e,t){return new ServerlessBridgeFc(t,e)}getServerlessBridgeServerlessDevs(){return this.serverlessBridgeServerlessDevs}getServerlessSubBridgeServerlessDevs(e){return new ServerlessBridgeServerlessDevs(e)}async getMainOrCreateAccountRole(){try{let e=this.getServerlessBridgeRam(),t=await e.getRole(d);return t}catch(e){await this.createServerlessDevsRoleAndAttactPolicy()}}async createServerlessDevsRoleAndAttactPolicy(){let e=this.getServerlessBridgeRam();for(let t of(await e.createRole({roleName:d,description:"created by serverless bridge",assumeRolePolicyDocument:S}),A))await e.attactRolePolicy({policyType:"System",policyName:t,roleName:d})}async attachServerlessDevsPolicyToUser(e){try{let t=this.getServerlessBridgeRam(),s={};return s.AliyunRAMFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunRAMFullAccess",userName:e}),s.AliyunSTSAssumeRoleAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunSTSAssumeRoleAccess",userName:e}),s.AliyunFCDefaultRolePolicy=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunFCDefaultRolePolicy",userName:e}),s.AliyunFCServerlessDevsRolePolicy=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunFCServerlessDevsRolePolicy",userName:e}),s.AliyunFCFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunFCFullAccess",userName:e}),s.AliyunVPCFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunVPCFullAccess",userName:e}),s.AliyunNASFullAccess=await t.attachPolicyToUser({policyType:"System",policyName:"AliyunNASFullAccess",userName:e}),s}catch(e){throw e}}async reAttachSubAccountPolicy(e,t){let s=`{
      "Version": "1",
      "Statement": [
        {
          "Action": "ram:ListPoliciesForUser",
          "Effect": "Allow",
          "Resource": "*"
        },
        {
          "Action": [
            "fc:GetService",
            "fc:ListServices",
            "fc:GetResourceTags"
          ],
          "Effect": "Allow",
          "Resource": "acs:fc:${t}:*:services/${e}-service*"
        },
        {
          "Action": "fc:ListFunctions",
          "Effect": "Allow",
          "Resource": "acs:fc:${t}:*:services/${e}-service*/functions/*"
        },
        {
          "Action": [
            "fc:ListInstances",
            "fc:UpdateFunction",
            "fc:GetFunction",
            "fc:GetFunctionCode",
            "fc:ListFunctions",
            "fc:InvokeFunction",
            "fc:GrantTempCodeBucketPermission"
          ],
          "Effect": "Allow",
          "Resource": "acs:fc:${t}:*:services/${e}-service*/functions/*"
        }
      ]
    }`,i=`${e}-customer-policy`;return await this.serverlessBridgeRam.createPolicy({policyName:`${e}-customer-policy`,description:"created by serverless-bridge dont remove",policyDocument:s}),await this.serverlessBridgeRam.attachPolicyToUser({policyType:"Custom",policyName:i,userName:e})}async detachServerlessDevsPolicyFromUser(e){let t=this.getServerlessBridgeRam();await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunRAMFullAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunSTSAssumeRoleAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunFCDefaultRolePolicy",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunFCServerlessDevsRolePolicy",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunFCFullAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunVPCFullAccess",userName:e}),await t.detachPolicyFromUser({policyType:"System",policyName:"AliyunNASFullAccess",userName:e})}async deleteSubAccountAccessKey(e,t){try{let s=this.getServerlessBridgeRam(),i=await s.deleteAccessKey(e,t);return i}catch(e){throw e}}async createSubAccountAccessKey(e){try{let t=this.getServerlessBridgeRam(),s=await t.listAccessKeys(e);if(2===s.length){let i=s[0].accessKeyId;await t.deleteAccessKey(e,i)}let i=await t.createAccessKey(e);return i}catch(e){throw e}}async getOrCreateSubAccount(e){try{let t=this.getServerlessBridgeRam(),s=await t.getUser(e);return s.error&&(s=await t.createUser({userName:e})),s}catch(e){throw e}}async createSubAccountApplication(e,t,s){try{let i=this.getServerlessSubBridgeServerlessDevs({accessKeyId:e,accessKeySecret:t}),c=await i.createApplication(s);return c}catch(e){throw e}}async deleteApplication(e){let t=this.getServerlessBridgeServerlessDevs();return await t.deleteApplication(e)}async createMainAccountApplication(e){let t=this.getServerlessBridgeServerlessDevs();return await t.createApplication(e)}async getApplication(e){let t=this.getServerlessBridgeServerlessDevs();return await t.getApplication(e)}async listApplications(){let e=this.getServerlessBridgeServerlessDevs();return await e.listApplications()}async subAccountAssumeRole(e){let t=this.getServerlessBridgeSts();return await t.assumeRole(e)}async invokeFunction(e,t){return await this.serverlessBridgeFc.invokeFunction(e,t)}async listFunctions(e){return await this.serverlessBridgeFc.listFunctions(e)}async updateFunction(e){return await this.serverlessBridgeFc.updateFunction(e)}async getFunction(e){return await this.serverlessBridgeFc.getFunction(e)}async getService(e){return await this.serverlessBridgeFc.getService(e)}async describeVpcs(e){return await this.serverlessBridgeVpc.describeVpcs(e)}async createVSwitch(e){return await this.serverlessBridgeVpc.createVSwitch(e)}}}};