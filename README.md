# 🚀 CGU Space Club Website

A modern, responsive website for the CGU Space Club at C. V. Raman Global University, built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### 🏠 **Homepage**
- **Hero Section**: Immersive space-themed background with animated elements
- **Project Showcase**: Interactive carousel showcasing space projects
- **Quick Actions**: Easy navigation to key sections
- **Dynamic Animations**: Smooth transitions and hover effects

### 👥 **Team Page**
- **Meet Your Team**: Professional black-and-white themed team section
- **LinkedIn Integration**: Click on any team member to view their LinkedIn profile
- **Role Management**: Clear hierarchy with President, Custodian, and team members
- **Interactive Cards**: Hover effects and smooth animations

### 🚀 **Projects Page**
- **Featured Projects**: CGU Rocket Program, CubeSat Initiative, Observatory Project, CGUSAT-1
- **Project Statistics**: Real-time project metrics and progress tracking
- **Category Filtering**: Organized by Rocket Development, Satellite Technology, and Space Observation
- **High-Quality Images**: Professional space-themed project visuals

### 📚 **Resources Page**
- **Learning Materials**: Comprehensive study guides and textbooks
- **Video Tutorials**: Step-by-step educational content
- **Software Tools**: Development and analysis tools
- **Interactive Search**: Enhanced search functionality

### 📝 **Blog Page**
- **Latest Articles**: Space exploration news and research updates
- **Trending Topics**: Real-time trending space topics
- **Blog Analytics**: Engagement metrics and statistics
- **Newsletter Subscription**: Stay updated with latest content

### 📞 **Contact Page**
- **Email Integration**: Direct email to spacesystems@cgu-odisha.ac.in
- **Contact Methods**: Multiple ways to reach the team
- **Location Information**: C. V. Raman Global University, Bhubaneswar, Odisha
- **Social Media Links**: Connect on Facebook, Instagram, and LinkedIn

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router 6** - Client-side routing with SPA mode
- **Lucide React** - Beautiful, customizable icons
- **Radix UI** - Accessible UI components

### **Backend**
- **Express.js** - Lightweight web framework
- **Node.js** - JavaScript runtime
- **Vite** - Fast build tool and dev server

### **Development Tools**
- **Vitest** - Fast unit testing framework
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cgu-space-club-website.git
   cd cgu-space-club-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8081` (or the port shown in terminal)

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (client + server)
npm run build        # Production build
npm run start        # Start production server
npm run typecheck    # TypeScript validation
npm test            # Run Vitest tests
```

## 📁 Project Structure

```
cgu-space-club-website/
├── client/                 # React frontend
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Radix UI components
│   │   ├── Navigation.tsx # Main navigation
│   │   ├── Footer.tsx     # Site footer
│   │   └── SEO.tsx        # SEO optimization
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage
│   │   ├── Team.tsx       # Team page
│   │   ├── Projects.tsx   # Projects page
│   │   ├── Resources.tsx  # Resources page
│   │   ├── Blog.tsx       # Blog page
│   │   ├── Contact.tsx    # Contact page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── global.css         # Global styles
├── server/                # Express backend
│   ├── index.ts          # Server setup
│   └── routes/           # API routes
├── shared/                # Shared types
│   └── api.ts            # API interfaces
├── public/                # Static assets
└── dist/                  # Build output
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Orange (#FF6B35) - Space exploration theme
- **Secondary**: Red (#DC2626) - Energy and passion
- **Accent**: Light Orange (#FF8C42) - Highlights
- **Background**: Black (#000000) - Space theme
- **Text**: White/Silver - High contrast readability

### **Typography**
- **Headings**: Custom font-display for impact
- **Body**: System font stack for readability
- **Sizes**: Responsive typography scale

### **Components**
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean, accessible input styling
- **Navigation**: Sticky header with smooth scrolling

## 🌐 Deployment

### **Production Build**
```bash
npm run build
npm start
```

### **Docker Deployment**
```bash
docker build -t cgu-space-club .
docker run -p 8080:8080 cgu-space-club
```

### **Environment Variables**
Create a `.env` file in the root directory:
```env
NODE_ENV=production
PORT=8080
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Customization

### **Adding New Team Members**
1. Open `client/pages/Team.tsx`
2. Add new member object to `teamMembers` array
3. Include: name, role, image, description, achievements, linkedin

### **Adding New Projects**
1. Open `client/pages/Projects.tsx`
2. Add new project to `featuredProjects` array
3. Include: title, status, completion, image, description, teamSize, timeline

### **Updating Contact Information**
1. Open `client/pages/Contact.tsx`
2. Update contact methods in `contactMethods` array
3. Modify email addresses and phone numbers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Dr. Smita Rani Parija** - President
- **Dr. Soumya Mishra** - Custodian
- **Nil** - Non-Technical Head
- **Student Team** - Various roles and responsibilities

## 📞 Contact

- **Email**: spacesystems@cgu-odisha.ac.in
- **Phone**: +91 8908828802, +91 9798376027
- **Location**: C. V. Raman Global University, Bidyanagar, Mahura, Janla, Bhubaneswar, Odisha, India
- **Social Media**: 
  - [Facebook](https://www.facebook.com/profile.php?id=61572395409583)
  - [Instagram](https://www.instagram.com/cgu.spaceclub)
  - [LinkedIn](https://www.linkedin.com/company/cguspace-club/)

## 🙏 Acknowledgments

- C. V. Raman Global University for support
- Space exploration community for inspiration
- Open source contributors for amazing tools
- Unsplash photographers for beautiful images

---

**Built with ❤️ by CGU Space Club**

*Exploring the cosmos, one project at a time* 🚀
