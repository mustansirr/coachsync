# CoachSync

**CoachSync** is a web-based platform that helps coaches manage their teams and monitor athlete performance by integrating wearable data, team communication, and streamlined team organization tools.

## 🚀 Goal
The main goal of CoachSync is to provide coaches with a centralized dashboard where they can:
- Create and manage multiple athlete teams
- Invite athletes to join their teams with a simple email signup
- View athlete health and activity data by integrating wearable devices (starting with Fitbit)
- Send team-wide announcements via a one-way chat
- View consolidated performance data in a team dashboard

The MVP focuses on coaches as the primary users, with athletes joining teams via invite links and connecting their wearable devices.

## 🛠️ Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/) (React-based framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Authentication & Backend**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Realtime)
- **Wearable Integration**: [Fitbit Web API](https://dev.fitbit.com/build/reference/web-api/)
- **Deployment**: [Vercel](https://vercel.com/) (frontend), Supabase (backend)
- **Charting**: [Chart.js](https://www.chartjs.org/) or [Recharts](https://recharts.org/) for data visualization

## ✅ MVP Features
1. **Team Management**
   - Coaches can create and delete teams
   - Athletes can join via invite links

2. **Authentication**
   - Simple email and password-based signup (via Supabase Auth)

3. **Fitbit Integration**
   - Athletes can connect their Fitbit to sync basic health metrics (steps, heart rate, etc.)

4. **Team Dashboard**
   - Coaches can view consolidated data of their team members

5. **Broadcast Chat**
   - Coaches can send one-way messages to their teams (announcement feed)

## 📦 Folder Structure (Planned)
```bash
/pages          # Next.js pages (routes)
/components     # Shared React components
/lib            # Utility functions (e.g. API helpers, Fitbit logic)
/styles         # Tailwind and global CSS
/supabase       # Supabase-related setup
/public         # Static assets
```

## 💻 Local Setup
```bash
# Install dependencies
npm install

# Run the dev server
npm install
```

You must configure Supabase project keys and Fitbit API credentials to enable full functionality. See `.env.example` for required keys.

## 👥 Team Roles
This project is being built by a 3-person team, each contributing across backend, frontend, and design. Roles are shared and rotated weekly.

## 📈 Upcoming Features
- Athlete wearable data sync (via Fitbit API)
- Coach notifications and updates feed
- Team-level data visualization (steps, HR, trends)
- Invite system for athletes (via secure link/token)

## 📌 Notes
- MVP is developed following Lean Startup principles and MoSCoW prioritization
- Initial Fitbit integration will use basic health metrics and expand over time

---

> For questions, feature requests, or feedback, please contact the CoachSync team.
