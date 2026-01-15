# Triveni Tech - Web Application

Welcome to the official repository for the Triveni Tech web application. This project is a modern, responsive, and high-performance website built to showcase our services, facilitate business inquiries, and manage internship applications.

It includes a secure **Admin Panel** to manage all incoming data directly from the browser.

## 🚀 Technology Stack

This project is built using a cutting-edge stack focused on performance, scalability, and developer experience:

### Core Framework
- **Next.js 16 (App Router)**: Utilizing Server Components for optimal performance and SEO.
- **React 19**: Interactive user interfaces.
- **TypeScript**: Ensures type safety and code maintainability.

### Styling & UI
- **Tailwind CSS 3**: Utility-first CSS for rapid design.
- **Lucide React**: Consistent icon set.
- **Framer Motion**: Smooth entrance and interaction animations.

### Backend & Database
- **Supabase**: 
  - **Database**: Postgres database to store Contact Messages and Quote Requests.
  - **Storage**: Securely hosts uploaded resumes/CVs.
  - **Auth/Security**: Row Level Security (RLS) policies protect user data.
- **Resend**: 
  - Transactional email API for sending instant notifications when users submit forms.

---

## 🛠️ Setup & Installation

Follow these steps to set up the project locally.

### Prerequisites
- Node.js 18+ installed.
- Git installed.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/triveni-tech-web.git
cd triveni-tech-web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup (Critical Step)
Create a `.env.local` file in the root directory. You **must** populate this with your own API keys for the app to work.

```bash
# Create the file
touch .env.local
```

**Copy and paste the following template into your `.env.local` file:**

```env
# ------------------------------
# Supabase Configuration
# ------------------------------
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# REQUIRED for Admin Panel access (find in Supabase > Settings > API > Service Role Key)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# ------------------------------
# Resend Email Configuration
# ------------------------------
RESEND_API_KEY=re_your_resend_api_key
ADMIN_EMAIL=your_email@example.com
```

---

## 🔑 How to Get Your Own API Keys

To make this project yours, you need to replace the placeholder keys with ones from your own accounts.

### 1. Supabase (Database)
1.  Go to [Supabase.com](https://supabase.com) and Sign Up / Log In.
2.  Click **"New Project"**.
3.  Give it a name (e.g., `Triveni-Web`) and a secure database password.
4.  Once the project is ready:
    *   Go to **Project Settings** (gear icon) -> **API**.
    *   Copy the **Project URL**. Paste it into `NEXT_PUBLIC_SUPABASE_URL`.
    *   Copy the **anon public** key. Paste it into `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
    *   **CRITICAL**: Scroll down (or look for "service_role") to find the **service_role secret** key. Copy this and paste it into `SUPABASE_SERVICE_ROLE_KEY`. **Do not share this key publicly.**
5.  **Create Tables**: Go to the SQL Editor in Supabase and run the provided schema scripts (located in `src/lib/schema.sql` if available, or manually create `contact_messages`, `quote_requests`, and `internship_applications` tables).

### 2. Resend (Email Notifications)
1.  Go to [Resend.com](https://resend.com) and Sign Up.
2.  In the dashboard, click **"API Keys"** -> **"Create API Key"**.
3.  Name it "Website Key".
4.  Copy the key (starting with `re_...`) and paste it into `RESEND_API_KEY`.
5.  Update `ADMIN_EMAIL` with the email address where you want to receive alerts.

---

## 🛡️ Admin Panel

This project includes a built-in Admin Panel to view submissions.

- **URL**: `/admin-portal-secure` (Hidden from public navigation)
- **Features**:
  - **Dashboard**: Overview of total stats.
  - **Quotes**: View project estimate requests.
  - **Messages**: Read contact form inquiries.
  - **Internships**: View applicants and download resumes.

**Security Note**: The admin panel uses the `SUPABASE_SERVICE_ROLE_KEY` to bypass standard security rules, customizable `.env` configuration ensures only those with server access can view this data.

---

## 🌐 Hosting on GoDaddy

Hosting a modern Next.js application on GoDaddy requires specific steps because standard GoDaddy "Web Hosting" (cPanel) is optimized for PHP/Static sites, not Node.js apps.

### Option A: The "Best Practice" Way (Vercel + GoDaddy Domain)
*This is the industry standard. Vercel is built by the creators of Next.js and offers the best performance, free SSL, and zero-config deployment.*

1.  **Deploy to Vercel**:
    *   Go to [Vercel.com](https://vercel.com) and sign up.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.
    *   In the configuration step, open the **Environment Variables** tab.
    *   Add all your variables from `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, etc.).
    *   Click **Deploy**.

2.  **Connect GoDaddy Domain**:
    *   In your Vercel Project Dashboard, go to **Settings** -> **Domains**.
    *   Type your GoDaddy domain (e.g., `trivenitech.com`) and click **Add**.
    *   Vercel will give you two records to add to GoDaddy:
        *   **A Record**: `@` points to `76.76.21.21`
        *   **CNAME Record**: `www` points to `cname.vercel-dns.com`
    *   Log within to your **GoDaddy Dashboard** -> **Domain Portfolio**.
    *   Click on your domain -> **DNS** -> **Manage Zones**.
    *   Add/Update the records provided by Vercel.
    *   Wait ~1 hour for propagation. Your site is now live on your domain with SSL!

### Option B: GoDaddy VPS (Advanced)
*Use this ONLY if you are required to host strictly on GoDaddy servers.*

1.  **Buy a VPS Plan**: You need a "Self-Managed VPS" or "Gen 4 VPS" with Ubuntu 22.04 or higher. Standard "Web Hosting" will likely fail or perform poorly.
2.  **Server Setup**: SSH into your server.
    ```bash
    # Update packages
    sudo apt update && sudo apt upgrade
    # Install Node.js 18
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
    # Install PM2 (Process Manager)
    sudo npm install -g pm2
    ```
3.  **Upload Code**: Clone your repo onto the server.
4.  **Build**:
    ```bash
    npm install
    # Set your env vars via export or .env file on server
    npm run build
    ```
5.  **Run**:
    ```bash
    pm2 start npm --name "triveni-web" -- start
    ```
6.  **Nginx Proxy** (Required to expose port 3000 to port 80/custom domain).

**Recommendation**: **Option A (Vercel)** is strictly recommended for Next.js applications to avoid maintenance headaches.
