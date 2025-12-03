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

## 🎨 UI Features Completed

### ✔ Header Section  
- Dropdown menus  
- Search icon  
- Responsive hamburger menu  
- Exact fonts, spacing & colors recreated  

### ✔ Hero Section  
- Full-width background  
- Centered Gita banner  
- Title overlapping header (as original site)  

### ✔ Floating Image  
- “Gita Open” image positioned half in hero & half in chapters section  
- Shadows + clean positioning  

### ✔ Chapters Section  
- 18 chapters rendered dynamically  
- Diamond-shaped chapter boxes  
- Rounded corners just like reference  
- Transparent background strip behind chapter numbers  
- Custom rotated layout  

### ✔ Footer  
- Background image  
- Social icons (Lucide + hover effect)  
- Logo + Wellbeing~Svasti title  
- Copyright section  

---

## 📂 Project Structure
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
│   └── api/
│       └── (future API integration files)
│
├── routes/
│ └── +page.svelte        # Main Bhagavad Gita page UI and  HTML template
│   
│   
├── app.css
│
└── app.html           


---
````
## 🛠 Installation & Setup

### 1️⃣ Install dependencies
```bash
npm install
2️⃣ Start development server
bash
Copy code
npm run dev
3️⃣ Build for production
bash
Copy code
npm run build
🔗 API Integration (Pending)
UI is fully completed. Awaiting API endpoints from the backend team.
Once APIs are provided, integration will be added here.

📸 Screenshots
Add these once ready:

Original website screenshot

Recreated UI screenshot

Side-by-side comparison

👨‍💻 Developer
Shubham Kendre
Frontend Internship – Burning Desire Inclusive
SvelteKit UI Development
