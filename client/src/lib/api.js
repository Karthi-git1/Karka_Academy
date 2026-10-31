import { courses, tracks } from '../data/courses';
import { testimonials, faqs } from '../data/testimonials';

const API_BASE = 'http://localhost:5000/api';

export async function fetchCourses(params = {}) {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}/courses?${query}`);
    if (!res.ok) throw new Error('API failed');
    return await res.json();
  } catch (e) {
    // Local fallback
    let filtered = [...courses];
    if (params.track && params.track !== 'All') {
      filtered = filtered.filter(c => c.track.toLowerCase().includes(params.track.toLowerCase()));
    }
    if (params.audience) {
      filtered = filtered.filter(c => c.audience.includes(params.audience));
    }
    if (params.q) {
      filtered = filtered.filter(c => c.title.toLowerCase().includes(params.q.toLowerCase()) || c.description.toLowerCase().includes(params.q.toLowerCase()));
    }
    return filtered;
  }
}

export async function fetchCourseBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/courses/${slug}`);
    if (!res.ok) throw new Error('Not found');
    return await res.json();
  } catch (e) {
    return courses.find(c => c.slug === slug) || null;
  }
}

export async function submitContact(data) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (e) {
    // Local fallback storage
    const existing = JSON.parse(localStorage.getItem('karka_contacts') || '[]');
    existing.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem('karka_contacts', JSON.stringify(existing));
    return { success: true, fallback: true };
  }
}

export async function submitEnroll(data) {
  try {
    const res = await fetch(`${API_BASE}/enroll`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (e) {
    const existing = JSON.parse(localStorage.getItem('karka_enrollments') || '[]');
    existing.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem('karka_enrollments', JSON.stringify(existing));
    return { success: true, fallback: true };
  }
}
