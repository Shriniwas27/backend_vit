folder structure:-
routes|->userroutes|->login\n
                   |->signup\n
      |->triproutes|->create trip
                   |->getalltrips
                   |->gettripbyid

models|->usermodel
      |->tripmodel

controllers|->usercontroller|->signup
                            |->login

middlewares|->auth

config|->dbconnection

server.js
