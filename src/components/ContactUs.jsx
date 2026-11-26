import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { countryAPI, enquiryAPI } from "../services/app";

const courses = [
  // "Autodesk | Make Anything",
  "AutoCAD",
  "Architecture, Engineering & Construction",
  "Product Design & Manufacturing",
  "Media & Entertainment"
];

function ContactSection({ defaultCourse = null, hideCourseSelect = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    country: "",
    location: "",
    company: "",
    vendor: defaultCourse || "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: ""
  });

  // Load Countries
  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (defaultCourse) {
      setFormData(prev => ({
        ...prev,
        vendor: defaultCourse
      }));
    }
  }, [defaultCourse]);

  const loadCountries = async () => {
    try {
      const result = await countryAPI.getCountries();
      if (result.data) {
        setCountries(result.data);
      }
    } catch (error) {
      console.error("Country Fetch Error:", error);
    }
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear Error for this specific field
    const errorKey = `err_${name}`;
    if (errors[errorKey]) {
      setErrors((prev) => ({
        ...prev,
        [errorKey]: ""
      }));
    }

    // Clear general error message when user types
    if (submitStatus.type === "error") {
      setSubmitStatus({
        type: "",
        message: ""
      });
    }
  };

  // Handle field blur to mark as touched
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));
  };

  // Validate a single field
  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "name":
        if (!value || value.trim() === "") {
          error = "Name is required";
        }
        break;
      case "email":
        if (!value || value.trim() === "") {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email";
        }
        break;
      case "telephone":
        if (!value || value.trim() === "") {
          error = "Mobile number is required";
        } else if (!/^[0-9+\-\s()]{10,15}$/.test(value)) {
          error = "Please enter a valid mobile number";
        }
        break;
      case "country":
        if (!value || value === "") {
          error = "Please select a country";
        }
        break;
      case "location":
        if (!value || value.trim() === "") {
          error = "City is required";
        }
        break;
      case "message":
        if (!value || value.trim() === "") {
          error = "Message is required";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    const fields = ["name", "email", "telephone", "message"];

    fields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[`err_${field}`] = error;
      }
    });

    // Mark all fields as touched
    const touchedFields = {};
    fields.forEach(field => {
      touchedFields[field] = true;
    });
    setTouched(touchedFields);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitStatus({
      type: "",
      message: ""
    });

    // Validate form before submission
    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors below."
      });
      setLoading(false);
      return;
    }

    try {
      const result = await enquiryAPI.storeEnquiry(formData);

      if (result.message) {
        setSubmitStatus({
          type: "success",
          message: result.message
        });

        setFormData({
          name: "",
          email: "",
          telephone: "",
          country: "",
          location: "",
          company: "",
          vendor: defaultCourse || "",
          message: ""
        });

        setTouched({});
        setErrors({});

        setTimeout(() => {
          setSubmitStatus({
            type: "",
            message: ""
          });
        }, 5000);
      }
    } catch (error) {
      console.error("Submit Error:", error);

      // Handle server validation errors
      if (error.errors) {
        // Filter errors - only show for fields that exist
        const filteredErrors = {};
        Object.keys(error.errors).forEach(key => {
          const fieldName = key.replace('err_', '');
          if (fieldName in formData) {
            filteredErrors[key] = error.errors[key];
          }
        });

        setErrors(filteredErrors);

        // Mark only the fields with errors as touched
        const touchedFields = {};
        Object.keys(filteredErrors).forEach(key => {
          const fieldName = key.replace('err_', '');
          touchedFields[fieldName] = true;
        });
        setTouched(touchedFields);

        setSubmitStatus({
          type: "error",
          message: "Please fix the errors below."
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: error.message || "Something went wrong."
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Helper to check if field has error
  const showError = (fieldName) => {
    return errors[`err_${fieldName}`] && touched[fieldName];
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="lg:text-4xl text-3xl font-bold bg-gradient-to-r from-[#049799] to-[#09BDBF] text-transparent bg-clip-text mb-5 text-center">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 mt-12">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm"
        >
          {submitStatus.type === "success" && (
            <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-200 text-green-700">
              {submitStatus.message}
            </div>
          )}

          {submitStatus.type === "error" && (
            <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-200 text-red-700">
              {submitStatus.message}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Your Name"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm ${showError('name') ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {showError('name') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_name}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Your Email"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm ${showError('email') ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {showError('email') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_email}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Contact Number *
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Contact Number"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm ${showError('telephone') ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {showError('telephone') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_telephone}
                </p>
              )}
            </div>

            {/* <div>
              <label className="block mb-2 font-medium text-gray-700">
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white ${
                  showError('country') ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {showError('country') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_country}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                City *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Your City"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm ${
                  showError('location') ? "border-red-500" : "border-gray-300"
                }`}
              />
              {showError('location') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_location}
                </p>
              )}
            </div> */}

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Organization Name"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm ${showError('company') ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {showError('company') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_company}
                </p>
              )}
            </div>
          </div>

          {/* Course Select */}
          {!hideCourseSelect && (
            <div className="mt-6">
              <label className="block mb-2 font-medium text-gray-700">
                Solutions *
              </label>
              <select
                name="vendor"
                value={formData.vendor}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm bg-white ${showError('vendor') ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">Select Solutions</option>
                {courses
                  .filter((course, index) => !(index === "Autodesk | Make Anything" && defaultCourse))
                  .map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
              </select>
              {showError('vendor') && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.err_vendor}
                </p>
              )}
            </div>
          )}

          {hideCourseSelect && defaultCourse && (
            <div className="mt-6">
              <label className="block mb-2 font-medium text-gray-700">
                Solutions *
              </label>
              <div className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 text-sm">
                {defaultCourse}
              </div>
            </div>
          )}

          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">
              Message *
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter Your Message Here..."
              className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500 text-sm ${showError('message') ? "border-red-500" : "border-gray-300"
                }`}
            ></textarea>
            {showError('message') && (
              <p className="text-red-500 text-xs mt-1">
                {errors.err_message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 bg-gradient-to-r from-teal-600 to-teal-400 text-white px-8 py-3 rounded-[20px_0px_20px_0px] hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Your Message"}
          </button>
        </form>

        <div className="flex flex-col gap-6">
          <div className="bg-white/50 rounded-xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 border rounded-lg">
              <Mail size={20} />
            </div>
            <p className="text-gray-600">
              <a href="mailto:info.datech@techdata.com">info.datech@techdata.com</a>
            </p>
          </div>

          <div className="bg-white/50 rounded-xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 border rounded-lg">
              <Phone size={20} />
            </div>
            <p className="text-gray-600">
              <a href="tel:85225651682" target="_blank" rel="noopener noreferrer">+852 2565 1682</a>
            </p>
          </div>

          {/* <div className="bg-white/50 rounded-xl p-8 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 border rounded-lg">
              <MapPin size={20} />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              21/F, Tower One, Millennium City 1,
              <br />
              388 Kwun Tong Road, Kwun Tong,
              <br />
              Kowloon
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;