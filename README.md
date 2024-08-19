# agentcraft-standalone
forked from https://github.com/devsapp/agentcraft
## Setup
### general
1. Install ollama
2. Install and setup postgresql and postgresql-pgvector
3. Install node.js >= 18
5. Install python >3.10
6. follow agentcraft offical docs instructions https://agentcraft-docs.serverless-developer.com/quick-start/local-develop
7. visit 127.0.0.1:3000 in your browser
### for Debian/Ubuntu/Kali Linux
```bash
# install ollama
curl -fsSL https://ollama.com/install.sh | sh
ollama serve &
# install python3 & postgresql
sudo apt install -y postgresql postgresql-common python3 python3-pip
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
sudo apt install -y postgresql-16-pgvector       # change 16 to your postgresql version installed
sudo service postgresql restart
# setup postgresql databse and user
sudo -u postgres psql
create user USERNAME with password 'PASSWORD';
create database DATABASE owner USERNAME;
grant all privileges on database DATABASE to USERNAME;
alter role USERNAME superuser;
exit
# install pyenv
curl https://pyenv.run | bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
# install nodejs
curl -fsSL https://fnm.vercel.app/install | bash
source ~/.bashrc
fnm use --install-if-missing 20
# install pipenv
pip3 install pipenv
# setup frontend server
cd src/agentcraft-all/agentcraft-be
pipenv install --python=3.10
pipenv run pip install -r requirements.txt
mv .env.template .env                # then congiure postgres username password in .env 
export PYTHONPATH="$PYTHONPATH:$(pwd)"
# run frontend server
python -u app/main.py &
# setup backend server
cd ../agentcraft-fe
npm install -f
# run backend server
npm run dev
```
### tips for windows 
1. download ollama at ollama.com
2. install pyenv-win instead of pyenv
3. use `set PYTHONPATH=%PYTHONPATH%;%cd%` in cmd or `$env:PYTHONPATH="$env:PYTHONPATH;$pwd"` in powershell instead
## Progress
- [ ] 基础模型 -> ollama
  - [x] 基础模型 -> ollama list
  - [x] 基础模型详细 -> ollama show
  - [x] 在线获取模型 -> ollama pull
    - [x] 后端自动获取并更新模型列表
    - [x] 前端显示可用模型列表
    - [ ] 前端创建模型流式进度提示
  - [ ] 上传本地模型 -> ollama upload 
  - [x] 删除模型 -> ollama delete
- [ ] 智能体 ->crewai
- [ ] 数据集 ->qdrant?
- [ ] 执行工具 ->cewai
- [ ] ~~客户端接入~~


## 
developing...
