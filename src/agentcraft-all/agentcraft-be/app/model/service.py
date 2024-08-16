"""Model Service"""
from pydoc import describe
import traceback
from turtle import title
import app.database.model as database
from bs4 import BeautifulSoup
import requests
import datetime


def list_models(user_id: int, page: int, limit: int):
    """列出所有模型"""
    data, total = database.list_models(user_id, page, limit)
    data_dict = [vars(model) for model in data]
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
    
    updated=data[0]["synced"]  if data and len(data) > 0 else datetime.datetime(1970,1,1)
    return data,total,updated

def fetch_models(lock):
    
    lock.acquire()
    print("syncing models...") 
    # print("syncing models... get pages") 
    try:
        headers={
        'dnt':'''1''',
        'hx-current-url':'''https://ollama.com/search''',
        # 'hx-request':'''true''',
        # 'hx-target':'''repo''',
        # 'hx-trigger':'''query''',
        # 'hx-trigger-name':'''q''',
        # 'priority':'''u=1, i''',
        'referer':'''https://ollama.com/search''',
        'sec-ch-ua':'''"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"''',
        'sec-ch-ua-mobile':'''?0''',
        'sec-ch-ua-platform':'''"Windows"''',
        'sec-fetch-dest':'''empty''',
        'sec-fetch-mode':'''cors''',
        'sec-fetch-site':'''same-origin''',
        'user-agent':'''Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0'''}
        res=requests.get("https://ollama.com/search",headers=headers)
        # print("syncing models... get pages ... done") 
        soup = BeautifulSoup(res.text, 'html.parser')
        pages=list(map(lambda x:x.get_text().strip(),soup.select('nav > ul > li > a')))[-2]
        # print("syncing models... get pages ... next") 
        data=[]
        def gettags(title):
            res=requests.get(f"https://ollama.com/library/{title}",headers=headers)
            soup = BeautifulSoup(res.text, 'html.parser')
            tags=list(map(lambda x:x.get_text().strip(),soup.select('div > a > div > span')))[1:]
            tags.remove('latest')
            sizes=list(map(lambda x:x.get_text().strip(),soup.select('div > a > span')))[1:]
            print(list(zip(tags,sizes))[:10])
            return list(zip(tags,sizes))
        def getdate(num,unit):
            if unit=='days':
                return datetime.datetime.now()-datetime.timedelta(days=int(num))
            elif unit=='months':
                return datetime.datetime.now()-datetime.timedelta(days=30*int(num))
            elif unit=='years':
                return datetime.datetime.now()-datetime.timedelta(years=int(num))
            elif unit=='weeks':
                return datetime.datetime.now()-datetime.timedelta(weeks=int(num))
            else:
                return datetime.datetime.now()
        for i in range(int(pages)):
            print(f"syncing models ... [{i}/{pages}]")
            res=requests.get(f"https://ollama.com/search?p={i}",headers=headers,)
            soup = BeautifulSoup(res.text, 'html.parser')
            titles=list(map(lambda x:x.get_text().strip(),soup.select('h2 > span')))
            describes=list(map(lambda x:x.get_text().strip(),soup.select('p.max-w-md.break-words')))
            labels= list(map(lambda x:x.get_text().strip(),soup.select('div > span')))
            labels=[labels[i:i+3] for i in range(0,len(labels),3)]
            updated=list(map(lambda x:getdate(*(x.get_text().strip().splitlines()[1].strip().split(" ")[:2])).date(),soup.select('p > span')[2::3]))
            tags=list(map(gettags,titles))
            print(list(zip(titles,describes,labels,updated))[:5])
            data.extend(list(zip(titles,describes,labels,tags,updated)))
        
        print(f"update ollama db ... ")
        database.update_models(data)
    except:
        traceback.print_exc()
    lock.release()