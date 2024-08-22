# Drone Inventory Management App

This project is a straightforward inventory management system tailored for managing drones in a virtual store. It supports categories, types, manufacturers, and items, offering full CRUD (Create, Read, Update, Delete) functionality.

## Features

- **Categories**: Organize drones into distinct categories for better management.
- **Types**: Define specific types of drones within your inventory.
- **Manufacturers**: Keep track of the manufacturers responsible for each drone.
- **Items**: Manage individual drones, including details such as name, price, and description.

## Technologies Used

- **Node.js**: Backend development
- **Express.js**: Web framework for handling routes and middleware
- **PostgreSQL**: Database management system
- **ExpressValidator**: Validation library for ensuring data integrity
- **PG**: PostgreSQL client for Node.js, integrated with Express
- **EJS**: Templating engine for dynamic views
- **CSS**: Styling the application for a clean, responsive design

## Project Structure

- **Set Up**: Begins with setting up an Express server and establishing a connection to a PostgreSQL database.
- **Database Design**: Thoughtfully designed tables and relationships, encompassing categories, types, manufacturers, and items.
- **CRUD Operations**: Provides full Create, Read, Update, and Delete operations for all entities (categories, types, manufacturers, and items).
- **Routes and Controllers**: Well-organized routes and controllers ensure smooth operation of all functionalities.
- **Views**: Clean and simple views to effectively display categories and items.
- **Delete Functionality**: Deleting a category automatically removes associated items, keeping the inventory tidy.
