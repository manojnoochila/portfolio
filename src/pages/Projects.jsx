import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg_life.png";
import deepfake from "../assets/projects/deepfake.png";
import turbopay from "../assets/projects/turbopay.png";
import medium from "../assets/projects/medium.png";
import blood from "../assets/projects/blood.png";
import paytm from "../assets/projects/paytm.png"; 

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turbopay}
              isBlog={false}
              title="Turbo-Pay"
              description="Developed a comprehensive financial application combining a Next.js user interface, a React-based bank server, and a Node.js webhook for real-time payment status updates, all styled with Tailwind CSS. Utilized Strapi to manage and simulate payment and utility services, creating a full-stack experience that supports seamless transactions and peer-to-peer transfers. Leveraged PostgreSQL and Prisma for efficient data management and ensured smooth integration across React, Node.js, and Strapi, delivering a scalable and responsive payment solution."
              ghLink="https://github.com/noochila/TurboPay"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medium}
              isBlog={false}
              title="Medium Blog Clone"
              description="Developed a full-stack blogging platform inspired by Medium, using React for a responsive frontend and a serverless backend powered by Hono and Cloudflare Workers. Integrated RESTful APIs and PostgreSQL with Prisma for robust data handling and management, providing users with a seamless experience for creating, editing, and sharing articles. Hosted on a serverless architecture for scalability and performance."
              ghLink="https://github.com/noochila/medium"
              demoLink="https://medium-red.vercel.app/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Blood Bank Management System"
              description="Built a centralized system for blood bank operations with a React frontend, Express and Node backend, and MySQL for database management. Integrated text summarization to enhance data accuracy and ensure patient safety. The platform provides real-time updates, detailed donor and transfusion data, and robust record-keeping to support regulatory compliance. This system streamlines data management, reduces transfusion-related risks, and optimizes operations for efficient blood bank management."
              ghLink="https://github.com/Noochila/DBS-LabEL.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="PG Website"
              description="Built a dynamic platform during my internship at Internshala for finding and managing PG accommodations. Developed with Node.js, Express, EJS, and MongoDB, the website integrates RESTful APIs for seamless data handling and provides a user-friendly interface for searching, filtering, and viewing PG listings."
              ghLink="https://github.com/noochila/pglife"
               demoLink="https://pglife-bc8y.onrender.com/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paytm}
              isBlog={false}
              title="Paytm Clone"
              description="A web application built with React, Node.js, and MongoDB, enabling peer-to-peer (P2P) transactions. Users can securely register, log in, and transfer money to one another while tracking their transaction history. The application utilizes RESTful APIs for seamless communication between the frontend and backend, ensuring a smooth user experience."
              ghLink="https://github.com/noochila/paytm"
              demoLink="https://paytm-front-end.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepfake}
              isBlog={false}
              title="Deep Fake Audio Detection"
              description="Deepfake Audio Detection — Designed a machine learning system using TensorFlow to identify and differentiate authentic audio from manipulated content. Leveraged advanced data analysis and model optimization to achieve reliable accuracy in detection, showcasing expertise in AI and signal processing. This project contributes to the field of emerging technologies by addressing security challenges associated with deepfake audio, offering a robust solution for audio authentication."
              ghLink="https://github.com/Noochila/Deepfake-Audio-Detection.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects