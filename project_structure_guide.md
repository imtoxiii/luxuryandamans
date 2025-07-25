# Project Structure Guide for Luxuryandamansfixednew

This guide aims to provide an overview of the project structure, how different files are linked, and where to make changes for specific functionalities.

## 1. Project Root (`Luxuryandamansfixednew/project/`)

This is the main project directory containing all source code and configuration files.

## 2. Source Directory (`src/`)

This directory contains the core application code.

### `src/main.tsx`
- **Purpose**: This is the entry point of the React application. It typically renders the main `App` component into the `index.html`.
- **Links to**: `App.tsx`

### `src/App.tsx`
- **Purpose**: The main application component. It handles routing and overall layout.
- **Links to**: Various pages in `src/pages/` and common components in `src/components/`.

### `src/index.css`
- **Purpose**: Global CSS styles for the application, often used with Tailwind CSS.

## 3. Components (`src/components/`)

This directory contains reusable React components.

- **Example**: `Header.tsx`, `Footer.tsx`, `CardSlider.tsx`, `Testimonials.tsx`
- **Usage**: Components in this directory are imported and used within pages (`src/pages/`) or other components to build the UI.
- **To modify**: If you need to change the appearance or behavior of a specific UI element (e.g., the navigation bar, a card, or the testimonial section), you'll likely find its code here.

## 4. Pages (`src/pages/`)

This directory contains the main views or pages of the application.

- **Examples**: `Home.tsx`, `Destinations.tsx`, `Contact.tsx`, `Blog.tsx`
- **Structure**:
    - `Home.tsx`: The main landing page.
    - `[slug].tsx` files (e.g., `destinations/[slug].tsx`, `packages/[slug].tsx`, `blog/[slug].tsx`): These are dynamic routes, meaning they generate pages based on a `slug` parameter (e.g., `/destinations/ross-island`). They typically fetch data based on the slug to display specific content.
- **Usage**: Pages are rendered by the router defined in `App.tsx`.
- **To modify**: If you need to change the content or layout of a specific page (e.g., adding a new section to the home page, modifying the display of a blog post), this is where you'll make changes.

## 5. Data (`src/data/`)

This directory stores static data used across the application.

- **Examples**: `destinations.ts`, `packages.ts`, `blogPosts.ts`, `locations.ts`
- **Usage**: These files export arrays of objects that are imported and used by components and pages to display dynamic content.
- **To modify**: If you need to update content like destination details, package information, or blog post content (e.g., changing an image URL for a destination), you'll edit these files.

## 6. Hooks (`src/hooks/`)

This directory contains custom React hooks for reusable logic.

- **Examples**: `useScrollTop.ts`, `usePageTransition.ts`
- **Usage**: Hooks are imported and used within functional components to manage state, side effects, or other logic.

## 7. Lib (`src/lib/`)

This directory contains utility functions, API integrations, and other shared logic.

- **Examples**: `supabase.ts` (for database interactions), `currencyApi.ts` (for currency conversion), `email.ts` (for email functionalities)
- **Usage**: Functions from `lib/` are imported and used by components or pages as needed.

## 8. Types (`src/types/`)

This directory defines TypeScript interfaces and types for data structures.

- **Examples**: `blog.ts`, `location.ts`
- **Usage**: These types ensure type safety and provide better code completion and error checking during development.

## Linking and Relationships

- **Pages use Components**: Pages like `Home.tsx` import and arrange various components (e.g., `Hero`, `Destinations`, `Testimonials`) to build their layout.
- **Components use Data**: Components often import data from `src/data/` to populate their content dynamically (e.g., `Destinations.tsx` uses `destinations.ts`).
- **Pages/Components use Hooks/Lib**: Both pages and components can utilize custom hooks for shared logic or functions from the `lib/` directory for specific functionalities (e.g., API calls).

## Example Scenario: Changing a Destination Image

1.  **Identify the affected area**: The "Popular Destination" section on the home page.
2.  **Locate the component**: Based on the name, `Destinations.tsx` in `src/components/` is likely responsible for rendering the destination cards.
3.  **Find the data source**: Open `src/components/Destinations.tsx` and look for where it imports its data. You'll likely see an import from `../data/destinations.ts`.
4.  **Edit the data**: Open `src/data/destinations.ts` and find the specific destination (e.g., "Ross Island" or "Cellular Jail"). Update the `image` URL.

By following this guide, you should be able to navigate the codebase more effectively and make changes with confidence. 