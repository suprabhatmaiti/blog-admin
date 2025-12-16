# Blog Admin Dashboard (Frontend Developer Assessment)

### Edwid Tech PVT LTD Assessment Submission

| Category             | Status        | Details                                                     |
| :------------------- | :------------ | :---------------------------------------------------------- |
| **Live Demo**        | [Vercel Link] | https://blog-admin-three-blue.vercel.app/                   |
| **Demo Video**       | [Loom Link]   | https://www.loom.com/share/296756a4ded046749eb5c7793cba8a7d |
| **Data Persistence** | LocalStorage  | Used for all blog and activity data storage.                |

---

## Technical Stack & Architecture

This project is a single-page application (SPA) built using **React** with **Vite** and styled using **Tailwind CSS**. The architecture is designed for scalability and maintainability, strictly adhering to all technical constraints.

| Tool                     | Purpose             | Note                                                                                                                                        |
| :----------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| **Frontend**             | React v19, Vite     | Utilizes modern React features and Vite's fast build environment.                                                                           |
| **Styling**              | Tailwind CSS        | A utility-first CSS framework was used for custom, fully responsive styling.                                                                |
| **Data Persistence**     | LocalStorage        | Handles all data persistence for CRUD operations and activity logs.                                                                         |
| **Constraint Adherence** | **NO UI Libraries** | All components (Button, Dropdown, Layout) are custom-built to satisfy the requirement of not using external UI libraries (MUI, AntD, etc.). |

---

## Assessment Logic Implementation

This section provides the required explanation for the implemented features and chosen Brain Tasks.

### A. Medium Brain Task: Soft Delete + Auto Purge

**Implementation Goal:** To prevent immediate data loss while ensuring the storage mechanism remains clean of permanently stale data.

| Feature         | Implementation Logic                                                                                                                                                                                                                                                                         |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Soft Delete** | Delete operations do not remove the blog record from `localStorage`. Instead, two metadata fields are set: `isDeleted: true` and `deletedAt: [ISO_TIMESTAMP]`. The primary blog listing applies a filter (`!blog.isDeleted`) to exclude these entries from the view.                         |
| **Auto Purge**  | A background cleanup mechanism runs on application load (in **`src/App.jsx`**'s `useEffect` hook). It iterates over all records, and if `isDeleted` is true and the `deletedAt` timestamp is older than **24 hours**, the record is permanently removed (`hard delete`) from `localStorage`. |

### B. Quick Logic Task: Disable Save unless form data changed

**Implementation Goal:** Enhance UX by disabling action buttons when no changes have been made to the form.

| Implementation Logic                                                                                                                                                                                                                                                                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The initial state of the form data is captured in a **`useRef`** variable (`initialData.current`). A comparison logic (`JSON.stringify(currentData) !== JSON.stringify(initialData.current)`) generates an `isFormChanged` boolean. This flag directly controls the `disabled` prop of the "Create" and "Save Changes" buttons, which prevents redundant save operations. |

### C. Pagination Logic (Core Feature Explanation)

**Implementation Goal:** Implement client-side pagination with 5 items per page, working correctly with active search and filters.

| Implementation Logic                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The `BlogsPage` (**`src/pages/BlogsPage/Blogs.jsx`**) uses `useMemo` to first generate a collection of `filteredBlogs` based on user-inputted search text and dropdown selections. This filtered array is then sliced into `paginatedBlogs` using the current `currentPage` and a fixed **5 items per page** (`blogsPerPage`). To maintain a consistent UX, a `useEffect` hook resets `currentPage` to **1** every time a search query or filter value is modified. |

### D. Invalid Image Validation (Core Feature Explanation)

**Implementation Goal:** Enforce file type and size constraints for the image upload feature.

| Implementation Logic                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The validation function in **`src/utils/ImageUtils.jsx`** runs immediately upon file selection. It performs two checks: <br> 1. **Type Check:** Verifies the MIME type is `image/jpeg` or `image/png`. <br> 2. **Size Check:** Ensures the file size is less than or equal to **1MB** (`1024 * 1024` bytes). <br> If validation fails, an error string is returned, which is displayed in the **`ImageHandler.jsx`** component, and the file processing to Base64 is aborted, thus preventing invalid data entry. |

---

## Folder Architecture Structure

The repository follows a clean, component-driven structure with separation of concerns:

```
src/
├── assets/                 // Static assets (logos, icons)
├── components/
│   ├── common/             // Reusable, generic UI components (Button, Dropdown, Card)
│   └── layout/             // Application-wide layout components (Sidebar, Navbar)
├── pages/
│   ├── BlogForm/           // Contains all components for Add/Edit forms
│   ├── BlogsPage/          // Components for the Blogs Table view (Table, Toolbar, Data Row)
│   ├── DashboardPage/      // Dashboard views
│   └── NotFoundPage.jsx
└── utils/                  // Pure functions for reusable logic (Image validation, CRUD helpers, Activity logging)
├── App.jsx                 // Main layout, routing, and Auto Purge logic
└── main.jsx                // App initialization and Router setup
```

---

## How to Run the Project Locally

1.  **Clone the repository:**

    ```bash
    git clone [paste-the-git-repository-link-here]
    cd [put-the-repository-name-here]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

4.  The application will be available at the URL specified by Vite (e.g., `http://localhost:5173`).
