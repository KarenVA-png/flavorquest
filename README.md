# FlavorQuest 🍲

A recipe web app built with React, Vite and CSS.  
It lets users explore recipes, view details, and manage a basic profile with login/logout (no backend, just frontend simulation).

## Features
- Browse recipes from TheMealDB API.
- Search recipes from the home page.
- View recipe details with ingredients and instructions.
- Profile section with a fake login/logout system.  
- To access the Profile page, you must first click the Login button.  
  Once logged in, you can view your profile details and log out when done.
- Styled with custom CSS for a clean and simple UI.

## Challenges
While working on this project, I faced a few challenges:  
- TheMealDB API has limited recipes and unfortunately doesn’t include Kenyan or African meals, which I really wanted to showcase.  
- I had to figure out how to later add custom Kenyan recipes on top of the API results.  
- Setting up navigation between Home, About, Profile, and Recipe pages was a bit tricky at first.  
- Since there’s no backend, I needed a simple way to manage login/logout, which I solved using React state.  

## Usage
1. Home Page – Displays a list of recipes. You can search by ingredient or dish name.  
2. About Page – Learn more about the app.  
3. Profile Page – To view your profile, first click the Login button in the navigation bar.  
   - Once logged in, your profile details (name, email, favorite cuisine) will appear.  
   - You can click Logout at any time to return to the logged-out state.  
4. Recipe Details Page – Click on a recipe card to view its ingredients and cooking instructions.  

## Next Steps
Moving forward, I’d like to:  
- Add more Kenyan and homemade recipes manually so the app reflects local cuisine.  
- Improve the search and filtering so it feels smoother and more useful.  
- Add a way to save favorite recipes for quick access.  
- Eventually build real authentication instead of just using React state.  

## Getting Started
1. Clone this repo:
   ```bash
   git clone https://github.com/KarenVA-png/flavorquest.git
   cd flavorquest
