# 📘 Bhagavad Gita – UI Recreation (SvelteKit)

A fully responsive and visually accurate recreation of the Bhagavad Gita webpage  
as assigned by **Burning Desire Inclusive**.  
This version includes a polished UI built with **SvelteKit + TailwindCSS**,  
following the exact design aesthetics of the reference website.

---

## 🚀 Technologies Used

- **SvelteKit**
- **TailwindCSS**
- **Lucide Icons**
- **HTML / CSS**
- **Responsive Design**
- **Google Fonts (Cinzel, Noto Sans Devanagari, Edensor)**

---

## 🚀 Features
---
- **🎨 Complete UI Implementation**
- Header
- Multi-level dropdown menu
- Search icon
- Responsive hamburger menu for mobile
- Exact fonts, colors & layout matching reference design
- Hero Section
- Full-width background image
- Centered banner image
- BHAGAVAD GITA title overlapping header
- Glass effect & soft shadows
- Floating Image
- Gita book image positioned between hero & chapters
- Perfect alignment + shadow for depth
- Chapters Section
- Dynamic 18 chapter tiles
- Custom diamond-shaped boxes
- Rounded corners using rotation transform
- Transparent bar behind chapter number
- Fully responsive grid layout
- Footer
- Background image
- Lucide icons with hover effect
- Logo + “WELLBEING~SVASTI”
- Copyright & credits
---
## 🔗 API Integration
---
- **Base URL**
```https://sanskrit.ie/api/geeta.php?q={chapter}```

 **Example**

- ```https://sanskrit.ie/api/geeta.php?q=1```
---
## API Data
---
- API returns an array of objects.
- Each object contains:
  sloka (Sanskrit verse) ,
  meaning (English translation) ,
  audio (optional)
---
### Backend Proxy Used (CORS Fix)

Because the API doesn’t allow browser access, a custom SvelteKit endpoint was created:

```src/routes/api/chapter/[chapter]/+server.js``` 

---

### 📂 Project Structure
```
src/
│
├── lib/
│   │
│   ├── assets/
│   │   ├── logo.png
│   │   ├── logo1.png
│   │   ├── gita_banner.png
│   │   ├── gita_open.png
│   │   ├── pic1.jpg
│   │   ├── triangle-img.png
│   │   └── (all project images)
│   │
│   │
│   ├── api/geeta.js        → API helper
│   ├── components/         → UI components
│   └── assets/             → images
│       └── (future API integration files)
│
├── routes/
│   ├── api/chapter/[id]/+server.js  → proxy
│   └── +page.svelte        → home UI
│   
│   
├── app.css
│
└── app.html
       


---
````
## 🛠 Installation & Setup
```
1️⃣ Install dependencies
npm install
2️⃣ Start development server
npm run dev
3️⃣ Build for production
npm run build
```
### 🔗 API Integration (Done)
- UI is fully completed. API integration added here.


👨‍💻 Developer
Shubham Kendre
Frontend Internship – Burning Desire Inclusive
SvelteKit UI Development
