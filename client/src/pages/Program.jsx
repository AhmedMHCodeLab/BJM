"use client"

import { useState } from "react"
import { FiChevronDown, FiChevronRight, FiBook, FiBriefcase, FiAward, FiHome } from "react-icons/fi"
import QuotaModal from "../components/QuotaModal"

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

      {/* Overview Section 
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
              src="https://i.pinimg.com/736x/94/f4/f7/94f4f7a84a23158e16d39d589c0e23e4.jpg"
              alt="Professional development session"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            />
          </div>
        </div>
      </section>

      */}
      
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
              src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/internship.png?raw=true"
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
                src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/meeting.png?raw=true"
                alt="Team workshop session"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/ProgramHero.jpg?raw=true"
                alt="Team building activity"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/progress.jpg?raw=true"
                alt="Strategic planning session"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              />
              <img
                src="https://github.com/AhmedMHCodeLab/BJM/blob/main/client/src/assets/images/stonksWallet.jpg?raw=true"
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <QuotaModal />
        </div>
      </section>
    </div>
  )
}

export default Program
