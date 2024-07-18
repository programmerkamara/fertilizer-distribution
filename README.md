# fertilizer-distribution
# TEAM MEMBERS
NO	NAME	ID	SET	POSITION
1	MOHAMED KAMARA	9020	2	Project Manager
2.	AUGUSTINE TAMBA
ALLIEU	8322	5	Documentation
3	ELSIE DORIS BANGURA	7815	2	QA
4	ISHA SESAY	7193	3	QA
5	ABU JAMAL KAMARA	8463	4	Back-
End(server-side)
6	ABU SANKOH	8001	3	Back-End(Database)
7	MODIE JOHN GBLA	7965	1	Front-End
8	MOHAMED AD GBLA	7723	1	Front-End
9	SOLOMON AB KAMANDA	7925	4	UI/UX DESIGNER
10	TATEKULOR ALOYSIUS
KAMARA	7499	5	UI/UX Designer
# Scope of the Project
TITLE:      Agriculture Store and Inventory Management System 
Scope

The Agriculture Store and Inventory Management System for Bombali District is a web-based system designed to facilitate fertilizer distribution to farmers. This system ensures a smooth, transparent, and secure process for managing fertilizer distribution and the users for the system are Admin, Director of Agriculture, Farmers, Farmers Registration Officer (FRO), and Store Keeper.

Functional Requirements Base on User

Admin:

•	Ability to create, edit, or delete user accounts for the Director of Agriculture, Farmer Registration Officer, and Store Keeper.
•	Perform regular system maintenance tasks such as backups, updates, and troubleshooting.
•	 Manage role-based access control to ensure that users have appropriate permissions.
•	 Monitor and manage audit logs of all system activities for accountability and security purposes.
•	 Configure system settings and preferences according to organizational requirements.

Director of Agriculture:

•	Review submitted fertilizer applications from farmers.
•	Approve or reject applications based on predefined criteria.
•	Assign the quantity of fertilizer bags for approved applications.
•	 Generate a unique code for each approved application to be provided to the farmers.
•	Notify farmers of their application status and unique code via SMS or email.

Farmers:

•	 Register at the office to obtain a valid login for applying for fertilizers.
•	Apply for fertilizers specifying the type and quantity required.
•	 Check the status of their fertilizer application to know if it's approved or rejected.
•	 Present the unique code received upon approval at the store to collect fertilizers.
Farmer Registration Officer:

•	 Register farmers at the office, collecting necessary information such as name, contact details, and farm details.
•	Verify and update farmer details as needed to ensure accuracy in the system.

Store Keeper:


•	 Validate the unique code presented by the farmer to ensure authenticity.
•	View available inventory of fertilizers and update stock levels after issuing fertilizers.
•	Issue fertilizers to farmers based on approved applications and validated codes.

Limitations for the System
Some limitation for the system includes:


•	The current system will not have feedback mechanism/ chatting system
•	The current system will not have multiple language integration
•	The current system will not generate pdf/Doc Report
•	The current system lacks offline functionality
•	The system is not a mobile application, therefore can only be access using browser
•	The system is only meant for Bombali District Farmers

#step to run the project
1. Clone the Repository
Open your terminal or command prompt.
Navigate to the directory where you want to clone the project.
Run the following command to clone the repository (replace REPOSITORY_URL with the actual URL of your GitHub repository):
sh
Copy code
git clone REPOSITORY_URL
For example:

git clone https://github.com/programmerkamara/fertilizer-distribution.git
2. Set Up the Django Backend
Navigate to the Backend Directory
Change to the directory containing the Django project. This might be the root of the repository or a subdirectory like backend or server.

Copy code
cd fertilizer-distribution  # Adjust this path as necessary
Create and Activate a Virtual Environment
It is recommended to use a virtual environment to manage dependencies.

python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
Install Dependencies
Install the required Python packages.

pip install -r requirements.txt
Set Up the Database
Run the database migrations to set up your database schema.

python manage.py migrate
Create a Superuser (Optional)
Create an admin user to access the Django admin interface.


python manage.py createsuperuser
Run the Django Development Server
Start the Django development server.


python manage.py runserver
Your Django backend should now be running at http://127.0.0.1:8000/.

3. Set Up the React Frontend
Navigate to the Frontend Directory
Open a new terminal window or tab, navigate to the directory containing the React project. This might be the root of the repository or a subdirectory like frontend or client.


cd fertilizer-distribution/frontend  # Adjust this path as necessary
Install Dependencies
Install the required npm packages.

npm install
Start the React Development Server
Start the React development server.

npm start
Your React frontend should now be running at http://localhost:3000/.

4. Configure the Backend-Frontend Connection
Adjust API Endpoints
Make sure your React app is configured to communicate with your Django backend. You may need to adjust API endpoints in your React app's configuration files or environment variables.

env

REACT_APP_API_URL=http://127.0.0.1:8000/api/
5. Verify the Setup
Open your browser and verify that both the frontend and backend are working:

React frontend: http://localhost:3000/
Django backend: http://127.0.0.1:8000/
###############################################################
Clone the repository.
Set up the Django backend:
Navigate to the backend directory.
Create and activate a virtual environment.
Install dependencies.
Run migrations.
Create a superuser (optional).
Start the Django server.
Set up the React frontend:
Navigate to the frontend directory.
Install dependencies.
Start the React server.
Configure the backend-frontend connection.
Verify that both the frontend and backend are working.
