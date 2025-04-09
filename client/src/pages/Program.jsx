"use client"

import { useState } from "react"
import { FiChevronDown, FiChevronRight, FiBook, FiBriefcase, FiAward, FiHome } from "react-icons/fi"

const Program = () => {
  // State for accordion sections
  const [openCourseCategory, setOpenCourseCategory] = useState(null)

  // Course catalog data
  const courseCategories = [
    {
      id: "leadership",
      title: "Leadership & Management Development",
      description:
        "Comprehensive programs designed to enhance leadership capabilities, strategic thinking, and management skills for professionals at all levels.",
    },
    {
      id: "accounting",
      title: "Accounting & Finance",
      description:
        "Courses covering financial reporting, analysis, budgeting, and accounting principles for both finance professionals and non-finance managers.",
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description:
        "Learn the latest digital marketing strategies, social media management, content creation, SEO, and analytics to drive business growth.",
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship",
      description:
        "Practical guidance for starting and scaling businesses, including business planning, funding strategies, and growth management.",
    },
    {
      id: "hr",
      title: "Human Resource Management",
      description:
        "Comprehensive training on talent acquisition, employee development, performance management, and creating positive workplace cultures.",
    },
    {
      id: "project",
      title: "Project Management",
      description:
        "Learn methodologies and best practices for planning, executing, and closing projects efficiently while managing resources and stakeholders.",
    },
    {
      id: "operations",
      title: "Operations Management",
      description:
        "Courses focused on optimizing business processes, supply chain management, quality control, and operational efficiency.",
    },
    {
      id: "financial",
      title: "Financial Management",
      description:
        "Specialized courses including Finance for non-Finance people, helping professionals understand financial concepts and decision-making.",
    },
    {
      id: "literacy",
      title: "Financial Literacy for Women and Youth",
      description:
        "Targeted programs designed to empower women and young people with essential financial knowledge and skills for personal and professional success.",
    },
    {
      id: "programme",
      title: "Project & Programme Management",
      description:
        "Advanced training on managing complex, interconnected projects and programs to achieve strategic organizational objectives.",
    },
    {
      id: "soft",
      title: "Developing Soft Skills",
      description:
        "Enhance communication, emotional intelligence, conflict resolution, and interpersonal skills essential for workplace success.",
    },
    {
      id: "team",
      title: "Team Building",
      description:
        "Workshops and activities designed to strengthen team cohesion, collaboration, and effectiveness in achieving shared goals.",
    },
    {
      id: "performance",
      title: "Performance Management",
      description:
        "Learn to set meaningful objectives, provide effective feedback, and develop systems that drive individual and organizational performance.",
    },
    {
      id: "security",
      title: "Security & Cyber Security",
      description:
        "Training on security protocols, cyber threat prevention, and building organizational resilience, including climate change considerations.",
    },
    {
      id: "facilities",
      title: "Facilities Management",
      description:
        "Comprehensive training on managing physical workspaces, maintenance, safety, and creating efficient work environments.",
    },
  ]

  // Toggle accordion function
  const toggleCourseCategory = (id) => {
    setOpenCourseCategory(openCourseCategory === id ? null : id)
  }

  // Split courses into two columns for better display
  const leftColumnCourses = courseCategories.slice(0, Math.ceil(courseCategories.length / 2))
  const rightColumnCourses = courseCategories.slice(Math.ceil(courseCategories.length / 2))

  return (
    <div className="bjm-program" style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
  

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(to bottom, #f5f5ff, #e0e0ff)",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "#333" }}>Training Programmes</h1>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px", color: "#555" }}>
          BJM offers a range of professional development options to enhance your skills and advance your career. Our
          comprehensive programs are designed to meet the needs of individuals and organizations across various
          industries.
        </p>
      </section>

      {/* Overview Section */}
      <section id="overview" style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#4a4a8a" }}>Overview</h2>
            <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
              BJM offers a range of professional development options, which include seminars, conferences, retreats/
              away days, networking events, student support (internships and research projects), management training for
              new and startup businesses and designs customized organizational retreats that advance key learning
              concepts, deeper dialogue and action planning among organizational participants.
            </p>
            <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
              Company away days are an important team building event in the calendar for team members to have a break
              from the office and 'get away from it all'.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                <FiChevronRight style={{ color: "#8a4fff", marginTop: "5px" }} />
                <span>Seminars and conferences on cutting-edge business topics</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                <FiChevronRight style={{ color: "#8a4fff", marginTop: "5px" }} />
                <span>Networking events connecting professionals across industries</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                <FiChevronRight style={{ color: "#8a4fff", marginTop: "5px" }} />
                <span>Student support through internships and research projects</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                <FiChevronRight style={{ color: "#8a4fff", marginTop: "5px" }} />
                <span>Management training for new and startup businesses</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "15px" }}>
                <FiChevronRight style={{ color: "#8a4fff", marginTop: "5px" }} />
                <span>Customized organizational retreats for team development</span>
              </li>
            </ul>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <img
              src="https://placehold.co/600x400/e0e0ff/4a4a8a?text=Professional+Development"
              alt="Professional development session"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section
        id="courses"
        style={{
          padding: "60px 40px",
          maxWidth: "70vw",
          margin: "0 auto",
         
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#4a4a8a", textAlign: "center" }}>Our Courses</h2>
        <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px", lineHeight: "1.6" }}>
          BJM offers a number of courses in various professional development areas to enhance your skills and advance
          your career.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          {/* Left Column */}
          <div style={{ flex: "1 1 500px" }}>
            {leftColumnCourses.map((course) => (
              <div
                key={course.id}
                style={{ marginBottom: "15px", border: "1px solid #e0e0ff", borderRadius: "8px", overflow: "hidden" }}
              >
                <div
                  onClick={() => toggleCourseCategory(course.id)}
                  style={{
                    padding: "15px 20px",
                    backgroundColor: openCourseCategory === course.id ? "#e0e0ff" : "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px", color: "#4a4a8a" }}>{course.title}</h3>
                  {openCourseCategory === course.id ? <FiChevronDown /> : <FiChevronRight />}
                </div>
                {openCourseCategory === course.id && (
                  <div style={{ padding: "15px 20px", borderTop: "1px solid #e0e0ff" }}>
                    <p style={{ margin: 0, lineHeight: "1.6" }}>{course.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div style={{ flex: "1 1 500px" }}>
            {rightColumnCourses.map((course) => (
              <div
                key={course.id}
                style={{ marginBottom: "15px", border: "1px solid #e0e0ff", borderRadius: "8px", overflow: "hidden" }}
              >
                <div
                  onClick={() => toggleCourseCategory(course.id)}
                  style={{
                    padding: "15px 20px",
                    backgroundColor: openCourseCategory === course.id ? "#e0e0ff" : "white",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px", color: "#4a4a8a" }}>{course.title}</h3>
                  {openCourseCategory === course.id ? <FiChevronDown /> : <FiChevronRight />}
                </div>
                {openCourseCategory === course.id && (
                  <div style={{ padding: "15px 20px", borderTop: "1px solid #e0e0ff" }}>
                    <p style={{ margin: 0, lineHeight: "1.6" }}>{course.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
        </div>
      </section>

      {/* Student Support Section */}
      <section id="student-support" style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <img
              src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/internship.png"
              alt="Students in a professional setting"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#4a4a8a" }}>Student Support Programs</h2>
            <p style={{ marginBottom: "30px", lineHeight: "1.6" }}>
              BJM offers comprehensive student support through internships and research projects, helping bridge the gap
              between academic learning and professional practice. Our programs are designed to provide valuable
              real-world experience and mentorship.
            </p>

            <div
              style={{
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                border: "1px solid #e0e0ff",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FiBriefcase size={24} color="#8a4fff" />
                </div>
                <div>
                  <h3 style={{ margin: "0 0 10px 0", color: "#4a4a8a" }}>Internship Programs</h3>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Gain valuable work experience through our structured internship programs with leading organizations
                    across various industries.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                border: "1px solid #e0e0ff",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FiBook size={24} color="#8a4fff" />
                </div>
                <div>
                  <h3 style={{ margin: "0 0 10px 0", color: "#4a4a8a" }}>Research Projects</h3>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Collaborate with industry professionals on meaningful research projects that address real business
                    challenges and contribute to your field.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                border: "1px solid #e0e0ff",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FiAward size={24} color="#8a4fff" />
                </div>
                <div>
                  <h3 style={{ margin: "0 0 10px 0", color: "#4a4a8a" }}>Mentorship Opportunities</h3>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Connect with experienced professionals who provide guidance, feedback, and career development
                    support throughout your educational journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Retreats Section */}
      <section
        id="retreats"
        style={{
          padding: "60px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
          background: "#f9f9ff",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#4a4a8a", textAlign: "center" }}>
          Customized Organizational Retreats
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
            <p style={{ marginBottom: "30px", lineHeight: "1.6" }}>
              BJM designs customized organizational retreats that advance key learning concepts, deeper dialogue and
              action planning among organizational participants. Company away days are an important team building event
              in the calendar for team members to have a break from the office and 'get away from it all'.
            </p>

            <div style={{ marginBottom: "30px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  <FiChevronRight size={16} color="#8a4fff" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: "#4a4a8a" }}>Advanced Learning Concepts</h4>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Engage with cutting-edge business theories and practices through interactive workshops.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  <FiChevronRight size={16} color="#8a4fff" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: "#4a4a8a" }}>Deeper Dialogue</h4>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Create space for meaningful conversations that strengthen relationships and align vision.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  <FiChevronRight size={16} color="#8a4fff" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: "#4a4a8a" }}>Action Planning</h4>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Develop concrete strategies and roadmaps to implement new insights and initiatives.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#f0f0ff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  <FiChevronRight size={16} color="#8a4fff" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 5px 0", color: "#4a4a8a" }}>Team Building</h4>
                  <p style={{ margin: 0, lineHeight: "1.6" }}>
                    Strengthen collaboration and trust through carefully designed activities and experiences.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div style={{ flex: "1 1 400px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <img
                src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/meeting.png"
                alt="Team workshop session"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://placehold.co/300x200/e0e0ff/4a4a8a?text=Team+Building"
                alt="Team building activity"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://placehold.co/300x200/e0e0ff/4a4a8a?text=Planning"
                alt="Strategic planning session"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://placehold.co/300x200/e0e0ff/4a4a8a?text=Retreat"
                alt="Retreat location"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          padding: "60px 40px",
          margin: "40px auto",
          maxWidth: "1000px",
          background: "linear-gradient(135deg, #8a4fff20, #5e5eb930)",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#4a4a8a" }}>
          Let's Create Something Amazing Together!
        </h2>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px", lineHeight: "1.6" }}>
          Ready to elevate your professional development strategy? Contact BJM today to discuss how our tailored
          programs can help you achieve your goals.
        </p>
        <button
          style={{
            backgroundColor: "#8a4fff",
            border: "none",
            padding: "15px 30px",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Schedule a Call
        </button>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{
          backgroundColor: "#4a4a8a",
          color: "white",
          padding: "60px 40px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>BJM</span>
              <span>Professional Development</span>
            </div>
            <p style={{ lineHeight: "1.6", color: "#e0e0ff" }}>
              Driving excellence through innovative professional development solutions for individuals and
              organizations.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>Navigation</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="#overview" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Overview
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#courses" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Course Catalog
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#student-support" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Student Support
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#retreats" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Organizational Retreats
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>Services</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "10px" }}>
                <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Leadership Development
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Financial Training
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Digital Marketing
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Team Building
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
                  Customized Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: "20px", fontSize: "18px" }}>Contact Us</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                <FiHome color="#e0e0ff" />
                <span>123 Business Avenue, Suite 200</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e0e0ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e0e0ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@bjmprofessional.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #e0e0ff30",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "40px auto 0",
          }}
        >
          <p style={{ color: "#e0e0ff" }}>
            © {new Date().getFullYear()} BJM Professional Development. All Rights Reserved.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px" }}>
            <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
              Terms of Service
            </a>
            <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "#e0e0ff", textDecoration: "none" }}>
              Accessibility Statement
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Program
