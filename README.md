## TASK

- Your task is to create a one-page application that allows an Askable team member to quickly search a location, and retrieve a list of participants within a set radius. Along with each participant, you app should suggest an incentive.
- The average Askable incentive is $75 for 1 hour and $50 for 30 mins
- This is real participant data. Do not upload it or expose it publicly
- We want you to come up with a creative solution that uses real data sources, don't just rely solely on arbitrary formulas you made up
  - Your incentive formula should take into account a combination of participant data, and data from external sources
    - e.g. Think about geography, how could you vary the incentive based on the what you know about the average income of people who live in a certain area? Think about the information you have about each user, and how that might affect how they value their time, how likely they would be to attend user testing sessions, or how valuable they would be to a researcher.
    - The examples above are provided to start igniting some ideas - not to limit your thinking. _Please use as examples only_
  - For this task use at least **2 external data sources / APIs** (there is no upper limit though, use as many as you like)
- Think about code legibility - we can't assess your work if we can't understand it
- Make regular commits with helpful messages.
- Write a bit of a summary to describe the logic behind your calculation of the incentive value. Remember this is mostly about coming up with a logical and creative solution to an open-ended solution, and writing good code, not necessarily the incentive result itself.

Bonus points:
- Include some tests for your app

### Important

This task is mainly about how you approach a difficult problem. It's intentionally not possible to deliver a perfect solution within the timeframe, so a big part of it is prioritisation, and setting the right scope for yourself. The worst thing you can do is bite off more than you can chew, and then have nothing to deliver at the end.

#### Tips for success:

- Have a working app with _some version_ of the app utilising _some degree_ of incentive logic - even a very basic solution that works is better than none. But obviously the more advanced it is, the better
- Come up with a clever solution for calculating the incentive. Even if you don't fully implement it, describe how you plan to solve the problem (what data sources, the logic to apply the data, etc.)
- Time is limited, avoid time sinks. If you're stuck on something (particularly things involving a 3rd party integration / data source), move on to something else / try a different approach.
- Don't spend much time on making it look nice - that's the thing we care least about for this task.
- It's ok to ask questions. We'll answer most questions related to the Askable data model and the logistics of the task, but we probably won't help with technical questions.


## GETTING STARTED

- You should be working in a fork owned by your own Github account (*not directly in the original repo*)
- Make sure you have a `.env` in the project root (we'll provide this)
- In terminal navigate to the project root and run `yarn start`
- Visit `http://localhost:3999` in your browser (or a different port if you changed that in `.env`) - this will serve the contents of `/app` - put your frontend files in here
- There is a basic REST API available for participant data at `http://localhost:3999/api` - the controllers, models & routes for this are in `/api`. Feel free to change the default methods or add new ones. Your frontend app should connect to this app.
- When you're done, push your changes to Github, and send us the link of the repo

## TECH STACK

- You can either use React as a Framework or go vanilla. We don't encourage using frameworks other than React, as we may not be familiar with them, and may not understand your work.
- The API connects to a MongoDB database, which is a stripped back copy of the Askable database. The connection is read-only. The database contains collections for `users` and `bookings`. There's a bit of a spec sheet for the database fields which can be shared on request.


## DESIGNS

- https://www.figma.com/file/dBTCABEvWwaScd9nFSaoBB15/Participant-Incentive-Finder?node-id=1%3A2
- You don't necessarily need to follow 100% this design. We're providing it so you can have an idea on what we are expecting
