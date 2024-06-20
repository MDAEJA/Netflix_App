# Netflix App

Welcome to the Netflix App. This web application is designed to provide a seamless experience for browsing and watching movies. It includes features such as user authentication, movie listings, and detailed movie pages.

## Features

- **User Authentication**: Sign up and log in to access personalized content.
- **Movie Listings**: Browse through Now Playing, Popular, Top Rated, and Upcoming movies.
- **Movie Details**: View detailed information about each movie, including trailers and background information.

## Technologies Used

- **Frontend**: React.js, Material-UI (MUI)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Netlify

## File Structure

### `/src/pages`

- **`Login.js`**: Handles user login and sign-up functionality. Provides validation and feedback using MUI Snackbar.
- **`Home.js`**: Main homepage displaying different movie categories. Manages user context and dynamic content display.
- **`MainPage.js`**: Renders the main content with video title and background components.

### `/src/component`

- **`Header.js`**: Displays the header with navigation options.
- **`VideoTitle.js`**: Shows the title of the currently selected video.
- **`VideoBackGround.js`**: Displays the background video.
- **`MoviePage.js`**: Lists movies currently playing.
- **`PopularMovies.js`**: Lists popular movies.
- **`TopRatedMovies.js`**: Lists top-rated movies.
- **`UpComingMovies.js`**: Lists upcoming movies.
- **`MoviePlay.js`**: Handles the movie playback functionality.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/netflix-app.git
    cd netflix-app
    ```

2. Install dependencies for the server:
    ```bash
    cd server
    npm install
    ```

3. Install dependencies for the client:
    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1. Start the MongoDB server.
2. Start the backend server:
    ```bash
    cd server
    npm start
    ```

3. Start the frontend client:
    ```bash
    cd ../client
    npm start
    ```

The application will be running on `http://localhost:3000`.

## Usage

- Visit the homepage to navigate through various movie categories.
- Sign up or log in to access personalized movie recommendations and playback.

## Deployment

The application is deployed on Netlify and can be accessed [here](https://dazzling-sprinkles-6a38c5.netlify.app/).

## Git-Repository

The application code  is deployed on Git-Hub and can be accessed [here](https://github.com/MDAEJA/Netflix_App.git).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
