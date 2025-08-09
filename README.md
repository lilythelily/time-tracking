# Frontend Mentor Coding Challenge Solution ✨

This is a solution to **the Time Tracking Dashboard** challenge on Frontend Mentor. 
It's a responsive web application that displays a user's time tracking data, allowing them to switch between daily, weekly, and monthly views for each activity.


![desktop](https://github.com/user-attachments/assets/3e4ec24c-85e8-4bd7-978c-177b5a526dad)

## Features

1. Fully responsive layout from mobile to desktop
- For larger screen: Display Grid / 4 columns
- For smaller screen: Display Grid / 1 column
- Adjusted flex-direction, gap, font-size, width and padding.

2. Switch displays upon tab click (daily/weekly/monthly)
- Change color of the tab on hover and click
- The contents of the cards are updated upon each click on respective tabs
- Hover effect to change color on the cards and ellipsis icons

3. Dynamically populate data from local JSON file
- Fetch data from local JSON file using fetch() method.
- For each card, the title (e.g. Work), hour (e.g. 32hrs)
  and the previous data (e.g. Last Week - 36hrs) are dynamically inserted from JSON data.
- I used template literals to display strings along with JavaScript variables.
- Using querySelectorAll, dynamically populate the data with forEach() method into all cards.


## Challenges and room for improvement
I found that the CSS :hover state, which I initially set for the tabs, was overridden by the JavaScript-controlled click state. 
To solve this, I managed the color changes programmatically in JavaScript by tracking the state of each tab.

I tackled this issue as follows:
- I set the initial state of the tabs.
  (e.g.: let displayWeekly = true).
- When one of the tabs are clicked, the state will change to true/false accordingly. 
  The color will change to white upon click.
- When hovered/mouse-entered on the tabs, the color will change.
- When the mouse leaves from the tab, the color changes back to the default purple
  ONLY IF the targeted tag's state is false (e.g.: displayDaily = false),
  
While my solution worked, it led to repetitive code. 
A more scalable approach, which I'd use in a future iteration, would be to use CSS classes to manage the color states
(e.g., an .active class for the selected tab) and toggle those classes with JavaScript. 
This separates styling from logic, making the code cleaner and easier to maintain.


## Languages

- HTML5, CSS, JavaScript

## Live Site and Demonstration Video

- <a href="https://lilythelily.github.io/time-tracking/">Live Site</a>
- <a href="https://youtu.be/beN3K1YZGs0">Video</a>
