import React from "react";
import './plans.css'


function Plans() {

    const svg_element = (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7333 24.0001L5.1333 16.4001L7.0333 14.5001L12.7333 20.2001L24.9666 7.9668L26.8666 9.8668L12.7333 24.0001Z" fill="url(#paint0_linear_2064_1076)"></path>
            <defs>
                <linearGradient id="paint0_linear_2064_1076" x1="5.1333" y1="15.4668" x2="26.8666" y2="15.4668" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#078EFB"></stop>
                    <stop offset="0.67" stop-color="#AC87EB"></stop>
                </linearGradient>
            </defs>
        </svg>
    )

    return (
        <div className="plans">
            <div className="plan-head">
                <h2>Plans</h2>
            </div>
            <div className="spacing"></div>

            <div className="price-cards">
                <div className="card">
                    <div className="logo">
                        <img src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/1a46ad5b2a8ee4f4e56cb7e6b3b70eb16223f31b.svg" alt="" />
                    </div>
                    <h2>Gemini</h2>
                    <div className="content">
                        <p>Your personal AI assistant from Google. Chat with Gemini to supercharge your ideas.</p>
                    </div>
                    <div className="price">
                        <p><span><sup>₹</sup>0 </span>INR/month</p>
                    </div>
                    <button>Get Started</button>
                    <div className="spacing"></div>
                    <div className="card-detail-list">
                        <ul>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Access to our 2.0 Flash model and experimental models, including 2.5 Pro</p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Have free-flowing voice conversations on the go with Gemini Live</p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Generate comprehensive reports with limited access to Deep Research</p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Build and use custom AI experts for any topic with Gems</p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Get help with tasks on multiple Google apps at once</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                <div className="logo">
                        <img src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/1a044474ab96c2ee78b5a62e5b7e386d5cf57951.svg" alt="" />
                    </div>
                    <h2>Gemini Advanced</h2>
                    <div className="content">
                        <p>Your ultimate pass to Google's next-gen AI. Includes everything in Gemini and more.</p>
                    </div>
                    <div className="price advance-price">
                        <p><span><sup>₹</sup>0 </span>INR for the first month</p>
                    </div>
                    <button className="advance-btn">Get Started</button>
                    <div className="card-detail-list">
                        <ul>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Expanded access to our state-of-the-art experimental model, <b>2.5 Pro</b></p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Understand large books and reports with <b>1,500 pages</b> of file uploads</p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Expanded access to <b>Deep Research</b> to save even more time on complex projects</p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Code smarter and faster by uploading your <b>code repository</b></p>
                                </div>
                            </li>
                            <li>
                                {svg_element}
                                <div className="list-content">
                                    <p>Comes with <b>2 TB of storage</b> from Google One*</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans