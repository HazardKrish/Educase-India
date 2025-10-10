import React from 'react';

const featuresData = [
  {
    imgSrc: "https://i.ibb.co/gR2W5w5/icon1.png",
    title: "A Resume Format That Gets You Interviews",
    description: "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes.",
  },
  {
    imgSrc: "https://i.ibb.co/Xz1g4k7/icon2.png",
    title: "A Cover Letter Style That Stands Out Strong",
    description: "Stand out with a cover letter that captures your personality and reflects your strengths.",
  },
  {
    imgSrc: "https://i.ibb.co/hZ2v1zV/icon3.png",
    title: "A LinkedIn Profile That Works For You",
    description: "Attract the right eyes, start conversations, and show up in recruiter searches.",
  },
  {
    imgSrc: "https://i.ibb.co/51JqHhT/icon4.png",
    title: "An Interview Strategy That Builds Confidence",
    description: "Interview preparation with real HR professionals so you speak clearly and confidently.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <p>What You Get</p>
          <h2>You're Not Just <span>Another Applicant</span> And Your Resume Shouldn't Look Like One</h2>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.imgSrc} alt={`${feature.title} icon`} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
