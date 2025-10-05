# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

এই মডিউলে আমরা দেখে ফেললাম কিভাবে আমরা React প্রোজেক্ট এ রিডাক্স ব্যবহার করে State ম্যানেজ করতে পারি। এই প্রোজেক্টে যা যা দেখানো হয়েছে, তার উপর ভিত্তি করে আপনাদের জন্যে একটি এসাইনমেন্ট তৈরি করা হয়েছে। এই এসাইনমেন্ট এর জন্যে আমরা HTML/CSS ব্যবহার করে একটি template তৈরি করে দিয়েছি। সেই template টি কে Rect এ কনভার্ট করে সেখানে ‘react-redux’ প্যাকেজ ব্যবহার করতে হবে State ম্যানেজ করতে হবে।

**উল্লেখ্য যে, এসাইনমেন্ট এর ডিজাইনে কোন ধরনের পরিবর্তন করা যাবে না এবং HTML template এ দেয়া কোনো বাটন বা এলিমেন্ট এর ক্লাস বা আইডি পরিবর্তন করা যাবে না। সেই ক্লাস বা আইডি দিয়েই আপনাকে এসাইনমেন্টটি সম্পন্ন করতে হবে। অন্যথায় এসাইনমেন্টটি গ্রহনযোগ্য হবে না এবং এসাইনমেন্ট এর কোনো মার্ক নাও পেতে পারেন।**

## এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ প্রজেক্টটি React-redux দিয়ে করতে হবে।

✓ Destination From, Destination To, Journey Date, Guests, Class সবগুলো ফিলাপ করে Book বাটনে ক্লিক করলে ডাটা গুলো Redux store এ সেভ হবে ।

✓ Redux store থেকে ডাটা গুলো নিয়ে এসে টেবিলে দেখাতে হবে।

✓ সর্বোচ্চ ৩ টি ডাটা এড করলে Book বাটন ডিজেবল হয়ে যাবে। এখানে আপনাকে ভ্যালিডেশন করতে হবে। অর্থাৎ সর্বোচ্চ ৩ টি রো এড করা যাবে, ৪র্থ ডেটা এড করা যাবে না ।

✓ টেবিলে থাকা ডিলেট বাটন এ ক্লিক করলে row টি ডিলেট হয়ে যাবে, সেই সাথে Redux store থেকেও ডাটা ডিলেট হয়ে যাবে।
