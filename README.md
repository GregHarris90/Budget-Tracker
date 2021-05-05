# Budget-Tracker

### Table of Contents 

* [Repository](#Repository) 
* [Technology Used](#Technology-Used) 
* [User Story](#User-Story)
* [Main Application](#Main-Application)
* [Contact Info](#Contact-Info)
* [Conclusion](#Conclusion)

# Repository

- This repository is for a web application that allows the user to track their spending and manage their budget.

*LINK TO LIVE WEB APPLICATION*

https://afternoon-thicket-37659.herokuapp.com/

# Technology-Used

- To build this project I was provided with the working product and was tasked in making it into a progressive web application. 

- To accomplish this goal I used IndexDB to store the the persistent data from the front-end in case the user loses their internet connection. 

- We then use MongoDB & Mongoose to to store this data once the internet connection is reestablished and input the information from the user.

- Also to provided this functionality I had to create a service-worker to manage which files to save & use for the offline application.

- And finally used manifest.webmanifest to carry over the icon images to be used in offline mode as well.

# User-Story

- To begin the application simply load up the web site and begin to input their transactions and their relevant amount.

- Once a transaction is submitted it's then added to the list of items below and a dynamic chart is generated.

- The user can also remove items by plugging in the matching information and pressing 'subtract funds.'

*PWA-NOTE*

- This web application is also fully functional "offline," to test this simply go into airplane mode or disconnect from the internet while using it and notice how it still works. 

- Then once the internet is turned back on the user's data is then updated.

### Main-Application

*IMAGES BELOW*

*Main-Page*
 <!-- insert images -->
 ![BT-Main-Page](https://user-images.githubusercontent.com/73864182/116773157-98814100-aa08-11eb-9aca-90f38b86fdf5.png)


*END OF APPLICATION*

# Contact-Info:

- Name: Greg Harris
- Email: ghcoder90@gmail.com

# Conclusion

- Overall this assignment was fairly straight forward, the biggest difficulty was understanding what we being asked of us and what I needed to add to the provided code to make it an official "progressive web application." I believe I was able to achieve that goal and have a decent understanding of what these concepts mean and how to implement them. 