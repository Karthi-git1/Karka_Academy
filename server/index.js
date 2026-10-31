const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const submissionsFile = path.join(__dirname, 'submissions.json');
function saveSubmission(type, data) {
  let existing = [];
  try {
    if (fs.existsSync(submissionsFile)) {
      existing = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
    }
  } catch (e) {}
  existing.push({ type, data, timestamp: new Date().toISOString() });
  fs.writeFileSync(submissionsFile, JSON.stringify(existing, null, 2));
}

// Data
const courses = [
  { id: 1, slug: 'generative-ai', title: 'Generative AI', track: 'AI & Tech', duration: '4 months', badge: '🔥 Most Popular' },
  { id: 2, slug: 'full-stack-development', title: 'Full Stack Development', track: 'AI & Tech', duration: '6 months', badge: '⭐ Top Rated' },
  { id: 3, slug: 'python-django', title: 'Python & Django', track: 'AI & Tech', duration: '4 months' },
  { id: 4, slug: 'react-native', title: 'React Native', track: 'AI & Tech', duration: '4 months' },
  { id: 5, slug: 'uiux-design', title: 'UI/UX Design', track: 'Design', duration: '3 months', badge: '🎨 Creative' },
  { id: 6, slug: 'web-designing', title: 'Web Designing', track: 'Design', duration: '3 months' },
  { id: 7, slug: 'graphic-designing', title: 'Graphic Designing', track: 'Design', duration: '3 months' },
  { id: 8, slug: 'video-editing', title: 'Video Editing', track: 'Digital Media', duration: '3 months', badge: '🎬 Trending' },
  { id: 9, slug: 'multimedia-animation', title: 'Multimedia & Animation', track: 'Digital Media', duration: '4 months' },
  { id: 10, slug: 'digital-marketing', title: 'Digital Marketing', track: 'Content & Marketing', duration: '3 months', badge: '📈 High Demand' },
  { id: 11, slug: 'seo-analyst', title: 'SEO Analyst', track: 'Content & Marketing', duration: '2 months' },
  { id: 12, slug: 'content-writing', title: 'Storytelling & Content Writing', track: 'Content & Marketing', duration: '2 months' },
  { id: 13, slug: 'cloud-devops', title: 'Cloud & DevOps', track: 'Other Tech', duration: '5 months', badge: '☁️ Future Ready' },
  { id: 14, slug: 'data-engineering', title: 'Data Engineering', track: 'Other Tech', duration: '5 months' },
  { id: 15, slug: 'data-analytics-ai', title: 'Data Analytics with AI', track: 'Other Tech', duration: '4 months', badge: '🤖 AI-Powered' },
  { id: 16, slug: 'hr-finance', title: 'HR & Finance', track: 'Non Tech', duration: '3 months' },
  { id: 17, slug: 'tally', title: 'Tally', track: 'Non Tech', duration: '2 months' },
  { id: 18, slug: 'business-analyst', title: 'Business Analyst', track: 'Non Tech', duration: '3 months' }
];

app.get('/api/health', (req, res) => res.json({ status: 'healthy', academy: 'Karka AI Academy' }));

app.get('/api/courses', (req, res) => {
  const { track, q } = req.query;
  let result = [...courses];
  if (track && track !== 'All') {
    result = result.filter(c => c.track.toLowerCase().includes(track.toLowerCase()));
  }
  if (q) {
    result = result.filter(c => c.title.toLowerCase().includes(q.toLowerCase()));
  }
  res.json(result);
});

app.get('/api/courses/:slug', (req, res) => {
  const course = courses.find(c => c.slug === req.params.slug);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, program, message } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email and 10-digit phone number are required.' });
  }
  saveSubmission('contact', { name, email, phone, program, message });
  res.json({ success: true, message: 'Career call scheduled successfully.' });
});

app.post('/api/enroll', (req, res) => {
  const { name, email, phone, program, education, paymentPreference } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Required fields missing' });
  }
  saveSubmission('enroll', { name, email, phone, program, education, paymentPreference });
  res.json({ success: true, message: 'Application submitted successfully.' });
});

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  saveSubmission('newsletter', { email });
  res.json({ success: true, message: 'Subscribed successfully.' });
});

app.listen(PORT, () => {
  console.log('Karka Academy REST API running on port ' + PORT);
});
