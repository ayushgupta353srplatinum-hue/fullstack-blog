#  Fullstack Blog App (MERN)

A modern **Fullstack Blog Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** with image upload functionality using Cloudinary.

This project demonstrates real-world integration between frontend and backend, including CRUD operations, API handling, and cloud storage.


##  Features

*  Create Blog Posts (Title, Content, Image)
*  Delete Blog Posts
*  Upload Images using Cloudinary
*  Real-time UI update after actions
*  Responsive and modern UI
*  Fullstack integration (Frontend + Backend)


##  Tech Stack

### Frontend:

* React (Vite)
* Axios
* CSS (Custom Styling)

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (File Upload)
* Cloudinary (Image Hosting)
* CORS & Dotenv

---

##  Project Structure

```
fullstack-blog/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── PostForm.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```
##  Installation & Setup

###  Clone the Repository

```
git clone https://github.com/your-username/fullstack-blog.git
cd fullstack-blog
```

###  Backend Setup

```
cd backend
npm install
```

Create a `.env` file in backend:

```
MONGO_URI=your_mongodb_url
CLOUD_NAME=your_cloudinary_name
API_KEY=your_api_key
API_SECRET=your_api_secret
PORT=5000
```

Run backend:

```
node server.js
```

###  Frontend Setup

```
cd frontend
npm install
npm run dev
```

##  API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/posts     | Get all posts   |
| POST   | /api/posts     | Create new post |
| DELETE | /api/posts/:id | Delete a post   |

##  Image Upload Logic

* Images are uploaded using **Multer**
* Stored in **Cloudinary**
* Only image URL is saved in MongoDB

---

##  Learning Outcomes

* Fullstack MERN integration
* Handling API requests (GET, POST, DELETE)
* File upload using Multer
* Cloud storage integration (Cloudinary)
* Error handling & debugging
* UI/UX improvements

##  Demo

 Add, delete, and view blog posts
 Refresh page to verify data persistence
 Image upload working with Cloudinary


