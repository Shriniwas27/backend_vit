folder structure:-
routes|->userroutes|->login <br/>
                   |->signup <br/>
      |->triproutes|->create trip  <br/>
                   |->getalltrips  <br/>
                   |->gettripbyid

models|->usermodel
      |->tripmodel

controllers|->usercontroller|->signup
                            |->login

middlewares|->auth

config|->dbconnection

server.js
