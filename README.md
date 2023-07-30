# Simple PC Builder Website using Next.js - Frontend Submission

This is the frontend of a Simple PC Builder Website using Next.js. It is built using Next.js, `React`, `Redux Toolkit`, and `NextAuth` for user authentication. It provides a user-friendly interface for users to build their own PC by selecting PC components and exploring featured products. This readme will provide an overview of the project, instructions for setup, and details about the features implemented.

## Overview

The Simple PC Builder Website is a platform for building custom PCs. It utilizes `Next.js`, a popular `React` framework, to enable **server-side rendering** and **static site generation** for better performance and SEO. The frontend includes various pages and components for navigation, product listings, and building PCs. It also provides user authentication using `NextAuth` with Github for a secure PC building experience.

[Live Demo](https://pcbuilder-frontend.vercel.app/)

## Setup

To set up the frontend locally, please follow these steps:

### Clone the frontend repository from GitHub: Frontend Repository Link

Install the required dependencies using npm. Run the following command in the project directory:

```nodeJS
npm install
```

### Configure the environment variables.

Create a .env.local file in the root directory and provide the necessary values for the following variables:

```env
NEXTAUTH_SECRET=insert-your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000/

GITHUB_ID=insert-your-github-oauth-app-id
GITHUB_SECRET=insert-your-github-oauth-secret
```

### Start the development server. Run the following command:

```nodeJS
npm run dev
```

This will start the frontend development server at http://localhost:3000.

## Features Implemented

### Navbar:

The navbar features a "PC Builder" button that redirects users to the PC Builder page to start building their PC.
The navbar also includes a Categories dropdown with routes to different PC component categories using Static Site Generation (SSG).

### Home Page:

The home page displays at least 6 random PC components as Featured Products. They are fetched in the server side using `getStaticProps` and `getStaticPaths`.
Each Featured product card shows important details and links to the product detail page.

There are 6 Featured Categories under the Featured Product section, each clickable and redirecting to a page displaying all products of that category.

### Product Detail Page:

The product detail page provides comprehensive details about each PC component. This data is also fetched in the server side.

Users can view the product image, name, category, status, price, description, key features, individual rating, average rating, and reviews.

### PC Builder Page:

The PC Builder page allows users to choose/select PC components from different categories.

Users can view all components of any specific category and add them to the PC Builder page.

The selected components are updated in the PC Builder page's state, and a central Redux store is used to manage the component selection.

The `Complete Build` button only becomes active if a product is selected for every category.

## User Authentication (Bonus):

The PC Builder page is a protected/private route that only logged-in users can access.

NextAuth with the Github provider is used for user authentication.

## Responsiveness:

The entire application is responsive for both mobile and desktop devices to ensure a seamless user experience.

## Dependencies

### Normal Dependencies

- `@reduxjs/toolkit (^1.9.5)`: A package that simplifies the usage of Redux by providing pre-configured tools and utilities.
- `autoprefixer (10.4.14)`: A plugin for PostCSS that automatically adds vendor prefixes to CSS, ensuring better cross-browser compatibility.
- `eslint (8.45.0)`: A pluggable linting utility for JavaScript and TypeScript code. It helps maintain a consistent code style and identify potential issues.
- `eslint-config-next (13.4.12)`: A configuration for ESLint tailored for Next.js applications. It includes rules specific to Next.js projects.
- `next (13.4.12)`: A popular React framework for building server-side rendered and statically generated web applications.
- `next-auth (^4.22.3)`: A package for implementing authentication and identity management in Next.js applications, supporting various social login providers.
- `postcss (8.4.27)`: A tool for transforming CSS with JavaScript plugins. It is used as a part of the build process to process and optimize CSS.
- `react (18.2.0)`: A JavaScript library for building user interfaces. It serves as the foundation of the frontend application.
- `react-dom (18.2.0)`: A package that provides DOM-specific methods for React. It is essential for rendering React components to the DOM.
- `react-icons (^4.10.1)`: A library that provides a collection of customizable icons for React components.
- `react-redux (^8.1.1)`: A package that allows React components to interact with the Redux store, enabling efficient state management.
- `tailwindcss (3.3.3)`: A utility-first CSS framework for building custom user interfaces. It provides a wide range of pre-designed utility classes for styling components.

### Dev Dependencies

- `daisyui (^3.5.0)`: A plugin for Tailwind CSS that provides additional utility classes and components to enhance the development experience. It helps to reduce the amount of custom CSS code required for styling.

## Conclusion

Thank you for reviewing the frontend submission of the Simple PC Builder Website using Next.js project. For any further assistance or inquiries, please contact the project developers.
