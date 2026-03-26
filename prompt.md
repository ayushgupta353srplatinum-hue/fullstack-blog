#  Prompts & Problem-Solving Summary

This document highlights key challenges faced during the development of the **Fullstack Blog App (MERN)** and how they were resolved.

##  Key Challenges & Fixes

### 1. Project Understanding

Initially confusion tha Week 8 (frontend) aur Week 10 (backend) integration ko leke. Later samjha ki concept apply karna tha, isliye new blog app build kiya using MERN stack.

### 2. Frontend-Backend Connection

API errors (500, connection refused) aaye. Fix:

* Backend server properly run kiya
* Correct API endpoints use kiye
* Axios request structure sahi kiya

### 3. MongoDB Issues

Errors like invalid URI / connection fail. Fix:

* Correct MongoDB connection string use kiya
* `.env` variables properly configure kiye

### 4. Cloudinary Upload Errors

Issues like invalid signature & image not showing. Fix:

* Cloudinary credentials verify kiye
* Multer + Cloudinary config sahi kiya
* Image URL database me store kiya

### 5. Backend Errors

Export/import mismatch aur route issues aaye. Fix:

* Controller functions properly export kiye
* Routes aur functions match kiye


### 6. UI & Image Handling

Image properly fit nahi ho rahi thi. Fix:

* CSS me `object-fit: cover` use kiya
* Card-based responsive UI design kiya


##  Key Learnings

* Fullstack integration requires proper coordination of frontend, backend, and database
* Debugging aur error reading is the most important skill
* Small config mistakes bhi major issues create karte hain

##  Conclusion

This project helped in building a complete **MERN Fullstack Application** with CRUD operations, API integration, and image upload functionality, while improving debugging and problem-solving skills.

