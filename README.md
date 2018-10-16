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

## TECH STACK

- You can either use React as a Framework or go vanilla. We don't encourage other frameworks as we don't currently use something else internally.

## GETTING STARTED

- You should be working in a fork owned by your own Github account (not directly in the original repo)
- Make sure you have a `.env` in the project root
- In terminal navigate to the project root and run `yarn start`
- Visit `http://localhost:3999` in your browser (or a different port if you changed that in `.env`) - this will serve the contents of `/app`
- There is a basic REST API available for participant data at `http://localhost:3999/api` - the controllers, models & routes for this are in `/api`. Feel free to change the default methods or add new ones
- When you're done, push your changes to Github, and send us the link of the repo


## DESIGNS

- https://www.figma.com/file/dBTCABEvWwaScd9nFSaoBB15/Participant-Incentive-Finder?node-id=1%3A2
- You don't necessarily need to follow 100% this design. We're providing it so you can have an idea on what we are expecting
