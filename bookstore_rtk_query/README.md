## 🛒 Book Store App (React + Redux + Thunk + Tailwind CSS)

Manage Book Store is a CRUD web application built with React, Redux, and Tailwind CSS, designed to manage book collections efficiently.
Users can add, update, delete, search, and filter books easily — all while maintaining a clean and responsive UI.

---

## 🔑 Key Features

- ➕ Add new books with title, author, price, rating, and image.
- ✏️ Edit and update existing book details.
- ❌ Delete books instantly from the list.
- 🔍 Search books by title or author.
- 🌟 Filter books by “All” or “Featured” category.
- 💾 State management handled using Redux for predictable updates.
- ⚙️ Future-ready for Redux Thunk integration to handle asynchronous API operations.

---

## 🧩 Tech Stack

| Category             | Tools                                       |
| -------------------- | ------------------------------------------- |
| **Frontend**         | React (Vite)                                |
| **State Management** | Redux React-Redux Redux-Thunk (createStore) |
| **Styling**          | Tailwind CSS v4                             |
| **Icons**            | Lucide React                                |
| **JSON Server**      | Mock backend for API testing                |

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

---

## এই এসাইনমেন্ট এ যা যা করতে হবেঃ

এসাইনমেন্ট 4 এ যা যা করা হয়েছিলো, ঠিক সেগুলোই করতে হবে। তবে এখানে RTK Query ব্যবহার করে API কল করে করতে হবে।

✓ পেজ লোড হলেই, সার্ভার থেকে বই এর লিস্ট গুলো নিয়ে এসে দেখাবে

✓ 'Add Book পেজে' বই এর তথ্য দিয়ে সাবমিট করলে সেগুলো সার্ভারে গিয়ে সেভ হবে। অবশ্যই RTK Query এর Mutation কুয়েরি ব্যবহার করে করতে হবে এবং এড হলে 'Add' পেজ থেকে Home পেজে চলে আসবে।

✓ 'Book List' - এর ডানে 'All', 'Featured' নামে দুটি ট্যাগ আছে, 'Featured' সিলেক্ট করলে featured বই গুলো শুধু ফিল্টার করে দেখাবে। 'All' দিলে সব গুলোই দেখাবে। এটি ক্লাইন্ট সাইডেই করতে হবে।

✓ নেভিগেশন মেনুতে 'Search Bar' - আছে, সেখানে সার্চ করলে, শুধু মাত্র বই এর নাম দিয়ে সার্চ করবে এবং সার্চ রেজাল্ট 'Book List' সেকশনেই ফিল্টার হয়ে দেখাবে। সার্চ বার ফাঁকা থাকলে, স্বভাবিক ভাবে যেমন সব বই গুলো দেখায়, সেভাবেই দেখাবে।

✓ কার্ড আইটেমের 'Edit' আইকনে ক্লিক করলে এডিটের একটি পেজে নিয়ে যাবে। এর জন্যে React Router ব্যবহার করতে হবে এবং এডিট পেজে গেলে, সেই বইটির তথ্য দিয়ে ফর্ম টা আগে থেকেই পূরন করা থাকবে। এখন এই ফর্ম এর কোনো ডেটা আপডেট করলে সেটি সার্ভার এও আপডেট হয়ে যাবে এবং আপডেট হলে এডিট পেজ থেকে হোম পেজে চলে আসবে।

✓ সব শেষে ডিলেট বাটনে ক্লিক করলে, বইটি সার্ভার থেকেও ডিলেট হয়ে যাবে
