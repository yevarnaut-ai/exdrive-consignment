# ExDrive Consignment Website

A modern, clean landing page for ExDrive's Bring a Trailer consignment service. Built with React and Tailwind CSS.

## Quick Start

### Prerequisites
- GitHub account (you have this ✅)
- Access to exdrive.us DNS settings (you have this ✅)
- Node.js 16+ (if running locally)

### Features
- ✅ Hero section with car photography
- ✅ Value propositions (BaT specialists, 95% success rate, personalized service)
- ✅ 6-step process breakdown
- ✅ Recent sales gallery (4 cars with "Sold" badges)
- ✅ Lead capture form (submits to support@exdrive.us via Formspree)
- ✅ Success confirmation message
- ✅ Fully responsive design
- ✅ Zero backend — form submission via email

## Deployment Instructions

### Step 1: Create Formspree Form (5 minutes)

This is where form submissions will be emailed to you.

1. Go to **https://formspree.io/signup**
2. Sign up for free (no credit card needed)
3. Create a new form:
   - **Form name:** "ExDrive Consignment"
   - **Email address:** support@exdrive.us
4. You'll get a form ID (looks like: `f/xxxxxxxxxxx`)
5. Copy this ID and replace `YOUR_FORM_ID` in `src/App.js` line 37:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

Test it by submitting a test form — you should receive an email at support@exdrive.us immediately.

### Step 2: Push Code to GitHub (10 minutes)

1. Create a new repository on GitHub:
   - Go to **https://github.com/new**
   - Repository name: `exdrive-consignment`
   - Description: "ExDrive consignment landing page"
   - Public or Private (doesn't matter)
   - **Do NOT initialize with README** (we have one)
   - Click "Create repository"

2. Clone the repo locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/exdrive-consignment.git
   cd exdrive-consignment
   ```

3. Copy all files from this project into your cloned repo

4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit: ExDrive consignment site"
   git push -u origin main
   ```

### Step 3: Deploy to Vercel (5 minutes)

1. Go to **https://vercel.com/signup**
2. Sign up with GitHub (authorize Vercel to access your repos)
3. Click "Import Project"
4. Select your `exdrive-consignment` repository
5. Vercel will auto-detect it's a React app — confirm settings
6. Click "Deploy"
7. Wait ~2-3 minutes for deployment to complete

**Result:** Your site is now live at `https://exdrive-consignment.vercel.app` (temporary URL)

### Step 4: Connect Custom Domain (exdrive.us)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add domain: `exdrive.us`
3. Vercel will show you DNS records to update
4. Go to your domain registrar (where you registered exdrive.us):
   - Log in to your registrar account
   - Find DNS settings
   - Update the nameservers or add the A records that Vercel shows you
5. Wait 5-15 minutes for DNS to propagate
6. Your site is now live at **https://exdrive.us** ✅

### Step 5: Test Everything (5 minutes)

1. Visit **https://exdrive.us** in your browser
2. Scroll through the entire page
3. Test the form:
   - Fill in test data
   - Submit
   - Check support@exdrive.us for the email
4. Confirm all images load correctly

## Updating the Site

Every change is deployed automatically:

1. Edit files locally (or in GitHub web editor)
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: [describe change]"
   git push
   ```
3. Vercel automatically redeploys (60 seconds later, site is updated)

## Customization Guide

### Hero Image
- File: `src/App.js` line ~95
- Current: Placeholder Unsplash image
- To change: Update the `src` URL to your car image
- Best: Use one of your actual ExDrive car photos

### Recent Sales Gallery
- File: `src/App.js` lines ~215-290
- Shows 4 cars with "Sold" badges
- Each image has an `src` URL you can update
- Replace with your actual sold car photos

### Text & Copy
- Hero headline: Line ~93
- Value props: Lines ~111-126
- Process steps: Lines ~135-162
- Footer: Lines ~362-398
- Contact info: Update lines ~350-356

### Colors & Styling
- All colors use Tailwind CSS classes (slate-900, slate-800, etc.)
- To change theme: Edit `tailwind.config.js`
- No CSS files to edit — everything is in HTML classes

## Hosting & Domain FAQ

**Q: Where is my site hosted?**
A: On Vercel's CDN (globally distributed). Very fast, always secure.

**Q: Do I pay for hosting?**
A: No, Vercel's free tier covers everything you need. No credit card required.

**Q: What if I get a lot of traffic?**
A: Vercel auto-scales. Free tier can handle thousands of concurrent users.

**Q: Can I use exdrive.us for other things?**
A: Yes. You can point subdomains elsewhere:
- `consign.exdrive.us` → this site (Vercel)
- `mail.exdrive.us` → email (your mail provider)
- Or use `exdrive.us` just for this site

## Form Submission Details

When someone fills out the form, you receive an email with:
- Owner name
- Email address
- Phone number
- Year, Make, Model
- Mileage
- Condition notes

**What you do next:**
1. Review the submission
2. Reply personally to their email
3. Schedule a consultation call
4. Proceed with consignment

## Troubleshooting

**Form not submitting?**
- Confirm Formspree Form ID is correct in `src/App.js`
- Check that support@exdrive.us is verified in Formspree
- Test from Formspree dashboard first

**Images not loading?**
- Verify image URLs are correct and public
- Check browser console for errors (Right-click → Inspect → Console)
- Try a different image URL from Unsplash or Cloudinary

**Domain not working?**
- DNS propagation takes 5-15 minutes
- Check your domain registrar's DNS settings match Vercel's records
- Try `https://exdrive.vercel.app` in the meantime (this always works)

**Need to update the site?**
- Edit files in GitHub or locally
- Push changes
- Vercel auto-deploys in ~60 seconds
- No downtime, no manual deployment

## File Structure

```
exdrive-consignment/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Next Steps

1. ✅ Create Formspree form
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel
4. ✅ Connect exdrive.us domain
5. ✅ Test form submission
6. ✅ Swap in your car images
7. ✅ Share exdrive.us link with leads

## Questions?

Everything is set up to work out of the box. If you need to make changes:
- Styling: Edit class names in `src/App.js`
- Content: Update text in `src/App.js`
- Images: Update `src` URLs in `<img>` tags
- Email: Change Formspree Form ID

Good luck! 🚀
