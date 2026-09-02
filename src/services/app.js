const API_KEY = '8a92f1d0c7e24b68a13f9c5d2e7b41a0';
const BASE_URL = 'https://hongkongcms.datechpartnervault.com/api';

// Helper to get token from localStorage
// const getToken = () => localStorage.getItem('auth_token');
const getToken = () => {
  const token = localStorage.getItem('auth_token');
  console.log('Token exists:', !!token);  // Should print 'true' when logged in
  return token;
};
// Single apiRequest with token support
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API Error');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// ================= BLOG API =================
export const blogAPI = {
  getBlogs: async (params = {}) => {
    const queryParams = new URLSearchParams({ key: API_KEY, ...params });
    return apiRequest(`/blogs?${queryParams}`);
  },
  getCategories: async () => {
    return apiRequest(`/blog-categories?key=${API_KEY}`);
  },
  getBlog: async (id) => {
    return apiRequest(`/blogs/${id}?key=${API_KEY}`);
  },
};
// ================= NEWS EVENT API =================
export const newsEventAPI = {
  getNewsEvents: async (type = null) => {
    const url = type
      ? `/news-events?type=${type}&key=${API_KEY}`
      : `/news-events?key=${API_KEY}`;
    return apiRequest(url);
  },
  getNewsEvent: async (id) => {
    return apiRequest(`/news-events/${id}?key=${API_KEY}`);
  },
};

// ================= TESTIMONIAL API =================
export const testimonialAPI = {
  getTestimonials: async () => {
    return apiRequest(`/testimonials?key=${API_KEY}`);
  },
  getTestimonial: async (id) => {
    return apiRequest(`/testimonials/${id}?key=${API_KEY}`);
  },
};

// ================= COURSE CARD API =================
export const courseCardAPI = {
  getCourseCards: async (courseId) => {
    return apiRequest(`/course-card/${courseId}?key=${API_KEY}&course_id=${courseId}`);
  },
};

// ================= COUNTRY API =================
export const countryAPI = {
  getCountries: async () => {
    return apiRequest('/country_list', {
      method: 'POST',
      body: JSON.stringify({ key: API_KEY, country: 'All' }),
    });
  },
};

// ================= ENQUIRY API =================
export const enquiryAPI = {
  storeEnquiry: async (formData) => {
    return apiRequest('/store_enquiry', {
      method: 'POST',
      body: JSON.stringify({ key: API_KEY, ...formData }),
    });
  },
};

// ================= AUTH API =================
export const authAPI = {
  login: async (email, password) => {
    const data = await apiRequest('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, key: API_KEY }),
    });
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // ✅ If server provides expiry, use it
      if (data.expires_in) {
        const expiryTime = new Date().getTime() + (data.expires_in * 1000);
        localStorage.setItem('token_expiry', expiryTime.toString());
        console.log('✅ Server provided expiry:', data.expires_in, 'seconds');
      } else {
        // ✅ Default to 24 hours if server doesn't provide
        const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('token_expiry', expiryTime.toString());
        console.log('✅ Set default expiry: 24 hours');
      }
    }
    return data;
  },

  register: async (name, email, password) => {
    const data = await apiRequest('/register', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        key: API_KEY
      }),
    });
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // ✅ Set expiry
      if (data.expires_in) {
        const expiryTime = new Date().getTime() + (data.expires_in * 1000);
        localStorage.setItem('token_expiry', expiryTime.toString());
      } else {
        const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('token_expiry', expiryTime.toString());
      }
    }
    return data;
  },

  logout: async () => {
    try {
      await apiRequest('/logout', { method: 'POST' });
    } catch (e) {
      console.warn('Logout API failed, but clearing local data anyway', e);
    } finally {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      localStorage.removeItem('token_expiry'); // ✅ Also remove expiry
    }
  },

  getMe: async () => {
    return apiRequest('/me');
  },
};

// ================= ASSET API =================
export const assetAPI = {
  getAssets: async (params = {}) => {
    const queryParams = new URLSearchParams({ key: API_KEY, ...params }).toString();
    return apiRequest(`/assets?${queryParams}`);
  },

  getFilters: async () => {
    return apiRequest(`/assets/filters?key=${API_KEY}`);
  },

  // downloadAsset: async (id) => {
  //   return `${BASE_URL}/assets/${id}/download?key=${API_KEY}`;
  // },

  downloadAssetOld: async (id) => {
    const token = getToken();

    if (!token) {
      throw new Error('NO_TOKEN');
    }

    try {
      fetch(`${BASE_URL}/assets/${id}/download`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.status === 401) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        throw new Error('UNAUTHORIZED');
      }

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `asset_${id}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      return `${BASE_URL}/assets/${id}/download?key=${API_KEY}`;
    } catch (error) {
      console.error('Download failed:', error);
      throw error;
    }
  },
  downloadAsset: async (id) => {
    const token = getToken();

    if (!token) {
        throw new Error('NO_TOKEN');
    }

    try {
        // FIX: Added 'const response =' before fetch
        const response = await fetch(`${BASE_URL}/assets/${id}/download`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 401) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            throw new Error('UNAUTHORIZED');
        }

        if (!response.ok) {
            throw new Error(`Download failed: ${response.status}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `asset_${id}`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

        return true; // Return true for success, not the URL
    } catch (error) {
        console.error('Download failed:', error);
        throw error;
    }
},
  // downloadAsset: async (id) => {
  //   const token = getToken();

  //   if (!token) {
  //     throw new Error('NO_TOKEN');
  //   }

  //   // Simple and reliable - works for all file types
  //   window.open(`${BASE_URL}/assets/${id}/download?token=${encodeURIComponent(token)}`, '_blank');
  //   return true;
  // },
  // ✅ Record download history (separate API call)
  recordDownloadHistory: async (assetId) => {
    try {
      return await apiRequest(`/assets/${assetId}/record-download`, {
        method: 'POST',
      });
    } catch (error) {
      console.warn('Failed to record download history:', error);
      // Don't throw - allow download to continue even if history recording fails
      return null;
    }
  },

  // ✅ Get download history
  getDownloadHistory: async (page = 1, perPage = 20) => {
    return apiRequest(`/download-history?page=${page}&per_page=${perPage}`);
  },

  // ✅ Sequential download with history recording
  downloadAssetSequential: async (id) => {
    const token = getToken();

    // ✅ Just throw error, let React component handle navigation
    if (!token) {
      throw new Error('NO_TOKEN');
    }

    const url = `${BASE_URL}/assets/${id}/download?key=${API_KEY}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    // ✅ Just throw error, let React component handle 401
    if (response.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      throw new Error('UNAUTHORIZED');
    }

    if (!response.ok) {
      throw new Error(`Download failed: ${response.status}`);
    }

    const blob = await response.blob();
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = `asset_${id}`;

    const contentType = response.headers.get('Content-Type');
    let extension = '.pdf';

    if (contentType) {
      if (contentType.includes('pdf')) extension = '.pdf';
      else if (contentType.includes('zip')) extension = '.zip';
      else if (contentType.includes('image')) extension = '.jpg';
      else if (contentType.includes('video')) extension = '.mp4';
    }

    if (contentDisposition) {
      const match = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
      if (match && match[1]) {
        filename = match[1].replace(/['"]/g, '');
      } else {
        filename = `asset_${id}${extension}`;
      }
    } else {
      filename = `asset_${id}${extension}`;
    }

    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(downloadUrl);

    console.log(`Asset ${id} downloaded successfully`);
    return true;
  },
};

// ================= PROFILE API =================
export const profileAPI = {
  getProfile: async () => {
    return apiRequest('/profile');
  },
  updateProfile: async (data) => {
    return apiRequest('/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};