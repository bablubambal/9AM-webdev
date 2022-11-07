import mysql.connector as connector

class DBHelper:
    def __init__(self):
        self.con = connector.connect(host='localhost',port='3306',user='root',password='root',database='pythontest')


        #creating table if not exists using query string;
        query = "create table if not exists user(userId int primary key,userName varchar(20),phone varchar(12))"
        cur = self.con.cursor()
        cur.execute(query)
        print("Created Table")

    #insert in table
    def insert_user(self,userid,username,phone):
        query = "insert into user(userId,userName,phone) values({},'{}','{}')".format(userid,username,phone)
        print(query)
        cur = self.con.cursor()
        cur.execute(query)
        self.con.commit()
        print("user inserted to db")
    #fetch all
    def fetch_all(self):
        query = "select * from  user"
        cur = self.con.cursor()
        cur.execute(query)
        res = []
        for row in cur:
            res.append(row)
            print(row)
            print("User Id",row[0])
            print("User Name",row[1])
            print("User Phone",row[2])
            print()
            print()
        return res
    #fetch one:
    def fetch_one(self,id):
        query = "select * from user where userId = {}".format(id)
        print(query)
        cur = self.con.cursor()
        cur.execute(query)
        # print(cur[0])
        for row in cur:
            print(row)

    #delete useer:
    def delete_user(self,userId):
        query = "delete from user where userId = {}".format(userId)
        print("delete query",query)
        c = self.con.cursor()
        c.execute(query)
        
        self.con.commit()
        print("Record Deleted")
    
    #update method;
    def update_user(self,userId,newName,newPhone):
        query= "update user set userName='{}',phone='{}' where userId={}".format(newName,newPhone,userId)
        print(query)
        c = self.con.cursor()
        c.execute(query)
        self.con.commit()
        print("user updated")


