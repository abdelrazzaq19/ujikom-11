// src/services/api.js
// Centralized API service – all backend calls go through here.
// Set REACT_APP_API_URL in your .env file (defaults to localhost:5000)

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Request gagal');
  return data;
}

// ── Products ─────────────────────────────────────────────────────────────────
export const productsAPI = {
  getAll      : (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/products${qs ? `?${qs}` : ''}`);
  },
  getOne      : (id)          => request(`/products/${id}`),
  getCategories: ()           => request('/products/categories'),
};

// ── Gallery ──────────────────────────────────────────────────────────────────
export const galleryAPI = {
  getAll       : (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/gallery${qs ? `?${qs}` : ''}`);
  },
  getCategories: ()            => request('/gallery/categories'),
};

// ── Contact ──────────────────────────────────────────────────────────────────
export const contactAPI = {
  submit: (body) => request('/contact', {
    method : 'POST',
    body   : JSON.stringify(body),
  }),
};

// ── Orders ───────────────────────────────────────────────────────────────────
export const ordersAPI = {
  create: (body) => request('/orders', {
    method : 'POST',
    body   : JSON.stringify(body),
  }),
  getOne: (id) => request(`/orders/${id}`),
};