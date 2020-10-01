import React from "react";
import Box from "./components/box/Box";
import { Form, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.count);
  let color = useSelector((state) => state.color);
  let singleColor = useSelector((state) => state.singleColor);

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const changeColor = (colorName) => {
    dispatch({ type: "COLORCHANGE", payload: colorName });
  };

  const changeBoxCol = (id, color) => {
    dispatch({ type: "CHANGEBOXCOL", payload: { index: id, colorBox: color } });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="app">
      <Form>
        <Row>
          <Col sm={12}>
            <div
              style={{
                width: "100%",
                height: "100px",
                marginBottom: "30px",
                fontSize: "50px",
                fontWeight: "bolder",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              TOWER BLOXX
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                wordWrap: "break-word",
              }}
            >
              <p>
                Let's build a colorful building!
                <br /> ~^3^~
              </p>
            </div>
          </Col>
          <Col sm={6}>
            {count > 0 &&
              Array.from({ length: count }, (value, index) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    index={index}
                    color={singleColor[index] ? singleColor[index] : color}
                    // colorAll={color}
                    changeBoxCol={changeBoxCol}
                  />
                  {/* <input
              type="text"
              onChange={(e) => {
                changeBoxCol(index, e.target.value);
                console.log("ne", singleColor[index]);
              }}
            /> */}
                </div>
              ))}
          </Col>
          <Col sm={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>The building has {count} floor(s)</div>
              <button type="button" onClick={() => increase()}>
                Build 1 more floor +
              </button>
              <button type="button" onClick={() => decrease()}>
                Explode 1 floor -
              </button>
              <button type="button" onClick={() => reset()}>
                Destroy everything, I prefer to live on the ground : )
              </button>
              <input
                type="text"
                onChange={(e) => changeColor(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={2} />
          <Col sm={8} style={{ textAlign: "center" }}>
            <Image src="/images/ground.png" />
          </Col>
          <Col sm={2} />
        </Row>
      </Form>
    </div>
  );
}

export default App;
