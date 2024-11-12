[Live Demo](https://flag-app.tobaunta.torkelsson.online)

# Techovers Flag-Challenge! 🐺

Design to go from:
[Light-Theme](./design/Desktop-light.png)
[Dark-Theme](./design/Desktop-dark.png)

## Challenge

The challenge is to integrate [REST-Countries API](https://restcountries.com) and use the data to display the countries to look like the design images.

The app needs to:

- See all countries from the API on the home page
- Search for a country using an input field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to neighboring countries on the details page
- Toggle the color scheme between light and dark mode.

## Navigate through the project

Your task is to build the project according to the designs in the folder `/design`.

In this challenge, you'll find mobile and desktop designs in light and dark color schemes for both pages.

There is also a `style-guide.md` file that contains the information you need, such as color palette and fonts.

## Startup Guide 🌟

1. Look through the designs to start planning how to tackle the project. This step is crucial to help you think ahead for styling and to create reusable styles.

2. Create a component for your cards on which the flags and information about the country should be set.

3. Use props to insert information such as residents, capital, etc. into the map component.

4. When you retrieve the data about the countries, you can use the Fetch API or axios in combination with the React hook - useEffect.

5. Create functionality to display the country information when the user clicks on a country from the list. You can use React's state functionality to manage which country is selected.

**Great Luck** 🐺
