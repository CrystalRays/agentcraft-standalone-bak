import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { Anchor, Box, Text, Title, Paper, Flex, ActionIcon, Grid, } from '@mantine/core';
import { IconArrowBackUp } from '@tabler/icons-react';
import { useFoundationModelStore, getFoundationModel } from 'store/foundationModel';
import { FM_APP_STATUS, FM_TEMPLATE_ACCESS_API_FUNCTION_MAP } from 'constants/foundation-model';
import CopyToClipboard from 'components/CopyToClipboard';
// import '@mantine/code-highlight/styles.css';
import { Prism } from '@mantine/prism';
// import styles from './index.module.scss';



interface DOMAIN_DATA {
    domainName: string,
    protocol: string
}
function getLLMServiceUrl(currentFoundationModel: any) {
    try {
        const output = currentFoundationModel.output;
        const deploy = output?.deploy || {};

        const allFunctions = Object.keys(deploy).filter((key: string) => FM_TEMPLATE_ACCESS_API_FUNCTION_MAP[currentFoundationModel.appConfig.template] === key);
        const apiServiceConfig = deploy[allFunctions[0]];
        if (apiServiceConfig) {
            // if (apiServiceConfig.customDomains && apiServiceConfig.customDomains[0]) {
            //     return apiServiceConfig.customDomains[0].domainName;
            // }
            // const domainData: DOMAIN_DATA = deploy['domain'];
            // return domainData.domainName;
            return apiServiceConfig.url.system_url;

        }
    } catch (e) {
        console.log(e);
    }
    return '';
}

function FoundationModelView({ fmId }: any) {
    const currentFoundationModel = useFoundationModelStore().currentFoundationModel;
    
    const setCurrentFoundationModel = useFoundationModelStore().setCurrentFoundationModel;

    useEffect(() => {
        (async () => {
            const result = await getFoundationModel(fmId);
            // console.log(result)
            const _currentFoundationModel = result;
            setCurrentFoundationModel(_currentFoundationModel);

        })()

    }, [fmId]);
    // console.log(currentFoundationModel,currentFoundationModel.details)
    const servcieURL = currentFoundationModel?.url;
    const deployStatus = FM_APP_STATUS[currentFoundationModel?.status] || { color: 'grey', text: '初始化' }
    return <div style={{overflow:"hidden",display: 'flex',flexDirection: 'column'}}>
            <Title order={5} mb={8}>基本信息</Title>
            <Grid >
                <Grid.Col span={4} style={{display:"grid"}}>
                <Paper shadow="xs" p="md" withBorder mb={12} >
                    <Title order={6} size="h6">模型信息</Title>
                    <Box pl={4} pr={4}>
                        <div>{Object.keys(currentFoundationModel?.details||[]).map((name: string |any)=>(
                            <Flex key={name} align={'center'} direction={'row'} wrap={'wrap'} justify={"space-between"} style={{wordWrap :"break-word",wordBreak:"break-all"}}>
                                {name}: <Text size="h6" >{currentFoundationModel.details[name]}</Text>
                            </Flex>
                        ))
                            }
                            
                        </div>
                    </Box>
                </Paper>
                </Grid.Col>
                <Grid.Col span={8} style={{display:"grid"}}>
                
                    <Paper shadow="xs" p="md" withBorder mb={12}>
                    <Flex align={'center'}  direction={'row'} wrap={'wrap'} justify={"space-between"} ><Title order={6} size="h6">访问接口</Title><CopyToClipboard content={`${servcieURL}`} value={`${servcieURL}`} /></Flex>
                        {servcieURL ?
                           <Box pl={4} pr={4} >
                                <Flex align={'center'} direction={'row'} justify={"space-between"}>API调用示例：</Flex>
                                <Prism language="bash" style={{display:"grid"}}>{`curl ${servcieURL} -H "Content-Type: application/json"  -d '{ 
  "model": "${fmId}",
  "messages": [ 
    {"role": "system","content": "You are a helpful assistant."},
    {"role": "user","content": "Hello!"}
  ]}'
`}</Prism>

                        </Box>: null}
                            
                    </Paper>
                </Grid.Col>
            </Grid>
            
            <Title order={5} mb={8}>详细信息</Title>
            <Grid style={{overflow:'auto'}}>
                <Grid.Col span={4} style={{display:"grid",height:'100%'}}>
                    <Paper shadow="xs" p="md" withBorder mb={12} >
                        <Title order={6} size="h6">模型信息</Title>
                        <Box pl={4} pr={4}>
                            <div >{Object.keys(currentFoundationModel?.model_info||[]).map((name: string |any)=>(
                                <Flex key={name} align={'center'} direction={'row'} wrap={'wrap'} justify={"space-between"} style={{wordWrap :"break-word",wordBreak:"break-all"}}>
                                    {name}: <Text size="h6" >{currentFoundationModel.model_info[name]}</Text>
                                </Flex>
                            ))
                                }
                                
                            </div>
                        </Box>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={8} style={{display:"flex",height:'100%',flexDirection:'column',}}>
                    <Paper shadow="xs" p="md" withBorder style={{display:'flex',flexDirection:'column',overflow:'auto',marginBottom:'0.75rem'}} >

                        <Title order={6} size="h6">配置文件</Title>
                        <Prism language="bash" style={{display:"grid",overflow:'auto'}}>{currentFoundationModel?.modelfile||''}</Prism>
                    </Paper>
                </Grid.Col>
            </Grid>
    </div>
}

export function FoundationModelDetail() {

    const router = useRouter();
    const { query } = router;
    const fmId = query.fmId;
    const items = [
        { title: 'AgentCraft', href: '/' },
        { title: '基础模型', href: '/foundationModel' },
        { title: '模型详情', href: `/foundationModel/${fmId}/detail` },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <>
            {/* <Breadcrumbs>{items}</Breadcrumbs> */}
            <Flex justify={'flex-start'} align={'center'} mt={12} >
                <Flex align={'center'} h={'100%'} >
                    <ActionIcon onClick={() => {
                        router.push('/foundationModel')
                    }}>
                        <IconArrowBackUp />
                    </ActionIcon>
                    <Title order={4}>基础模型详细</Title>
                </Flex>
            </Flex>
            {/* <FeatureDescription title={`${fmId}详情`} description="依托阿里云Serverless的丰富应用模版以及完整的工具链，AgentCraft可以创建丰富多样的基础模型服务" /> */}
            <Flex mt={12}   style={{overflow:"auto"}} direction={'column'}>
                <FoundationModelView fmId={fmId} />
            </Flex>
        </>
    );
}
