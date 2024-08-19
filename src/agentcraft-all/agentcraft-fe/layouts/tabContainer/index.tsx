import React from "react";
import { useRouter } from 'next/router';
import { Tabs, Box, Flex } from '@mantine/core';
import { Header } from 'layouts/header';
import { PageProps } from 'types/page';
import { NavItem } from 'types/nav';
interface TabContainerProps extends PageProps {
    renderNavList: NavItem[];
    currentNav: any,
    children: any
}



export function TabContainer(props: TabContainerProps) {
    const router = useRouter();
    const { renderNavList, currentNav } = props;
    const tabList = renderNavList.filter((item) => item.type !== 'divider').map(item => ({
        name: item.name,
        value: item.path
    }));
    const parentPath = currentNav.parentPath as string;
    return <>
        <Box  mt={8} pl={24} pr={24} >
            <Flex align={'center'} justify={'space-between'}>
                <>
                    {tabList.length === 1 ?
                        <div>{tabList[0].name}</div> :
                        <Tabs style={{height:"100%"}}
                            value={parentPath ? parentPath : router.pathname as string}
                            onTabChange={(value: string) => {
                                router.push(value);
                            }}
                        >
                            <Tabs.List style={{height:"100%"}}>
                                {tabList.map((item) => <Tabs.Tab value={item.value} key={item.value} >{item.name}</Tabs.Tab>)}
                            </Tabs.List>
                        </Tabs>
                    }</>
                <Header />
            </Flex>
        </Box>
        <Flex bg={'#fff'} pl={32} pr={32} className={'page-container'} >
            {props.children}
        </Flex>
    </>


}