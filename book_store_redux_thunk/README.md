## 🛒 Book Store App (React + Redux + Thunk + Tailwind CSS)

A simple and fully functional shopping cart application built with React, Redux (Core), and Tailwind CSS.
This project demonstrates state management using Redux, including adding products, managing cart items, and real-time stock updates.

---

## 🚀 Features

- ➕ **Add new book** dynamically (title, author, thumbnail, price, rating, featured)
- 🛍️ **Add to cart** — stock decreases automatically
- ⚡ **Increment / Decrement** product quantity in cart
- 🚫 **Disable Add to Cart** when product stock runs out
- 🧮 **Live total & bill summary** (subtotal, total)
- 🔁 **Stock auto-restores** when items are removed from cart
- 🏠 **Conditional routing** (Home ↔ Cart) without using React Router
- 🎨 **Clean responsive UI** built with Tailwind CSS v4

---

## 🧩 Tech Stack

| Category             | Tools                                       |
| -------------------- | ------------------------------------------- |
| **Frontend**         | React (Vite)                                |
| **State Management** | Redux React-Redux Redux-Thunk (createStore) |
| **Styling**          | Tailwind CSS v4                             |
| **Icons**            | Lucide React                                |

## Redux devtools

- `npm install --save-dev @redux-devtools/extension`

## ⚙️ Installation & Setup

- Clone or fork the repo `git@github.com:MosfiqurRubel/book_store_redux_thunk.git`
- Install dependencies using `npm install` or `yarn install`
- Run it using `npm run dev` or `yarn dev`

The app will be available on `http://localhost:5173` by default.

## এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ ডান পাশে দেয়া ফর্ম এ, যাবতীয় তথ্য ইনপুট দিয়ে সাবমিট করলে, সেটি asynchronously লোকাল সার্ভারে গিয়ে Store হবে।

✓ "Book List" - সেকশনে সার্ভার থেকে বই এর লিস্ট গুলো নিয়ে এসে দেখাতে হবে।

✓ "Book List" - এর ডানে "All, Featured নামে দুটি ট্যাগ আছে, Featured সিলেক্ট করলে 'Featured' বই গুলো শুধু ফিল্টার করে দেখাবে। All দিলে সব গুলোই দেখাবে।

✓ নেভিগেশন মেনুতে "Search Bar" - আছে, সেখানে সার্চ করলে, শুধু মাত্র বই এর নাম দিয়ে সার্চ করবে, এবং সার্চ রেজাল্ট "Book List" সেকশনেই ফিল্টার হয়ে দেখাবে। সার্চ বার ফাঁকা থাকলে, স্বাভাবিক ভাবে যেমন সব বই গুলো দেখায়, সেভাবেই দেখাবে।

✓ কার্ড আইটেমের Edit আইকনে ক্লিক করলে, কার্ডের সব তথ্য ডান পাশের "Add New Book" ফর্মে চলে যাবে। বাটনের নাম তখন "Add Book" থেকে "Update Book" এ কনভার্ট হবে।

✓ "Update Book" এ ক্লিক করলে, প্রোডাক্ট আপডেট হয়ে যাবে, ফর্ম Reset হয়ে যাবে, এবং বাটনের আগের title মানে "Add Book" চলে আসবে।

✓ সব শেষে ডিলিট বাটন ক্লিক করলে, বই টি ডেটাবেজ থেকে ডিলিট হয়ে যাবে।
