"""Model Service"""
from concurrent.futures import as_completed,ThreadPoolExecutor
import json
from threading import Lock
from inspect import trace
import os
from pydoc import describe
import traceback
from turtle import title
from xml.dom import NoModificationAllowedErr
import app.database.model as database
from bs4 import BeautifulSoup
import requests
import datetime


def list_models(user_id: int, page: int, limit: int):
    """列出所有模型"""
    data, total = database.list_models(user_id, page, limit)
    data_dict = [vars(model) for model in data]
    print(data_dict)
    return data_dict, total


def add_model(**kwargs):
    """添加模型"""
    return database.add_model(**kwargs)


def delete_model(model_id: int, user_id: int):
    """删除模型"""
    database.delete_model(model_id, user_id)


def get_model(model_id: int, user_id: int):
    """获取模型信息"""
    model = database.get_model(model_id, user_id)
    return vars(model)


def update_model(**kwargs):
    """更新模型信息"""
    database.update_model(**kwargs)


def search_model( q: str, c: str,p:int,l:int):
    """online search 模型信息"""
    data,total=database.search_models(q,c,p,l)
    data_dict = [{k:json.loads(v) if k in ["labels","tags"] else v for k,v in vars(model).items()} for model in data]
    # print(data_dict,total)
    updated=data_dict[0]["synced"]  if data and len(data) > 0 else datetime.datetime(1970,1,1)
    # print(updated)
    return data_dict,total,updated




def fetch_models(lock):
    lock.acquire()
    def gettags(title):
        try:
            otitle=title
            if not "/" in title:title=f"library/{title}"
            res=None
            while not res:
                try: res=requests.get(f"https://ollama.com/{title}",headers=headers,timeout=10)
                except:
                    print(f"retrying {otitle}")
                    continue
            soup = BeautifulSoup(res.text, 'html.parser')
            tags=list(map(lambda x:x.get_text().strip(),soup.select('div > a > div > span:nth-child(1)')))
            sizes=list(map(lambda x:x.get_text().strip(),soup.select('div > a > span')))
            datalock.acquire()
            data[otitle].append(json.dumps(list(zip(tags,sizes))))
            datalock.release()
            return otitle
        except:
            if datalock.locked():datalock.release()
            traceback.print_exc()
    def gettitles(page):
        try:
            res=None
            while not res:
                try:res=requests.get(f"https://ollama.com/search?p={page}",headers=headers,timeout=10)
                except:continue
            soup = BeautifulSoup(res.text, 'html.parser')
            cards=soup.select('#repo > ul > li')
            for card in cards:
                title=card.select_one('h2 > span:nth-child(1)').get_text().strip()
                describe=card.select_one('p.max-w-md.break-words')
                describe=describe.get_text().strip() if describe else ""
                labels=json.dumps(list(map(lambda x:x.get_text().strip(),card.select('div > span'))))
                pulls=card.select('p > span:nth-child(1)').get_text().strip()
                pulls=pulls.split(" ")[0].strip()if "pulls" in pulls else 0
                pulls=int(pulls[:-1])*1000000 if pulls[-1]=="M" else int(pulls[:-1])*1000 if pulls[-1]=="K" else int(pulls)
                updated=getdate(card.select_one('p > span:last-child').get_text().strip().splitlines()[1].strip()).date()
                datalock.acquire()
                # print([title,describe,labels,updated])
                data[title]=[title,describe,labels,updated,pulls]
                datalock.release()
        except:
            if datalock.locked():datalock.release()
            traceback.print_exc() 
    def getdate(time:str):
        if time=='yesterday':unit="days";num=1
        else:
            # print(time)
            num,unit=time.split(" ")[:2]
            if num in ["an","a"]:num="1"
            if unit[-1]!="s":unit=f"{unit}s"
            unit,num=['days',30*int(num)] if unit == 'months' else [unit,int(num)]
        return datetime.datetime.now()-datetime.timedelta(**{unit:num})
    headers={
        'dnt':'''1''',
        'hx-current-url':'''https://ollama.com/search''',
        'referer':'''https://ollama.com/search''',
        'sec-ch-ua':'''"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"''',
        'sec-ch-ua-mobile':'''?0''',
        'sec-ch-ua-platform':'''"Windows"''',
        'sec-fetch-dest':'''empty''',
        'sec-fetch-mode':'''cors''',
        'sec-fetch-site':'''same-origin''',
        'user-agent':'''Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'''}
    try:
        print("syncing models...") 
        threadpool=ThreadPoolExecutor()
        datalock=Lock()
        res=requests.get("https://ollama.com/search",headers=headers)
        # print("syncing models... get pages ... done") 
        soup = BeautifulSoup(res.text, 'html.parser')
        pages=list(map(lambda x:x.get_text().strip(),soup.select('nav > ul > li > a')))[-2]
        # print("syncing models... get pages ... next") 
        data={}
        i=0
        for each in as_completed(map(lambda p:threadpool.submit(gettitles,p+1),range(int(pages)))):
            each.result()
            i+=1
            if i%10==0:print(f"{i}/{pages} models finished")
        titles=list(data)
        try:
            for each in as_completed(map(lambda p:threadpool.submit(gettags,p),data),timeout=900):
                title=each.result()
                titles.remove(title)
                try:width=os.get_terminal_size().columns
                except:width=80
                if len(titles)%100==0:print(f"{len(titles)}/{len(data)} tags left...")
        except:
            traceback.print_exc()
        threadpool.shutdown(False,cancel_futures=True)
        print(f"update ollama db ... ")
        # print(data)
        database.update_models(data.values())
    except:
        traceback.print_exc()
    lock.release()