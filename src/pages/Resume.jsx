import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from '../components/Particle';

// Retrieve the resume link from environment variables
const resumeLink = process.env.REACT_APP_RESUME_LINK;

// Extract the file ID from the resume link and generate the download link
const fileId = resumeLink ? resumeLink.split("/d/")[1].split("/")[0] : "";
const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ backgroundColor: "transparent", padding: 0 }}>
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={downloadLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row
          className="resume"
          style={{
            justifyContent: "center",
            marginTop: "20px",
            backgroundColor: "transparent",
            width: "100%",
            padding: 0,
            margin: 0,
          }}
        >
          <iframe
            src={resumeLink}
            width={width > 786 ? "1000" : "90%"}
            height="1200"
            style={{
              border: "none",
              backgroundColor: "transparent",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            title="Resume PDF"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
