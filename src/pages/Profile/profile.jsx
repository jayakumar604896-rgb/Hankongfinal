import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { profileAPI } from '../../services/app';

const Profile = () => {
  const { user: authUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    company: '',
    location: '',
    bio: '',
    joinDate: '',
  });

  const [formData, setFormData] = useState(profileData);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileAPI.getProfile();
        setProfileData(data);
        setFormData(data);
      } catch (err) {
        setError('Failed to load profile. Please refresh.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error for this field when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');
    setFieldErrors({});
    try {
      const response = await profileAPI.updateProfile(formData);
      setProfileData(formData);
      setSuccess(response.message || 'Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      // Check if the error contains validation details (Laravel returns 422)
      if (err.response?.data?.errors) {
        setFieldErrors(err.response.data.errors);
        setError('Please correct the errors below.');
      } else {
        setError(err.message || 'Update failed. Please try again.');
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
    setError('');
    setFieldErrors({});
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">My Profile</h1>
          <p className="text-gray-600 text-center">Manage your personal information and account settings</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Summary – same as before */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
              <div className="h-32 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <div className="relative px-6 pb-6">
                <div className="relative -mt-16 mb-4">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 mx-auto">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200">
                      <span className="text-5xl font-bold text-teal-600">
                        {profileData.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
                  {profileData.course && (
                    <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                      <span className="font-medium">Course:</span>
                      <span className="ml-1">{profileData.course}</span>
                    </div>
                  )}
                </div>
                <div className="mt-6 space-y-3">
                  {profileData.email && (
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{profileData.email}</span>
                    </div>
                  )}
                  {profileData.phone && (
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{profileData.phone}</span>
                    </div>
                  )}
                  {profileData.location && (
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{profileData.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Edit Form with validation */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit Profile
                  </button>
                ) : (
                  <div className="space-x-3">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                    >
                      {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div> */}

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 transition-all ${fieldErrors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.name[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    {isEditing ? (
                      <>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {fieldErrors.email && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.email[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    {isEditing ? (
                      <>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg ${fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {fieldErrors.phone && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.phone[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.phone || '—'}</p>
                    )}
                  </div>

                  {/* Current Course */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Course</label>
                    {isEditing ? (
                      <>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg ${fieldErrors.course ? 'border-red-500' : 'border-gray-300'
                            }`}
                        >
                          <option value="">Select Solutions</option>
                          <option>AutoCAD Professional</option>
                          <option>Architecture, Engineering & Construction</option>
                          <option>Product Design & Manufacturing</option>
                          <option>Media & Entertainment</option>
                        </select>
                        {fieldErrors.course && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.course[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.course || '—'}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg ${fieldErrors.company ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {fieldErrors.company && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.company[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.company || '—'}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg ${fieldErrors.location ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {fieldErrors.location && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.location[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.location || '—'}</p>
                    )}
                  </div>

                  {/* Join Date (read-only) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                    <p className="text-gray-900 py-2">{profileData.joinDate || '—'}</p>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    {isEditing ? (
                      <>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows="4"
                          className={`w-full px-4 py-2 border rounded-lg ${fieldErrors.bio ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {fieldErrors.bio && (
                          <p className="mt-1 text-sm text-red-600">{fieldErrors.bio[0]}</p>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-900 py-2">{profileData.bio || '—'}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;