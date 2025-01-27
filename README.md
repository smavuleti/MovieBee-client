# MovieBee Client-Side Application

## Objective

Using **React**, this project aims to build the client-side of the MovieBee application based on its existing server-side code (REST API and database). The client-side will serve as the user interface, allowing users to interact with the app’s backend through several views.

---

## Context

In the past, server-side rendering dominated web development, but modern libraries like **React** have revolutionized client-side development, offering enhanced user experiences. This project focuses on creating the interface for the MovieBee app.  

The app will use React to create reusable, maintainable components that connect with the previously built REST API. In addition to usability and design, the project emphasizes the readability and maintainability of the codebase.  

---

## Design Criteria

### User Stories
- **Movie Information**: As a user, I want to access information about movies to learn more about movies I’ve watched or am interested in.
- **Profile Management**: As a user, I want to create a profile so I can save data about my favorite movies.

---

## Features & Requirements

### Essential Views & Features

#### 1. Main View
- Displays **all movies** (with an image, title, and description for each).
- Includes a **search feature** to filter the list of movies.
- Allows users to **select a movie** for more details.
- Provides the ability to **log out**.
- Allows navigation to the **Profile View**.

#### 2. Single Movie View
- Displays detailed data about a single movie, including:
  - Description
  - Genre
  - Director
  - Image
- Allows users to **add the movie** to their list of favorites.

#### 3. Login View
- Allows users to log in with a username and password.

#### 4. Signup View
- Enables new users to register by providing:
  - Username
  - Password
  - Email
  - Date of birth

#### 5. Profile View
- Displays user registration details.
- Allows users to:
  - **Update information** (username, password, email, date of birth).
  - View and **manage favorite movies**.
  - **Deregister** their account.

---

### Additional Views & Features

#### Genre View
- Displays data about a genre, including:
  - Name
  - Description
  - Example movies.

#### Director View
- Provides details about a director, such as:
  - Name
  - Biography
  - Birth year and death year.
  - Example movies from the director.

#### Single Movie View (Additional Features)
- Displays:
  - Actors starring in the movie.
  - Movie release date and rating.
- Allows users to:
  - Access genre descriptions and director bios via tooltips.
  - Share a movie.
  - View related or similar movies.

#### Main View (Additional Features)
- Provides sorting options for movies.
- Allows users to create a **“To Watch” list** in addition to the **Favorite Movies list**.

---

## Technical Requirements

- The application must be a **single-page application (SPA)**.
- State routing must be used for navigation and sharing URLs.
- The application must include a **search feature** for filtering movies.
- Use **Parcel** as the build tool.
- Write the app using **React** (with function components) and **ES2015+** syntax.
- Use **Bootstrap** as a UI library for styling and responsiveness.
- The application must be **hosted online**.
- Optionally, use **React Redux** for state management (e.g., filtering movies).

---

## Project Setup

### Prerequisites
- Node.js and npm installed.
- Basic knowledge of React, JavaScript, and Bootstrap.

### Project Structure
```
project-folder/
├── src/
│   ├── components/
│   │   ├── MainView.jsx       # Main view of the application
│   │   ├── MovieCard.jsx      # Card component for displaying movies
│   │   ├── MovieView.jsx      # Detailed view for a single movie
│   │   ├── LoginView.jsx      # Login page
│   │   ├── SignupView.jsx     # Signup page
│   │   ├── ProfileView.jsx    # User profile page
│   └── index.js               # Application entry point
├── public/
│   ├── index.html             # Main HTML file
│   └── styles.css             # Global CSS
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
└── .gitignore                 # Ignored files and folders
```

---

### Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

5. Deploy the app to a hosting platform of your choice.

---

## Deployment

The application must be hosted online (e.g., GitHub Pages, Netlify, or Vercel) to allow public access.

---



## License

This project is licensed under the MIT License. See the LICENSE file for details.

