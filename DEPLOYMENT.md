# 🚀 Vercel Deployment Guide

This guide will help you deploy the CGU Space Club website to Vercel.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Node.js** - Version 16 or higher

## 🚀 Deployment Steps

### **Method 1: Deploy via Vercel Dashboard (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a React project

3. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist/spa`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### **Method 2: Deploy via Vercel CLI**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   vercel
   ```

4. **Follow the Prompts**
   - Link to existing project or create new
   - Set up project settings
   - Deploy

## ⚙️ Configuration Files

### **vercel.json**
```json
{
  "version": 2,
  "buildCommand": "npm run vercel-build",
  "outputDirectory": "dist/spa",
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "functions": {
    "api/index.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### **package.json Scripts**
```json
{
  "scripts": {
    "vercel-build": "npm run build:client"
  }
}
```

## 🔧 Environment Variables

If you need environment variables:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables:
   - `NODE_ENV` = `production`
   - Add any other required variables

## 📱 Custom Domain (Optional)

1. **Add Domain in Vercel**
   - Go to project settings
   - Click "Domains"
   - Add your custom domain

2. **Update DNS Records**
   - Add CNAME record pointing to Vercel
   - Wait for DNS propagation

## 🔄 Automatic Deployments

Vercel automatically deploys when you:
- Push to main branch
- Create pull requests
- Merge pull requests

## 🐛 Troubleshooting

### **Build Failures**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify build command is correct

### **404 Errors**
- Ensure `vercel.json` routes are configured correctly
- Check that SPA routing is set up properly

### **API Issues**
- Verify API routes are in `/api` directory
- Check function configuration in `vercel.json`

## 📊 Performance Optimization

1. **Enable Vercel Analytics**
   - Go to project settings
   - Enable "Vercel Analytics"

2. **Optimize Images**
   - Use Vercel's Image Optimization
   - Compress images before upload

3. **Enable Caching**
   - Vercel automatically caches static assets
   - Configure cache headers if needed

## 🔒 Security

1. **Environment Variables**
   - Never commit sensitive data
   - Use Vercel's environment variables

2. **API Security**
   - Add rate limiting
   - Validate input data
   - Use HTTPS (automatic with Vercel)

## 📈 Monitoring

1. **Vercel Dashboard**
   - Monitor deployments
   - Check performance metrics
   - View error logs

2. **Custom Analytics**
   - Add Google Analytics
   - Use Vercel Analytics
   - Monitor Core Web Vitals

## 🚀 Production Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project connected
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Custom domain configured (if needed)
- [ ] Analytics enabled
- [ ] Performance optimized
- [ ] Security measures in place

## 📞 Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **CGU Space Club**: spacesystems@cgu-odisha.ac.in

---

**Your CGU Space Club website is now live on Vercel! 🚀**
