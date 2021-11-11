import React from "react";
import { Accordion } from "react-bootstrap";
import "./Questions.css";
const Questions = () => {
  const url = "https://i.ibb.co/zSgnH6y/undraw-Questions.png";
  return (
    <div id="section-three Questions">
      <div className="section-three-container container text-center pt-5 p-4">
        <h2>
          <span className="one">Frequently Asked </span>
          <span className="two">Questions</span>
        </h2>
        <div className="section-three-content  row d-flex align-items-center py-5 mx-auto gy-3">
          <div className="col-lg-6">
            <img className="img-fluid" src={url} alt="faq" />
          </div>

          <div className="col-lg-6">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What are the most important things I should know about riding
                  a bike?
                </Accordion.Header>
                <Accordion.Body>
                  Safety First! Always obey the rules of the road. Obey all
                  traffic signals, signs, and laws. Get in the mindset of
                  “driving” your bike—not just “riding” your bike. This will
                  help you be a more focused and legally compliant bike rider.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-3 border-top border">
                <Accordion.Header>
                  How can I tell if my helmet is old and I need a new one?
                </Accordion.Header>
                <Accordion.Body>
                  Bear in mind that if the helmet did its job most people would
                  tell you that they did not even hit their head, or did not hit
                  their head that hard. And the thin shells on most helmets now
                  tend to hide any dents in the foam. But if you can see marks
                  on the shell or measure any foam crush at all, replace the
                  helmet
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-3 border-top border">
                <Accordion.Header>
                  My bike has been in storage is it safe to ride?
                </Accordion.Header>
                <Accordion.Body>
                  Leaving your bike outside for a day or two won’t do major
                  damage. You may see signs of rust after a week of neglect.
                  After one month in bad conditions, your beloved bike parts
                  will start to degrade. The money you’ll spend having to
                  replace corroded parts could have been spent on an easy
                  storage solution such as a small-space gravity rack or a
                  vertical hanging system.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-3 border-top border">
                <Accordion.Header>
                  What rules should I follow when riding my bike?
                </Accordion.Header>
                <Accordion.Body>
                  <h3>Safe Riding Tips</h3>
                  <ul>
                    <li>Wear a Properly Fitted Bicycle Helmet.</li>
                    <li>Adjust Your Bicycle to Fit</li>
                    <li>Check Your Equipment.</li>
                    <li>Watch for and Avoid Road Hazards. </li>
                    <li>Avoid Riding at Night. </li>
                    <li>Go With the Traffic Flow</li>
                    <li>Yield to Traffic When Appropriate.</li>
                    <li>Stay Alert at All Times</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
