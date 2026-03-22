import { getSocialLinks } from "../../data/data";

export function Contact() {
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
            <div className="contact-card-single">
              <div className="contact-panel form-style-6">
                <div className="contact-window-dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="contact-card-glow" aria-hidden="true"></div>
                <div className="contact-card-layout">
                  <div className="text">
                    <span className="contact-kicker">Let's connect</span>
                    <h2>Keep it direct. If there is a role or project, let&apos;s talk.</h2>
                  </div>
                  <div className="contact-card-actions">
                    <a
                      className="contact-mail-button"
                      href="mailto:rdtech2002@gmail.com"
                    >
                      Email me <i className="fa-regular fa-envelope"></i>
                    </a>
                    <div className="contact-socials">
                      <div className="about-social-icons">
                        {getSocialLinks().map((s) => (
                          <a key={s.id} target="_blank" href={s.href} rel="noreferrer">
                            <img src={s.iconSrc} alt={s.alt} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
