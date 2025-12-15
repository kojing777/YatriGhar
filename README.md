<div align="center">
   
 <img width="120" height="120" src='https://res.cloudinary.com/dp27ua535/image/upload/v1765794849/yatri_qdi61u.png'> — Nepal Comfort

</div>

**<p align="center"> <img alt="React" src="https://img.shields.io/badge/React-Vite-blue.svg"> <img alt="Node.js" src="https://img.shields.io/badge/Node.js-Express-green.svg"> <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Database-green.svg"> <img alt="Stripe" src="https://img.shields.io/badge/Stripe-Payments-purple.svg"> <img alt="License" src="https://img.shields.io/badge/License-ISC-yellow.svg"> </p>**

#### YatriGhar is a full-stack hotel booking platform designed for seamless accommodation discovery and booking across Nepal. Built with the MERN stack, it supports secure authentication, real-time bookings, online payments, hotel owner dashboards, and a modern, responsive UI.

## 📸 Preview
<p align="center" width="80%"> <img src="https://res.cloudinary.com/dp27ua535/image/upload/v1765795694/Screenshot_2025-12-15_163150_oyolyi.png" /> <br><br> </p>

## 🌟 Key Features
### 👤 User Features
- User authentication and authorization using Clerk
- Search and browse hotel rooms by city
- View detailed room information and images
- Book rooms with secure payment processing via Stripe
- Manage personal bookings and reviews
- Responsive design for mobile and desktop

### 🏨 Hotel Owner Features
- Register and manage hotel properties
- Add, edit, and list rooms with images
- Dashboard for managing bookings and analytics
- Secure owner-specific routes and interfaces

### 🔔 General Features
- Image upload and management via Cloudinary
- Email notifications using Nodemailer and Brevo
- Real-time booking confirmations
- Star ratings and reviews system
- Newsletter subscription
- Gallery and blog sections

## 🚀Tech Stack

### Backend
- **🟩Node.js** with **Express.js** for server-side logic
- **🍃MongoDB** with **Mongoose** for database management
- **🔐Clerk** for authentication and user management
- **💳Stripe** for payment processing
- **☁️Cloudinary** for image storage and optimization
- **📧Nodemailer** and **Brevo** for email services
- **📦Multer** for file uploads
- **🌍CORS** for cross-origin requests

### Frontend
- **⚛️React** with **Vite** for fast development and building
- **🎨Tailwind CSS** for styling and responsive design
- **🎞Framer Motion** for animations
- **🛤React Router** for client-side routing
- **🔗Axios** for API requests
- **🔔React Hot Toast** for notifications
- **🎯React Icons** for icon components

## 📦 Installation

### ✅  Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Clerk account for authentication
- Stripe account for payments
- Cloudinary account for image storage
- Email service accounts (Brevo/Nodemailer)

### 🛠️ Backend Setup
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLERK_SECRET_KEY=your_clerk_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   BREVO_API_KEY=your_brevo_api_key
   EMAIL_USER=your_email_user
   EMAIL_PASS=your_email_password
   FRONTEND_URL=http://localhost:5173
   ```

4. Start the development server:
   ```bash
   npm run server
   ```

### Frontend Setup
1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Frontend` directory with the following variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BACKEND_URL=http://localhost:5000
   VITE_CURRENCY=$
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔒 Usage

1. Ensure both backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:5173`.
3. Sign up or log in using Clerk authentication.
4. As a user, search for rooms, view details, and make bookings.
5. As a hotel owner, access the owner dashboard to manage your properties.

## 📁Project Structure

```
yatrighar/
├── README.md
├── Backend/
│   ├── package.json
│   ├── server.js
│   ├── configs/
│   │   ├── brevoMailer.js
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── nodemailer.js
│   ├── controllers/
│   │   ├── BookingController.js
│   │   ├── ClerkWebHooks.js
│   │   ├── HotelController.js
│   │   ├── RoomController.js
│   │   ├── stripeWebhook.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddlewear.js
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Hotel.js
│   │   ├── Room.js
│   │   └── User.js
│   ├── routes/
│   │   ├── bookingRoute.js
│   │   ├── hotelRoute.js
│   │   ├── roomRoute.js
│   │   └── userRoutes.js
│   └── scripts/
│       └── migrate_room_images.mjs
└── Frontend/
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── README.md
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   └── assets.js
        ├── components/
        │   ├── ExclusiveOffers.jsx
        │   ├── FeaturedDestination.jsx
        │   ├── Footer.jsx
        │   ├── Gallery.jsx
        │   ├── Hero.jsx
        │   ├── HotelCart.jsx
        │   ├── HotelReg.jsx
        │   ├── Loader.jsx
        │   ├── Navbar.jsx
        │   ├── NewsLetter.jsx
        │   ├── RecommendedHotel.jsx
        │   ├── ServicesSection.jsx
        │   ├── StarRating.jsx
        │   ├── Testimonials.jsx
        │   ├── Title.jsx
        │   └── hotelOwner/
        │       ├── Navbar.jsx
        │       └── Sidebar.jsx
        ├── context/
        │   └── AppContext.jsx
        └── pages/
            ├── About.jsx
            ├── AllBlogs.jsx
            ├── AllRooms.jsx
            ├── BlogSection.jsx
            ├── DeveloperCard .jsx
            ├── GalleryAll.jsx
            ├── Home.jsx
            ├── MyBookings.jsx
            ├── Reviews.jsx
            ├── RoomDetails.jsx
            └── hotelOwner/
                ├── AddRooms.jsx
                ├── Dashboard.jsx
                ├── Layout.jsx
                └── ListRooms.jsx
```

## 🔌API Endpoints

### User Routes
- `GET /api/user` - Get user profile
- `POST /api/user/register` - Register new user

### Room Routes
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get room by ID
- `POST /api/rooms` - Create new room (owner only)
- `PUT /api/rooms/:id` - Update room (owner only)
- `DELETE /api/rooms/:id` - Delete room (owner only)

### Booking Routes
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking status

### Hotel Routes
- `GET /api/hotels` - Get all hotels
- `POST /api/hotels` - Register new hotel (owner only)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜License

This project is licensed under the ISC License.

## Contact

For questions or support, please contact the development team.

---

**Repository:** [yatriGhar-v2.0](https://github.com/kojing777/yatriGhar-v2.0)
**Owner:** kojing777
