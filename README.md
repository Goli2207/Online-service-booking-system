# Online Service Booking System

A complete MERN stack starter project for booking home and professional services online.

## Features

- User registration and login with JWT authentication
- Browse service categories with pricing and duration
- Book services with preferred date, address, and notes
- User dashboard to review bookings
- Admin-friendly backend structure with seeded sample services
- REST API with MongoDB, Mongoose, Express, and protected routes
- React frontend built with Vite and React Router

## Tech Stack

- MongoDB
- Express.js
- React
- Node.js
- Mongoose
- JWT
- Vite

## Project Structure

```text
OnlineServiceBookingSystem/
  client/
  server/
  package.json
```

## Setup

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment variables

Copy the example file:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Update values in `server/.env` and `client/.env` if needed.

For Google Maps based current-location autofill on the booking page, add either:

```bash
VITE_GOOGLE=your_google_maps_api_key
```

or:

```bash
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

### 3. Seed sample services

```bash
npm run seed
```

### 4. Start the app

```bash
npm run dev
```

Frontend:

- `http://localhost:5173`

Backend:

- `http://localhost:5001`

## Default API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/profile`
- `GET /api/services`
- `GET /api/services/:id`
- `POST /api/bookings`
- `GET /api/bookings/my-bookings`
- `PATCH /api/bookings/:id/status`

## Notes

- Create an admin user manually in MongoDB or extend the seed script to promote one.
- The booking status update route is protected and limited to admins.
- The frontend stores auth data in `localStorage` for convenience.
