# Frontend Mentor - Clock app

![Design preview for the Clock app coding challenge](./preview.jpg)

## Website:

https://clock-app-frontend-mentor.netlify.app/

## Full Stack Skills:
- HTML/CSS
- reactjs
- axios

## App Features

- Change the greeting depending on the time of day:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
- Change the greeting icon and background image depending on the time of day:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
- Generate a new random programming quote whenever the refresh icon is clicked
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- View the optimal layout for the site depending on devices' screen size

## API Used

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.
- [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
- [Programming Quotes API](https://api.quotable.io/random) to generate random programming quotes.





