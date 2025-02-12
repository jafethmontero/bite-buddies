# BiteBuddies - AI-Powered Recipe Sharing Platform

BiteBuddies is a full-stack web application built using the **MERN (MongoDB, Express, React, Node.js) stack with TypeScript**. It allows users to share recipes, get AI-generated recipe suggestions, and interact with a vibrant cooking community.

## 🚀 Features
- **User Authentication** (JWT & Google OAuth)
- **Recipe Management** (Create, Read, Update, Delete Recipes)
- **AI-Powered Features**:
  - Ingredient recommendation
  - Recipe personalization
  - AI-generated recipes
  - Nutritional analysis
- **Social Features**:
  - Like, comment, and share recipes
  - Follow users
  - Real-time notifications
- **Advanced Search & Filtering**
- **Serverless Image Processing (Cloudinary/Vercel API)**
- **Dark Mode Support**

## 🏗️ Tech Stack
### **Frontend** (React + TypeScript)
- React (Next.js optional)
- TailwindCSS
- React Router
- Axios

### **Backend** (Node.js + TypeScript)
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- WebSockets for real-time notifications
- Cloudinary for image storage

## 🛠️ Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/bite-buddies.git
cd bite-buddies
```

### 2️⃣ Install Dependencies
#### **Backend**
```sh
cd backend
npm install
```

#### **Frontend**
```sh
cd ../frontend
npm install
```

### 3️⃣ Create a `.env` File
#### **Backend (`backend/.env`)**
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Application
#### **Backend**
```sh
cd backend
npm run dev
```

#### **Frontend**
```sh
cd ../frontend
npm start
```

## 📌 Folder Structure
```
📦 bite-buddies
 ┣ 📂 backend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 server.ts  (Main Express app)
 ┃ ┃ ┣ 📜 config.ts   (Database connection)
 ┃ ┃ ┣ 📜 routes.ts   (API routes)
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┃ ┣ 📜 User.ts    (User schema)
 ┃ ┣ 📜 .env
 ┃ ┣ 📜 package.json
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 App.tsx      (React Router setup)
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┃ ┣ 📜 Home.tsx
 ┃ ┃ ┃ ┣ 📜 Login.tsx
 ┃ ┃ ┃ ┣ 📜 Register.tsx
 ┃ ┣ 📜 package.json
```

## 🚀 Deployment
- **Frontend:** Deploy to Vercel or Netlify
- **Backend:** Deploy to DigitalOcean or AWS

## 📢 Future Enhancements
- Implement GraphQL API
- Mobile app version
- Web3-based recipe NFT marketplace

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to GitHub (`git push origin feature-name`)
5. Create a Pull Request

## 📄 License
This project is licensed under the **MIT License**.

---
💡 **Need help?** Reach out via Issues or Discussions! 🚀
