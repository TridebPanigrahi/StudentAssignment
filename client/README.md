<!-- 1st download zip file or clone my project using below comand in comand promt -->
git clone https://github.com/TridebPanigrahi/StudentAssignment.git

install visual Studio code

<!-- For Server set up -->
-download python latest version
-to check python is download or not (in command propmt type python -version)
-delete venv and migration
<!-- Create venv for windows -->
py -3 -m venv venv 
<!-- for Activate venv in windows-->
venv\Scripts\activate
<!-- install all dependencies -->
pip install -r requirements.txt
<!-- for connecting mysql workbench -->
-in mysql workbench create schema "student_assignment"
and set up your username and password in __init__.py
<!-- For Createing table in mysql workbench run the below command in ...your_path/server-->
flask db init
flask db migrate
flask db upgrade
<!-- now run server using below command -->
python server.py

##########################################################################

<!-- for client side after clone-->
first install node js
if it is installed then check in command prompt "node -version"

<!-- Now install client code using below command in vs code -->
npm install

<!-- now run the client using below command-->
npm start

