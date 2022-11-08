from flask import Flask
from dbhelper import DBHelper;
from collections import ChainMap
from flask import request
app = Flask(__name__)
db = DBHelper()

@app.route("/")
def hello_world():
    return "Welcome to API"

@app.route('/user/<id>/<username>/<phone>')
def create_user(id,username,phone):
    
    # query the database and show res8ults on the sceen 
    db.insert_user(id,username,phone)
    data = {
        "id":id,
        "username":username,
        "phone":phone,
    }

    return {"data":data,"status":"success","message":"user created success"}

@app.route("/users")
def show_users():
    res = db.fetch_all()
    # print(res)
    # dic = ""
    # for i in res:
    #     tdic ={}
    #     tdic["id"] = i[0]
    #     tdic["name"] =i[1]
    #     tdic["phone"]=i[2]
    #     # dic = ChainMap(dic, tdic)
    #     dic = dic +","+str(tdic)

        # dic.update(tdic)
        # print(tdic)
        # print("dic",dic)
    # print("hello ",dic)
    return str(res)




@app.route('/test', methods=['GET', 'POST','PUT'])
def parse_request():
    data = request.data
    print(data)
    return "works susscess"
if __name__ == "__main__":
    app.run(debug=True)