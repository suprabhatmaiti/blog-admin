# 🚀 Blog Admin Dashboard (Full-Stack-Ready Frontend)

### Modern, Responsive Dashboard for Content Management

| Category         | Status        | Details                                                                                  |
| :--------------- | :------------ | :--------------------------------------------------------------------------------------- |
| **Live Demo**    | [Vercel Link] | https://blog-admin-three-blue.vercel.app/                                                |
| **Data Storage** | LocalStorage  | Currently utilizes LocalStorage for client-side persistence (ready for API integration). |

---

## 💡 Project Goal & Overview

This project is a modern, responsive **Blog Admin Dashboard** designed to manage content with a focus on UI/UX, robust component architecture, and advanced client-side data handling.

The application demonstrates competence in:

- Building structured, scalable component architecture.
- Implementing complex client-side CRUD operations.
- Creating a fully custom, responsive user interface without relying on external component libraries.
- Advanced problem-solving techniques for data management and user experience.

---

## 🛠️ Technical Stack & Architecture

| Tool              | Purpose                    | Note                                                                                    |
| :---------------- | :------------------------- | :-------------------------------------------------------------------------------------- |
| **Framework**     | React v19, Vite            | Chosen for speed and modern component-based development.                                |
| **Styling**       | Tailwind CSS               | Utility-first approach for highly maintainable and responsive styling.                  |
| **State/Data**    | LocalStorage API           | Serves as a local persistence layer for the blog and activity data.                     |
| **UI Philosophy** | **Zero Component Library** | All UI elements (Dropdowns, Buttons, Layouts) are custom-coded for full design control. |

---

## ⚙️ Key Technical Implementations

### 1. Advanced Data Handling (Soft Delete & Auto Purge)

The application implements a resilient data strategy to ensure integrity and maintenance efficiency.

| Feature         | Implementation Logic                                                                                                                                                                                                                                          |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Soft Delete** | Delete functionality flags records with `isDeleted: true` and records the `deletedAt` timestamp instead of immediate removal. This allows records to be retained for audit or recovery while being excluded from the main view.                               |
| **Auto Purge**  | A cleanup script runs on application initialization (**`src/App.jsx`**'s `useEffect`). It permanently removes Soft Deleted records whose `deletedAt` timestamp is older than **24 hours**, ensuring the LocalStorage remains clean of permanently stale data. |

### 2. Form Control & User Experience

| Feature                        | Implementation Logic                                                                                                                                                                                                                                       |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disable Save on No Change**  | The "Save/Create" button is disabled until a user modifies a form field. This is achieved by comparing the current form state (`formData`) against the initial state (stored in a `useRef`), preventing redundant actions and signaling clear user intent. |
| **Image Validation & Preview** | Validation in **`src/utils/ImageUtils.jsx`** enforces two constraints: **1) JPG/PNG file type** and **2) Max 1MB size**. Invalid uploads are immediately rejected with an error message. Valid images are converted to Base64 for instant preview.         |

### 3. Data Presentation (Pagination & Filtering)

| Feature                    | Implementation Logic                                                                                                                                                                                                                                                                                                                  |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Client-Side Pagination** | The `BlogsPage` first computes all `filteredBlogs` based on live search and filter inputs. This list is then paginated (fixed at **5 items per page**). A crucial UX feature is implemented to **reset the current page to 1** whenever a search or filter value is changed, guaranteeing the user is always on a valid results page. |

---

## 📂 Repository Structure

The project follows a standard and scalable structure:

```
src/
├── components/
│   ├── common/             // Reusable base elements (Button, Dropdown, Card)
│   └── layout/             // App structure (Sidebar, Navbar)
├── pages/
│   ├── BlogForm/           // Contains all Add/Edit form components
│   ├── BlogsPage/          // Contains the table view, toolbar, and pagination
│   └── DashboardPage/      // Dashboard and Activity Log
└── utils/                  // Pure, reusable logic functions (Image, CRUD, Activity logging)
```

---

## 🚀 Get Started

1.  **Clone the repository:**

    ```bash
    git clone [Repository URL]
    cd [Repository Name]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run Locally:**
    ```bash
    npm run dev
    ```
