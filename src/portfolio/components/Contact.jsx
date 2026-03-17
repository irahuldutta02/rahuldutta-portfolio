import { useState } from "react";

import { toast } from "react-toastify";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function validateData() {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      toast.error("Please fill all the fields", {
        position: "bottom-left",
        autoClose: 5000,
        theme: "colored",
      });
      return false;
    }
    // validate email with regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please give a correct email", {
        position: "bottom-left",
        autoClose: 5000,
        theme: "colored",
      });
      return false;
    }
    //
    return true;
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleSubmit() {
    if (!validateData()) {
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "myForm",
        ...formData,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Error in sending message", {
            position: "bottom-left",
            autoClose: 5000,
            theme: "colored",
          });
        } else {
          toast.success("Message successfully sent.", {
            position: "bottom-left",
            autoClose: 5000,
            theme: "colored",
          });
        }
      })
      .catch(() => {
        toast.error("Error in sending message", {
          position: "bottom-left",
          autoClose: 5000,
          theme: "colored",
        });
      })
      .finally(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });
  }

  return (
    <>
      {/* <!-- contact section start --> */}
      <section className="contact" id="contact">
        <div className="code-leak code-leak-right" style={{ top: "20%" }} aria-hidden="true">
          <div><span className="cl-keyword">async function</span></div>
          <div>{"  "}<span className="cl-function">sendMail</span>(form) {"{"}</div>
          <div>{"  "}<span className="cl-keyword">try</span> {"{"}</div>
          <div>{"    "}<span className="cl-keyword">const</span> <span className="cl-variable">res</span> <span className="cl-operator">=</span></div>
          <div>{"      "}<span className="cl-keyword">await</span> <span className="cl-function">fetch</span>(</div>
          <div>{"        "}<span className="cl-string">'/api/send'</span>,</div>
          <div>{"        { "}<span className="cl-variable">method</span>: <span className="cl-string">'POST'</span>,</div>
          <div>{"          "}<span className="cl-variable">body</span>: form {"}"}</div>
          <div>{"      );"}</div>
          <div>{"    "}<span className="cl-keyword">if</span> (<span className="cl-operator">!</span>res.<span className="cl-variable">ok</span>)</div>
          <div>{"      "}<span className="cl-keyword">throw</span> <span className="cl-function">Error</span>();</div>
          <div>{"    "}<span className="cl-keyword">return</span> res.<span className="cl-function">json</span>();</div>
          <div>{"  } "}<span className="cl-keyword">catch</span> (err) {"{"}</div>
          <div>{"    "}<span className="cl-variable">console</span>.<span className="cl-function">error</span>(err);</div>
          <div>{"  }"}</div>
          <div>{"}"}</div>
        </div>

        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Feel free to drop a mail{" "}
                <i className="fa-solid fa-envelope-open-text fa-flip"></i>
              </p>
              <div className="icons">
                <div className="row">
                  <i className="bx bxs-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Rahul Dutta</div>
                  </div>
                </div>
                <div className="row">
                  <i className="bx bxs-map"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">West Bengal, India</div>
                  </div>
                </div>
                <div className="row">
                  <i className="bx bxs-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">
                      {" "}
                      <a
                        target="_blank"
                        href="mailto:rdtech2002@gmail"
                        rel="noreferrer"
                        style={{
                          color: "var(--page-color-1)",
                        }}
                      >
                        rdtech2002@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="form-style-6">
                <div className="text">
                  <h2>Message Me</h2>
                  <h5>
                    <span className="status">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/irahuldutta02/"
                        rel="noreferrer"
                      >
                        <span
                          style={{
                            color: "#22c55e",
                          }}
                        >
                          Open to work
                        </span>
                      </a>
                    </span>
                  </h5>
                </div>
                {/* form */}
                <form
                  name="myForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    autoComplete="off"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      });
                    }}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={formData.email}
                    placeholder="Email Address"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      });
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    autoComplete="off"
                    value={formData.message}
                    id="message"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      });
                    }}
                  ></textarea>
                  <input type="submit" value="Submit" autoComplete="off" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
