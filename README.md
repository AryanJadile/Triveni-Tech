# Triveni Tech - Web Application

Welcome to the official repository for the Triveni Tech web application. This project is a modern, responsive, and high-performance website built to showcase our services, facilitate contact, and manage internship applications.

## 🚀 Technology Stack

This project is built using a cutting-edge stack focused on performance, scalability, and developer experience:

### Core Framework
- **Next.js 16 (App Router)**: The latest version of the React framework, utilizing Server Components for optimal performance and SEO.
- **React 19**: The latest React library for building interactive user interfaces.
- **TypeScript**: Ensures type safety and code maintainability across the entire codebase.

### Styling & UI
- **Tailwind CSS 3**: A utility-first CSS framework for rapid and responsive UI development.
- **Tailwind Merge & CLSX**: For efficient and conflict-free class name construction.
- **Lucide React**: A beautiful and consistent icon set.
- **Framer Motion**: (If used) For smooth and complex animations.

### Backend & Database
- **Supabase**: An open-source Firebase alternative providing a Postgres database, Authentication, and Storage.
  - Required for storing contact messages and internship applications.
  - Storage is used for hosting uploaded resumes.
- **Resend**: A developer-centric email API for sending transactional emails (Contact form notifications & Application alerts).

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 18+ installed.
- Git installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/triveni-tech-web.git
    cd triveni-tech-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory. You will need to populate this with your own API keys.
    ```bash
    cp .env.example .env.local
    # If .env.example doesn't exist, just create .env.local
    ```

## 🔑 API Keys & Configuration

To make the application fully functional, you must configure the following services.

### 1. Supabase (Database & Storage)
You need a Supabase project to store data.
1. Create a project at [supabase.com](https://supabase.com).
2. Get your project URL and Anon Key from **Project Settings > API**.
3. Create two tables: `contact_messages` and `internship_applications`.
4. Create a storage bucket named `resumes`.

Update your `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Resend (Email Service)
We use Resend to send email notifications when someone contacts you or applies for an internship.

**Important:** The current API keys in the project will be removed. You **MUST** create your own Resend account.

#### Step-by-Step Guide:
1.  **Create an Account**: Go to [resend.com](https://resend.com) and sign up.
2.  **Get API Key**:
    -   Navigate to **API Keys** in the dashboard.
    -   Click **Create API Key**.
    -   Name it (e.g., "Triveni Tech Web").
    -   Copy the key (it starts with `re_`).
3.  **Verify Domain (Recommended)**:
    -   For production, you should verify your domain (e.g., `trivenitech.com`) in the **Domains** tab to send emails from your own address (e.g., `contact@trivenitech.com`).
    -   **Development/Testing**: If you don't have a domain yet, you can use the default testing email `onboarding@resend.dev` (this works for testing but has limitations, like only sending to your own email).
4.  **Update Environment Variables**:
    Add the key and your admin email to `.env.local`.

```env
# Your Resend API Key
RESEND_API_KEY=re_123456789_abcdefg

# The email address where you want to receive notifications
ADMIN_EMAIL=your_personal_email@example.com
```

## 🏃‍♂️ Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages and API routes
│   │   ├── api/             # Backend API endpoints (contact, apply)
│   │   ├── contact/         # Contact page
│   │   ├── careers/         # Careers/Internship page
│   │   ├── layout.tsx       # Root layout (Header, Footer)
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Header, Footer components
│   │   └── home/            # Home page specific sections
│   └── lib/                 # Utility functions and configurations (Supabase client)
├── public/                  # Static assets (images, icons)
├── .env.local               # Environment variables (do not commit)
├── next.config.ts           # Next.js configuration
└── tailwind.config.ts       # Tailwind CSS configuration
```

## 📝 Code Optimization & Readability
- The codebase uses semantic HTML and standard React patterns.
- **Comments**: Key complex logic (especially in API routes) is documented with JSDoc comments.
- **Type Safety**: TypeScript interfaces are used to ensure data consistency.

## 🚀 Deployment

The easiest way to deploy your Next.js app is using the Vercel Platform from the creators of Next.js.

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add your Environment Variables (`RESEND_API_KEY`, etc.) in the Vercel Project Settings.
4. Deploy!
