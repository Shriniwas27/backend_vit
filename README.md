folder structure:-
routes|->userroutes|->login
                   |->signup
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
