import "./agent.scss";

function Agent() {
  return (
    <div className="agents">
      <h1>Meet Our Agents</h1>
      <p>
        Our team of professional real estate agents is dedicated to helping you
        find the perfect property. With years of experience in the industry,
        they are ready to guide you through every step of the buying, selling,
        or renting process.
      </p>
      <div className="agents-list">
        <div className="agent-card">
          <img src="/agent1.jpg" alt="Agent Name" />
          <h3>John Doe</h3>
          <p>Senior Agent</p>
        </div>
        <div className="agent-card">
          <img src="/agent2.jpeg" alt="Agent Name" />
          <h3>Jane Smith</h3>
          <p>Real Estate Specialist</p>
        </div>
        <div className="agent-card">
          <img src="/agent3.jpeg" alt="Agent Name" />
          <h3>Emily Johnson</h3>
          <p>Property Consultant</p>
        </div>
      </div>
    </div>
  );
}

export default Agent;
