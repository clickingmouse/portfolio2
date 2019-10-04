import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Text() {
  return (
    <div style={{ background: "#282828" }} className="mb-0 py-3">
      <Container
        style={{
          color: "#66ff66",
          fontFamily: "chicago",
          fontSize: "1.2em",
          background: "#282828",
          width: "100%"
        }}
      >
        <Row>
          <Col style={{ display: "flex" }}>
            <div className="m-auto" style={{ justifyContent: "center" }}>
              <p>
                const myAspirations = return(
                <br />
                &emsp;&lt;WebDevelopper stack="MERN">
                <br />
                &emsp;&emsp; &lt;FrontEnd
                <br />
                &emsp;&emsp;&emsp;&emsp;viewFramework = &#123;Reactjs&#125;{" "}
                <br />
                &emsp;&emsp;&emsp;&emsp;stateManagement = &#123;Reduxjs&#125;/>{" "}
                <br />
                &emsp;&emsp; &lt;BackEnd <br />
                &emsp;&emsp;&emsp;&emsp;serverSide = &#123;Nodejs&#125;
                <br />
                &emsp;&emsp;&emsp;&emsp;dataBase = &#123;Mongo&#125;/>
                <br />
                &emsp;&lt;/WebDevelopper>)
              </p>
            </div>
          </Col>
        </Row>
        <hr style={{ backgroundColor: "#17a2b8" }} />
      </Container>
    </div>
  );
}
