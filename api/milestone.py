import pandas as pd
import pandas
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from os import environ

""" JWT_SERVERNAME=environ.get('JWT_SERVERNAME')
JWT_USERID=environ.get('JWT_USERID')
JWT_PASSWORD=environ.get('JWT_PASSWORD')
JWT_DBNAME=environ.get('JWT_DBNAME') """

JWT_SERVERNAME='172.30.225.27'
JWT_USERID ='acrfuser'
JWT_PASSWORD ='sLp9SoH3B6J8Lmjo'
JWT_DBNAME='dashboard'

mysql_username = JWT_USERID
mysql_password = JWT_PASSWORD
# 填写真实数库ip
mysql_ip = JWT_SERVERNAME
port = 3306
db = JWT_DBNAME

engine = create_engine(
            'mysql+pymysql://{}:{}@{}:{}/{}'.format(mysql_username, mysql_password, mysql_ip, port, db))
    # query mysql数据库
Session = sessionmaker(bind=engine)
session = Session()


df = session.query().all()
