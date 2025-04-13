import React from "react";
import './features.css'


function Features(){
    return(
    <div className="features">

        <div className="feature">
            <div className="feature-about">
                <h2>Ask complex questions</h2>
                <p>Want to understand the DNA replication process or how to build something by hand? Gemini is grounded in Google Search, so you can ask it about anything and follow up with questions until it makes sense.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/020a75aa68cffb8f630cfba748137c2813989a71.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Create images in seconds</h2>
                <p>With Imagen 3, our latest image generation model, you can get inspiration for a logo design, explore diverse styles from anime to oil paintings and create pictures in just a few words. Once generated, you can instantly download or share with others.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/054d4774746f2bb7deda91f918b0b740de1fca63.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Talk it out with Gemini Live</h2>
                <p>Brainstorm ideas out loud, practice interview questions, share a file or photo that you want to discuss and talk it through with Gemini Live.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/a6b0dbcf47dc3dd82b1c4d6c18be6cb6483a3419.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Write in less time</h2>
                <p>Go from a blank page to a finished product faster. Use Gemini to summarise text, generate first drafts and upload files to get feedback on things that you've already written.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/170e6bcba749cfa4ab648600a46136c2ed81b0cd.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Power up your learning</h2>
                <p>Create study plans, topic summaries and quizzes to test your knowledge. You can even practice presentations out loud with Gemini Live.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/5a99202be3305185be52382720703312a04c6376.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Get help with tasks in multiple apps at once</h2>
                <p>Gemini connects to your stuff in Gmail, Google Calendar, Google Maps, YouTube and Google Photos to help you find what you need without switching between apps. You can use Gemini to set alarms, control music and make calls hands-free.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/a67e69028b547c044c242974242456ab313ea43c.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Condense hours of searching with Deep Research</h2>
                <p>Sift through hundreds of websites, analyse the information and create a comprehensive report in minutes. It's like having a personalised research agent that helps you get up to speed on just about anything.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/ebe2b92245b8d10623d763acba8278b183b5380c.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Build custom experts with Gems</h2>
                <p>Save highly detailed instructions and upload files to brief your own AI expert. Gems can be anything from a career coach or brainstorm partner to a coding helper.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/2c884b7b69715f877adc31903b93929531310a7f.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

        <div className="feature">
            <div className="feature-about">
                <h2>Dive into large files and code repositories</h2>
                <p>With a long context window of 1 million tokens, Gemini Advanced can understand and analyse whole books, lengthy reports and more with uploads of up to 1,500 pages or 30K lines of code, all at once.</p>
            </div>
            <div className="video">
                <video src="https://storage.googleapis.com/gweb-gemini-cdn/gemini/uploads/d371f91ad8ba3d9d96a3cd29beba24467efaf94a.mp4" muted autoPlay disableRemotePlayback playsInline loop></video>
            </div>
        </div>

    </div>)
}

export default Features