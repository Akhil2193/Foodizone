# FOODIZONE - FOOD DELIVERY APPICATION

## Setting up the Develpoment Environment
 
* Clone the repository 
* Create a `.env` file in the server folder and add values to variable **`DB_URI`** & **`SESSION_SECRET`**.
* Run `npm install` in terminal after changing directory to server folder and then `node app.js` (or you can use `nodemon` also).
* Run `npm install` in terminal  after changing directory to client folder and then run `npm start`.
  
## Deployment

You can view the deployed app here:
https://foodizone-food-delivery.herokuapp.com/

Note: If you don't want to register for the site you can login using these credentials <br />
Username: abc@abc.com
Password: 123456789aA

## Things Learnt and Implemented 
* This project was built using MERN (Mongoose, Express, React JS, Node JS) stack and Material-UI react.
* Created and hosted the database on MongoDB Atlas and rendered  it by creating my own REST API.
* It was my first React JS project. I used React Router for routing of the pages and axios for making requests to Backend.
* Worked with cookies and authentication using Passport.js.
* Learnt more about CORS and resolved some errors related to it.
* Tried to make UI/UX suitable for cross-platform functioning.
* Implemented various components from Material-UI.
* The search bar is not yet working.
* Learnt how to deploy a roduction build using heroku.
  
## Future Contributions
* Design an admin portal for managing the Restaurants and adding new Restaurants.

