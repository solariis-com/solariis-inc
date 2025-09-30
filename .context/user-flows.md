# User Flows

## 1. Service Discovery Flow (Public)

**Actor:** Prospective client (not authenticated)

```
Landing Page (/)
  ↓
  [Explore Services CTA]
  ↓
Service Matrix (/matrix)
  ├─ View services grouped by phase (Strategy, Creativity, Visual, Guidelines, Applications)
  ├─ Filter by phase/tags
  ├─ Click service card → Modal with details
  │   └─ View deliverables, estimated hours, dependencies
  ↓
  [Interested in multiple services]
  ↓
Subscriptions Page (/subscriptions)
  ├─ Browse plans (Starter, Essential, Advanced, Premium)
  ├─ See hours/month and features
  ├─ Select plan
  ↓
  [Contact CTA]
  ↓
Telegram/Contact Form
  └─ Submit inquiry with selected services + plan
```

## 2. Subscription Selection Flow

```
User browses /subscriptions
  ↓
Compares plans (hours, features, price)
  ↓
Selects plan tier
  ↓
CTA button ("Get Started" / "Contact Us")
  ↓
  ├─ Option A: Telegram redirect (opens chat)
  └─ Option B: Contact form pre-filled with plan
  ↓
Admin receives inquiry → Manual follow-up
  ↓
(Future: Stripe checkout for automated billing)
```

## 3. Authentication Flow

**Scenario:** User needs to access dashboard

```
User clicks "Dashboard" or "Login"
  ↓
Login Page (/login)
  ├─ Email/Password form
  ├─ "Forgot Password" link
  └─ "Sign Up" link
  ↓
  [Submit credentials]
  ↓
Supabase Auth validates
  ↓
  ├─ Success: Redirect to /dashboard
  └─ Error: Show validation message
```

**New User Signup:**

```
Signup Form (/signup)
  ├─ Full Name
  ├─ Email
  ├─ Password
  ├─ Company Name (optional)
  └─ Telegram Username (optional)
  ↓
Supabase creates user + profile
  ↓
Auto-login + redirect to /dashboard
```

## 4. Client Dashboard Flow

**Actor:** Authenticated client

```
Dashboard Landing (/dashboard)
  ↓
View Kanban Board
  ├─ Column: Brief Received (projects awaiting start)
  ├─ Column: In Progress (active work)
  ├─ Column: Review (client review/feedback)
  └─ Column: Delivered (completed)
  ↓
Project Card displays:
  ├─ Title
  ├─ Status
  ├─ Progress indicator
  ├─ Deadline (if applicable)
  └─ Hours spent / estimated
  ↓
  [Click project card]
  ↓
Project Detail View
  ├─ Description
  ├─ Task list (subtasks)
  ├─ Files/Deliverables (future)
  ├─ Comments/Feedback (future)
  └─ Update stage button (if permitted)
  ↓
  [Drag-and-drop project between columns]
  ↓
Optimistic update → Server mutation → Sync
```

## 5. Project Creation Flow (Admin)

**Actor:** Admin user

```
Admin Dashboard
  ↓
  [New Project button]
  ↓
Create Project Form
  ├─ Select client (from profiles)
  ├─ Project title
  ├─ Description
  ├─ Select service modules (from matrix)
  ├─ Estimated hours
  ├─ Deadline
  ├─ Initial stage (default: Brief Received)
  └─ Submit
  ↓
Project appears in client's dashboard
  ↓
Client receives notification (future)
```

## 6. Kanban Stage Transitions

**Rules for stage changes:**

1. **Brief Received → In Progress**
   - Admin action: Start work

2. **In Progress → Review**
   - Admin action: Submit for review
   - Client notified (future)

3. **Review → In Progress**
   - Client action: Request revisions
   - Admin notified (future)

4. **Review → Delivered**
   - Client action: Approve
   - Admin marks as complete

5. **Any stage → Archived**
   - Admin action: Remove from active board

## 7. Hours Tracking Flow

**Subscription hour management:**

```
User has active subscription (e.g., 40 hours/month)
  ↓
Projects created with estimated hours
  ↓
As tasks completed, hours logged
  ↓
Dashboard shows:
  ├─ Subscription plan name
  ├─ Hours remaining this cycle
  ├─ Renewal date
  └─ Total hours across all projects
  ↓
  [Hours exceed subscription]
  ↓
Alert: "You've used 42/40 hours. Consider upgrading or purchasing add-on hours."
```

## 8. Inquiry to Project Conversion

**Admin workflow:**

```
Service Inquiry submitted (from /matrix or /subscriptions)
  ↓
Admin views in inquiry queue
  ↓
Admin contacts client (Telegram, email, phone)
  ↓
Agreement reached
  ↓
Admin creates:
  ├─ User account (if doesn't exist)
  ├─ User subscription (link to plan)
  └─ Project (initial stage: Brief Received)
  ↓
Client receives login credentials
  ↓
Client accesses /dashboard
```

## 9. Error & Edge Cases

### User not authenticated
```
User tries to access /dashboard
  ↓
ProtectedRoute intercepts
  ↓
Redirect to /login with return URL
  ↓
After login → redirect back to /dashboard
```

### Subscription expired
```
User logs in with expired subscription
  ↓
Dashboard shows "Subscription Expired" banner
  ↓
CTA: "Renew Subscription" → /subscriptions
  ↓
Projects visible but read-only (can't create new)
```

### No projects yet
```
New client logs into /dashboard
  ↓
Empty state:
  ├─ Welcome message
  ├─ "Your projects will appear here once created"
  └─ CTA: "Contact Us" / "Browse Services"
```

## 10. Mobile Experience

All flows optimized for mobile:
- Responsive Service Matrix grid
- Touch-friendly Kanban (swipe instead of drag-and-drop on small screens)
- Collapsed Navbar on mobile
- Bottom sheet modals for service details