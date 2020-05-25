# My Fridge

https://rememberfridge.com

Simple SPA for your home. Stay on top of what's in your fridge — wherever you are, whenever it is.

- [x] Manage inventory

- [x] Manage grocery list

- [ ] Cloud sync (Firebase integration in progress)

- [x] Dark mode support

---

## Getting started

Bootstrapped with `create-react-app` and styled with `styled-component`. Live demo at https://rememberfridge.com

1. Install packages: `npm install`

1. Start dev server: `npm start` and open [http://localhost:3000](http://localhost:3000)

1. Build: `npm run build` for production build to the `build` folder.<br>

---

## Features

### Manage inventory

<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416622/my_fridge_app/screenshots/phone_listview_light_m2kqxd.png" alt="light mode" style="max-width: 350px;">
<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416623/my_fridge_app/screenshots/phone_listview_dark_ym0t8v.png" alt="dark mode" style="max-width: 350px;">
<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416623/my_fridge_app/screenshots/pad_listview_light_teyfrt.png" alt="light mode" style="max-width: 700px;">
<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416622/my_fridge_app/screenshots/pad_listview_dark_qfvlgj.png" alt="dark mode" style="max-width: 700px;">

### Manage Grocery List

An older iteration of [TODO MVC](http://todomvc.com/), simplified.

<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416622/my_fridge_app/screenshots/phone_shopping_light_rt4uoj.png" alt="Shopping list (light mode)" style="max-width: 350px;">
<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416622/my_fridge_app/screenshots/phone_shopping_dark_pu1mfj.png" alt="Shopping list (dark mode)" style="max-width: 350px;">

### Add/edit/remove items

<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416623/my_fridge_app/screenshots/phone_add_light_etzc7k.png" alt="Editor view (light mode)" style="max-width: 350px;">
<img src="https://res.cloudinary.com/dm4tymaa3/image/upload/v1590416622/my_fridge_app/screenshots/phone_add_dark_coziap.png" alt="Editor view (dark mode)" style="max-width: 350px;">

---

## Project plans

- Integrate Firebase for authetication and database sync

- Refactor component codes to:

  - Prepare proper routing instead of all components being mounted at all times
  - Reduce redundant markup — _styles, JSX structure, state management..._
  - Achieve more readability — _variable naming, method calls, component hierarchy..._
