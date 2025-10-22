# 🍸 Cocktail Recipes App

This is a React application built with [Vite](https://vitejs.dev/) that allows users to view detailed recipes for a variety of cocktails.

Users can search by name, browse alphabetically, save favorite cocktails, and view recipe details in a modal interface.

The app fetches real-time data from [The Cocktail DB](https://www.thecocktaildb.com/), a free and public cocktail recipe API.

## 📦 Dependencies

- **React**
- **Vite**
- **[Headless UI](https://headlessui.com)** – Library with Modal UI Components used to display cocktail details
- **[the-cocktail-db](https://www.npmjs.com/package/the-cocktail-db)** – An unofficial API Library used to interact with The Cocktail DB

---

## Installation

1. **Navigate to a Local Directory and Clone the Repository**

   ```bash
   git clone https://github.com/mrysan/cocktail-recipes-app
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd cocktail-recipes-app
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

## API Configuration

1. **Create a File for Environmental variables**

   - Create new `.env.local` in the root directory

2. **Configure Environment Variables**

   - Copy the contents from `.env.local.example` file into `.env.local` and hit save

## Launch the App!

1. **Run the Development Server**

   ```bash
   npm run dev
   ```

2. **Open in Browser**
   - Visit `http://localhost:5173` in your browser.
