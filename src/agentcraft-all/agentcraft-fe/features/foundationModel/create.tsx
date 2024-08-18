import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';

import { Breadcrumbs, Anchor, Loader, Stepper, Card, Button, Box, Select, PasswordInput, Group, Tabs, Notification, Image, Badge, Title, TextInput, Text, ActionIcon, Highlight, LoadingOverlay, Modal, Textarea, Flex, Space, NumberInput, FileInput, rem, SegmentedControl, Pagination } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconMessageCircle, IconExternalLink, IconArrowBackUp, IconBrandGithubFilled, IconPhoto, IconClockHour3, IconX } from '@tabler/icons-react';
import { useFoundationModelStore, addFoundationModel, getFoundationModel, APP_STATUS } from 'store/foundationModel';
import { FORM_WIDTH } from 'constants/index';
import { FOUNDATION_MODEL_TEMPLATES, AGENTCRAFT_FM_PREFIX } from 'constants/foundation-model';
import { ServerlessAppTemplate, TemplateParams, TemplatePropertyDetail } from 'types/serverless-devs-app';
import {request} from "@/utils/clientRequest"
// import { validate } from "langchain/dist/util/fast-json-patch";
import { notifications } from "@mantine/notifications";
// import styles from './index.module.scss';

// function LoadingStepper() {
//     const appStatus = useFoundationModelStore().appStatus;

//     return <div>

//         <div style={{ wordBreak: 'break-all', width: 400, display: 'flex', alignItems: 'center' }}><span>该应基础模型创建预计需要1-3分钟，请耐心等待，你可以可以关闭此弹框，在基础模型列表查看您创建的基础模型列表</span><Loader /></div>
//         <Stepper active={appStatus} breakpoint="sm">
//             <Stepper.Step label="初始化" description="" />
//             <Stepper.Step label="创建中" description="" />
//             <Stepper.Step label="创建成功/失败" description="" />
//         </Stepper>
//     </div>

// }

// function FoundationModelForm() {
//     const router = useRouter();
//     const setOpen = useFoundationModelStore().setOpen;
//     const setCreateLoading = useFoundationModelStore().setCreateLoading;
//     const setAppStatus = useFoundationModelStore().setAppStatus;
//     const fmTemplate: TemplateParams & { template: string, description: string } = useFoundationModelStore().fmTemplate as TemplateParams & { template: string, description: string };
//     let validate = {};
//     const validateField = fmTemplate?.required || [];
//     if (validateField.length > 0) {
//         validate = validateField.reduce((accumulator: any, filedName: string) => {
//             accumulator[filedName] = (value: any) => (!value ? '必需填写' : null);
//             return accumulator;
//         }, {});
//     }
//     const form = useForm({
//         initialValues: {
//         },
//         validate,
//     });

//     function renderFormUi(key: string, field: TemplatePropertyDetail) {
//         if (!field.hiddenUI) {
//             let FieldComponent = <TextInput withAsterisk label={field.title} placeholder="" {...form.getInputProps(key)} description={<div dangerouslySetInnerHTML={{ __html: field.description }} />} />
//             switch (field.type) {
//                 case 'string':
//                     if (field.uiType === 'select') {
//                         FieldComponent = <Select
//                             withAsterisk={fmTemplate.required.includes(key)}
//                             data={field.dataSource}
//                             description={<div dangerouslySetInnerHTML={{ __html: field.description }} />}
//                             label={field.title}
//                             placeholder=""

//                             {...form.getInputProps(key)}
//                         />
//                     }
//                     if (field.uiType === 'password') {
//                         FieldComponent = <PasswordInput
//                             withAsterisk label={field.title} placeholder="" {...form.getInputProps(key)} description={<div dangerouslySetInnerHTML={{ __html: field.description }} />} />
//                     }
//                     break;
//                 default:
//                     break
//             }
//             return FieldComponent;
//         } else {
//             return null;
//         }
//     }

//     function checkAppStatus(appName: string) {

//         return new Promise((resolve, reject) => {
//             setAppStatus(APP_STATUS.CREATING);
//             const timmer = setInterval(async () => {
//                 try {
//                     const result = await getFoundationModel(appName);
//                     const release = result.lastRelease;
//                     if (release.status === 'published') {
//                         clearInterval(timmer);
//                         setAppStatus(APP_STATUS.SUCCESS);
//                         resolve('');
//                     }
//                 } catch (e) {
//                     reject(e);
//                 }

//             }, 4000);

//         })


//     }
//     useEffect(() => {
//         if (fmTemplate.properties) {
//             const initFormData = Object.keys(fmTemplate.properties).reduce((accumulator: any, currentKey: any) => {
//                 accumulator[currentKey] = fmTemplate.properties[currentKey].default;
//                 return accumulator;
//             }, {});

//             form.setValues(initFormData);
//         }
//     }, [fmTemplate])

//     return (
//         <>
//             <Box maw={FORM_WIDTH} mx="auto">
//                 {fmTemplate.properties && Object.keys(fmTemplate?.properties).map((key: string) => {
//                     return <div key={key}>{renderFormUi(key, fmTemplate?.properties[key])}</div>
//                 })}
//             </Box>
//             <Box maw={FORM_WIDTH} mx="auto" pt={12} style={{ textAlign: 'right' }}>
//                 <Button onClick={async () => {
//                     form.validate();
//                     if (form.isValid()) {
//                         try {
//                             const appName = `${AGENTCRAFT_FM_PREFIX}_${nanoid()}`;
//                             setCreateLoading(true);
//                             setAppStatus(APP_STATUS.INIT);
//                             const data = await addFoundationModel(fmTemplate.template, Object.assign({}, form.values, { name: appName }));
//                             const name = data.name;
//                             await checkAppStatus(name);
//                             router.push('/foundationModel');
//                         } catch (e) {
//                             console.log(e);
//                         }
//                         setCreateLoading(false);
//                         setOpen(false);
//                     }

//                 }}>确认</Button>
//             </Box>
//         </>
//     );
// }

async function Add(name:string,tag:string) {
    if(tag=='unavailable'){
        notifications.show({
            icon:<IconX />,
            color:'red',
            title: `resource unavailable`,
            message: `model ${name} unavailable`,
          });
        return
    }
    notifications.show({
        id: `Create Model ${name}:${tag}`,
        loading: true,
        title: `Create Model ${name}:${tag}`,
        message: `Request for ollama pull ${name}:${tag}...`,
        autoClose: false,
        withCloseButton: false,
      });
    fetch("/api/ollama/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${name}:${tag}`})}).then(function (response) {
        // 本次请求总的数据长度
        let contentLength = response.headers.get('Content-Length');
        var getStream = function (reader: ReadableStreamDefaultReader) {
            return reader.read().then(function (result) {
                // If data has been read completely, directly return
                if (result.done) {
                    return;
                }
                // Extract this segment of data (binary format)
                var chunk = result.value;
                var text = '';
                // // Assume data is UTF-8 encoded, the first three bytes are data headers,
                // // and each character occupies one byte (i.e., all English characters)
                for (var i = 0; i < chunk.byteLength; i++) {
                    text += String.fromCharCode(chunk[i]);
                }
                // // Append this segment of data to the web page
                // document.getElementById('content')?.innerHTML += text;
                // // Calculate the current progress
                // progress += chunk.byteLength;
                // console.log(((progress / contentLength) * 100) + '%');
                // Recursively handle the next segment of data
                notifications.update({
                    id: `Create Model ${name}:${tag}`,
                    loading: true,
                    title: `Create Model ${name}:${tag}`,
                    message: text,
                    autoClose: false,
                    withCloseButton: false,
                  });
                console.log(chunk);
                return getStream(reader);
            });
        };
            // return reader.read().then(function (result) {
            //     // 如果数据已经读取完毕，直接返回
            //     if (result.done) {
            //       return;
            //     }
            //     // 取出本段数据（二进制格式）
            //     var chunk = result.value;
            //     var text = '';
            //     // 假定数据是UTF-8编码，前三字节是数据头，
            //     // 而且每个字符占据一个字节（即都为英文字符）
            //     for (var i = 3; i < chunk.byteLength; i++) {
            //       text += String.fromCharCode(chunk[i]);
            //     }
            //     // 将本段数据追加到网页之中
            //     document.getElementById('content')?.innerHTML += text;
            //     // 计算当前进度
            //     progress += chunk.byteLength;
            //     console.log(((progress / contentLength) * 100) + '%');
            //     // 递归处理下一段数据
            //     return getStream(reader);
            //   };
        // };
        return getStream(response.body?.getReader());
      })
      .catch(function (error) {
        console.log(error);
      });
    // request(,{method:"POST",data:{name:}})
}


function FoundationModelTab() {
    // const setOpen = useFoundationModelStore().setOpen;
    // const setFmTemplate = useFoundationModelStore().setFmTemplate;
    // const openToCreateFoundationModel = (item: ServerlessAppTemplate) => {
    //     setFmTemplate(Object.assign({}, item.templateParams, { template: item.template, description: item.description }));
    //     setOpen(true);
    // }
    const form=useForm({validateInputOnChange: true ,initialValues:{q:"",c:""}});
    const [pagecontent,setContent] = useState({data:[],total:0});
    const [activePage,setPage]=useState(1);
    const getPagecontent = async (p=0,l=20) => {
        let res = await request(`/api/ollama/search?q=${form.values.q}&c=${form.values.c}&p=${p}&l=${l}`);
        for(let j=0;j<res.data.data.length;j++) {
            res.data.data[j].tags=res.data.data[j].tags.map((element:Array<any>)=>({label:element[0],value:element[0],size:element[1]}));
            res.data.data[j].currentTag=res.data.data[j].tags[0]?.label || 'unavailable';
        }
        setContent(res.data)
    };

    interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
        size: string;
        value: string;
      }
      const SelectItem = forwardRef<HTMLDivElement,ItemProps>(
        ({size,value,...others}:ItemProps, ref) => (
          <div ref={ref} {...others}>
            <Flex justify={'space-between'} align={'center'}>
                <Text size="sm">{value}</Text>
                <Text size="xs" opacity={0.65}>
                  {size}
                </Text>
            </Flex>
          </div>
        )
      );
    useEffect(()=>{
        getPagecontent(activePage)
    },[form.values.q, form.values.c,activePage])
    return <Box pos="relative" pb={124} mt={12}>
        <Tabs variant="outline" defaultValue="text2text">
            <Tabs.List style={{borderBottom:'solid thin lightgray'}}>
                <Tabs.Tab value="text2text" icon={<IconMessageCircle size="0.8rem" />}>Ollama</Tabs.Tab>
                {/* <Tabs.Tab value="text2img" icon={<IconMessageCircle size="0.8rem" />}>Huggingface</Tabs.Tab> */}
            </Tabs.List>
            <Tabs.Panel value="text2text" pt="xs">
                <Flex direction={'column'} style={{width:600,margin:'auto',paddingTop:'10px'}} ><TextInput placeholder="Search models" {...form.getInputProps('q')} />
                <SegmentedControl
                
                color="gray"
                style={{background:'white'}}
                {...form.getInputProps('c')}
                data={[
                    { label: 'All', value: '' },
                    { label: 'Embedding', value: 'Embedding' },
                    { label: 'Vision', value: 'Vision' },
                    { label: 'Tools', value: 'Tools' },
                    { label: 'Code', value: 'Code' },
                ]}
                /></Flex>
                <br/>
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    wrap="wrap"
                    pb={120}
                >

                    {pagecontent?pagecontent.data?.map((item: any, index: number) => {
                        // console.log(item)
                        return <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 320 }} mr={12} key={`template-${index}`}>
                            {/* <Card.Section >
                                {item.icon ? <Image
                                    src={item.icon}
                                    style={{ margin: '10px auto' }}
                                    height={160}
                                    width={160}
                                    alt={item.tag.join('')}
                                /> : <Box h={160} w={160} style={{ lineHeight: '160px', textAlign: 'center', margin: '10px auto', fontSize: '18px', fontWeight: 700 }}>
                                    {item.name}
                                </Box>}

                            </Card.Section> */}
                            <Group mb={0} h={45} >
                                <Text weight={700} align={'center'} style={{ textAlign: 'center', width: '100%' }}>{item.name}</Text>
                                {/* {
                                    item.githubLink ? <a href={item.githubLink} target="_blank"><IconBrandGithubFilled /></a> : null
                                } */}
                            </Group>
                            <Flex justify={'center'}> <IconClockHour3  color="gray" size="1rem" /><Text size="xs" color="dimmed" ml={10}>  Updated on {item.updated.split("T")[0]}</Text></Flex>

                            <Box mt={5}>
                                {item.labels.map((tag:string) => {
                                    return <Badge color="green" variant="light" key={`template-${index}-${tag}`} mr={4}>
                                        {tag}
                                    </Badge>
                                })}
                            </Box>
                            <Text size="sm" color="dimmed" mt={12} h={120}>
                                {item.description}
                            </Text>
                            
                            <Flex align={'center'}>
                            <Select
                                // label="tags"
                                size="sm"
                                data={item.tags}
                                searchable
                                itemComponent={SelectItem}
                                value={item.currentTag}
                                defaultValue={item.currentTag}
                                onChange={(value)=>{pagecontent.data[index].currentTag=value;setContent({...pagecontent});}}
                                filter={(value, option) =>{
                                    return option.value.toLowerCase().includes(value.toLowerCase().trim())}
                                  }
                            />
                                <Button ml={5} size="md"  onClick={() => Add(item.name,item.currentTag)}>
                                    创建
                                </Button>
                            </Flex>
                        </Card>
                    }):null}
                </Flex>
                <Pagination value={activePage} onChange={setPage} total={Math.floor(pagecontent.total/20)+1} />
            </Tabs.Panel>
{/* 
            <Tabs.Panel value="text2img" pt="xs">
                <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    wrap="wrap"
                >
                    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: 320 }} mr={12}>
                        <Card.Section>
                            <Image
                                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>stable-diffusion</Text>
                            <Badge color="green" variant="light">
                                huggingface社区
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            文生图系列模型，效果炸裂，可扩展性强
                        </Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            创建
                        </Button>
                    </Card>
                </Flex>
            </Tabs.Panel> */}
        </Tabs>
    </Box>
}

export function CreateFoundationModel() {

    const router = useRouter();
    // const { query } = router;
    // const items = [
    //     { title: 'AgentCraft', href: '/' },
    //     { title: '基础模型', href: '/foundationModel' },
    //     { title: '创建基础模型', href: `/foundationModel/create` },
    // ].map((item, index) => (
    //     <Anchor href={item.href} key={index}>
    //         {item.title}
    //     </Anchor>
    // ));

    return (
        <>
            {/* <Breadcrumbs>{items}</Breadcrumbs> */}
            <Flex justify={'flex-start'} align={'center'} mt={12} >
                <Flex align={'center'} h={'100%'} >
                    <ActionIcon onClick={() => {
                        router.push('/foundationModel');
                    }}>
                        <IconArrowBackUp />
                    </ActionIcon>
                    <Title order={4}>基础模型</Title>
                </Flex>
            </Flex>
            {/* <FeatureDescription title="创建基础模型" description="依托阿里云Serverless的丰富应用模版以及完整的工具链，AgentCraft可以创建丰富多样的基础模型服务" /> */}
            {/* <Notification title="基础模型创建提示" mt={12}>
                <Flex align={'center'}>
                    使用非阿里云主账号部署的AgentCraft,请选择使用<Text c="yellow" fw={700}>”云创建“</Text>跳转到<a href="https://fcnext.console.aliyun.com/applications?tab=all" target="_blank">函数计算控制台</a>进行基础模型的服务创建，在云端创建的时候请注意使用AgentCraft前缀作为应用名
                </Flex>
            </Notification> */}
            <FoundationModelTab />
            {/* <Add /> */}
        </>

    );
}
