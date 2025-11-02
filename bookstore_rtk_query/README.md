## 📚 Book Store App (React + Redux Toolkit + RTK Query + Tailwind CSS)

Book Store App is a full-featured CRUD web application built with React, Redux Toolkit, and RTK Query.
It allows users to add, edit, delete, search, and filter books easily while communicating with a backend API — all inside a clean, responsive UI.

---

## 🔑 Key Features

- ➕ Add Book: Add new books with title, author, price, rating, and featured status.
- ✏️ Edit Book: Update book information; form gets prefilled automatically.
- ❌ Delete Book: Remove books instantly — both from the UI and the server.
- 🔍 Search Book: Search books by title, author, or price in real-time.
- 🌟 Filter Books: Filter by “All” or “Featured” category (client-side).
- ⚡ Data Fetching: Uses RTK Query for efficient API calls and caching.
- 🧠 State Management: Powered by Redux Toolkit for predictable state updates.
- 🖌️ UI/UX: Fully responsive layout using Tailwind CSS v4.

---

## 🧩 Tech Stack

| Category             | Tools                         |
| -------------------- | ----------------------------- |
| **Frontend**         | React (Vite)                  |
| **State Management** | Redux Toolkit                 |
| **API Handling**     | RTK Query                     |
| **Styling**          | Tailwind CSS v4               |
| **Icons**            | Lucide React                  |
| **JSON Server**      | JSON Server for fake REST API |

## Redux devtools

- `npm install --save-dev @redux-devtools/extension`

## ⚙️ Installation & Setup

- Clone or fork the repo `git@github.com:MosfiqurRubel/book_store_rtk_query.git`
- Install dependencies using `npm install` or `yarn install`
- Run it using `npm run dev` or `yarn dev`

The app will be available on `http://localhost:5173` by default.

Default API endpoint: http://localhost:9000/books

---

## 🧠 How It Works

- Page Load: Fetches all books from the server using useGetBooksQuery().
- Add Book: Submits new book data via useAddBookMutation(), updates list automatically.
- Edit Book:
  - Clicking the ✏️ edit icon navigates to /books/edit/:id.
  - Form is pre-filled using useGetBookQuery(bookId).
  - On submit, updates the book via useEditBookMutation() and redirects to Home.
- Delete Book: Instantly removes the book using useDeleteBookMutation() and updates the list.
- Search & Filter:
  - Search works client-side (filters by title, author, or price).
  - Filter toggles between “All” and “Featured” books.

---

## 🧾এই এসাইনমেন্ট এ যা যা করতে হবেঃ

এসাইনমেন্ট 4 এ যা যা করা হয়েছিলো, ঠিক সেগুলোই করতে হবে। তবে এখানে RTK Query ব্যবহার করে API কল করে করতে হবে।

✓ পেজ লোড হলেই, সার্ভার থেকে বই এর লিস্ট গুলো নিয়ে এসে দেখাবে

✓ 'Add Book পেজে' বই এর তথ্য দিয়ে সাবমিট করলে সেগুলো সার্ভারে গিয়ে সেভ হবে। অবশ্যই RTK Query এর Mutation কুয়েরি ব্যবহার করে করতে হবে এবং এড হলে 'Add' পেজ থেকে Home পেজে চলে আসবে।

✓ 'Book List' - এর ডানে 'All', 'Featured' নামে দুটি ট্যাগ আছে, 'Featured' সিলেক্ট করলে featured বই গুলো শুধু ফিল্টার করে দেখাবে। 'All' দিলে সব গুলোই দেখাবে। এটি ক্লাইন্ট সাইডেই করতে হবে।

✓ নেভিগেশন মেনুতে 'Search Bar' - আছে, সেখানে সার্চ করলে, শুধু মাত্র বই এর নাম দিয়ে সার্চ করবে এবং সার্চ রেজাল্ট 'Book List' সেকশনেই ফিল্টার হয়ে দেখাবে। সার্চ বার ফাঁকা থাকলে, স্বভাবিক ভাবে যেমন সব বই গুলো দেখায়, সেভাবেই দেখাবে।

✓ কার্ড আইটেমের 'Edit' আইকনে ক্লিক করলে এডিটের একটি পেজে নিয়ে যাবে। এর জন্যে React Router ব্যবহার করতে হবে এবং এডিট পেজে গেলে, সেই বইটির তথ্য দিয়ে ফর্ম টা আগে থেকেই পূরন করা থাকবে। এখন এই ফর্ম এর কোনো ডেটা আপডেট করলে সেটি সার্ভার এও আপডেট হয়ে যাবে এবং আপডেট হলে এডিট পেজ থেকে হোম পেজে চলে আসবে।

✓ সব শেষে ডিলেট বাটনে ক্লিক করলে, বইটি সার্ভার থেকেও ডিলেট হয়ে যাবে
