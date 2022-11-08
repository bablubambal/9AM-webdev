
from pymongo import MongoClient

# client = MongoClient("localhost",27017)
# db = client.test
# col = db.hero
myclient = MongoClient("mongodb://localhost:27017/")
mydb = myclient["test"]
mycol = mydb["hero"]
# print("db:",db)
# c = mycol.find()
# for i in c:
#     print(i)
# print(client)

class DBHelper:
    def __init__(self):
        pass
        

    #insert in table
    def insert_user(self,userid,username,phone):
        data = {
            "userId":userid,
            "username":username,
            "phone":phone
        }
        # query = "insert into user(userId,userName,phone) values({},'{}','{}')".format(userid,username,phone)
        mycol.insert_one(data)
        
        print("user inserted to db")
    #fetch all
    def find_all(self):
        c = mycol.find()
        for i in c:
            print(i)
        
        
    #fetch one:
    def fetch_one(self,ids):
        query = {
            "userId":ids
        }
        c = mycol.find(query)
        for i in c:
            print(i)
        # print(cur)
        

    #delete useer:
    def delete_user(self,userId):
        query = {
            "userId":userId
        }
        c = mycol.delete_one(query)
        
        
        print("Record Deleted")
    
    #update method;
    def update_user(self,userId,newName,newPhone):
        data = {
            "userId":userId,
        }
        udata =  {
         "userId":userId,
            "newname":newName,
            "phone":newPhone
        }
           
        
        c = mycol.replace_one(data,udata)
        # query= "update user set userName='{}',phone='{}' where userId={}".format(newName,newPhone,userId)
        
        
        print("user updated")


