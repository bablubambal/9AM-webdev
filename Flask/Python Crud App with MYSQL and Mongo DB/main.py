from dbhelper import DBHelper;

def main():
    db = DBHelper()
    
    
    while True:
        print("************Welcome******** \n")
        print("""\tPress 1 to insert new user \n 
        Press 2 to Display All users \n
        Press 3 to Display One user \n
        Press 4 to Update a user \n
        Press 5 to Delete a user \n
        Press 6 to Exit the program 
        """)
        try:
            choice = int(input())
            if(choice ==1):
                #insert user
                uid = int(input("Enter user id:"))
                uname = input("Enter user name: ")
                uphone = input("Enter user phone:")
                db.insert_user(uid,uname,uphone)
                
                
            elif(choice ==2):
                #display all users
                db.fetch_all()
                
                
            elif(choice ==3):
                #display one user:
                uid = int(input("Enter user id:"))
                db.fetch_one(uid)
                pass
            elif(choice ==4):
                # update a user:
                uid = int(input("Enter user id to be updated:"))
                uname = input("Enter new user name: ")
                uphone = input("Enter new user phone:")
                db.update_user(uid,uname,uphone)

                pass
            elif(choice ==5):
                #delete a user:
                uid = int(input("Enter user id: to delete: "))
                db.delete_user(uid)
                pass
            elif(choice == 6):
                #break 
                break;
            else:
                print("Invalid input ! Try again ")
        except Exception as e:
            print(e)
            print("Invalid Details ! Try again")

if __name__ == "__main__":
    main()

















