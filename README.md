# 🛍️ Simple E-commerce Website (PWA)

The **Simple E-commerce Website** is a modern and responsive Progressive Web App (PWA) built with **Next.js** and **TypeScript**. It simulates an e-commerce platform with product listings, cart management, and a seamless shopping experience. The project integrates **Convex** for backend logic, **Resend** for sending order confirmation emails, and uses **Next.js API routes** to handle all server-side operations. Global state is managed using the **Context API**, ensuring smooth and consistent data flow across the application.

---

## 🚀 Features

This project includes several key functionalities such as dynamic product listings, responsive layouts, and a user-friendly cart system. Users can easily add, remove, and manage items in their cart, while order confirmation emails are automatically sent using **Resend**. Backend operations and logic are powered by **Convex** and **Next.js API routes**, providing a robust and scalable foundation. The application also supports **offline access** through PWA capabilities and maintains a clean, responsive design for all devices.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React + TypeScript)  
- **Backend Services:** Next.js API Routes, Convex  
- **Email Service:** Resend  
- **State Management:** React Context API  
- **Styling:** CSS or Tailwind CSS (depending on setup)  
- **Deployment:** Vercel or Netlify  

---

Clone the repository:
git clone https://github.com/yourusername/simple-ecommerce-website.git


Navigate into the project folder:
cd simple-ecommerce-website

Install dependencies:
npm install

Set up environment variables in a .env.local file:
CONVEX_URL=your_convex_url
RESEND_API_KEY=your_resend_api_key

Run the development server:
npm run dev
