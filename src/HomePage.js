import React, { useEffect, useReducer, useRef, useState } from "react";
import "./HomePage.css";
import carasoual from "./caraousal.png";
import logo from "./assets/logo_1.png";
import searchBar from "./assets/search.png";

// React component

function HomePage() {
  const [mouseX, setMouseX] = useState("");
  const [mouseY, setMouseY] = useState("");

  const [translatedText, setTranslatedText] = useState("");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [loader, setLoader] = useState(false);
  const [capturedText, setCapturedText] = useState("");
  const [capturedId, setCapturedId] = useState("");
  const [istranslated, setIsTranslated] = useState("");
  let elementRef = useRef(null);
  const [prefferedLang, setPrefferedLang] = useState("");
  // const getFlaskData = async () => {
  //   let response = await fetch(" http://127.0.0.1:5000/getResults");

  //   response = await response.json();

  //   let a = response.latest;
  //   setTranslatedText(Object.values(a));
  //   console.log(response.latest);

  //   setIsTranslated(true);
  // };
  const sendFlaskData = async () => {
    let response = await fetch("http://localhost:5000/processData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ textToBeTranslated: capturedText }),
    });

    response = await response.json();
    console.log(response);
    const a = response;
    setTranslatedText(a);
    console.log("value and fi a" + a);
  };
  const handleMouseLeave = () => {
    console.log("leaving");
    setLoader(false);
    setTranslatedText("");
  };
  const handleHoverEvent = (event) => {
    console.log("event occured ");
    const textContent = event.target.textContent;
    const elementId = event.target.id;
    sendFlaskData().then(() => {
      console.log("then statene");
      setIsTranslated(true);
      console.log(istranslated);
    });
    setCapturedText(textContent);
    setCapturedId(elementId);
    setLoader(true);
  };

  const handleMouseMove = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);

    console.log(mouseX, mouseY);
  };
  useEffect(() => {
    console.log("hello data" + capturedText + capturedId);
    document.addEventListener("mouseover", handleMouseMove);

    // Remove listener on component unmount (cleanup)
    return () => {
      document.removeEventListener("mouseover", handleMouseMove);
    };
  }, [capturedText, capturedId]);

  useEffect(() => {
    setPrefferedLang(prompt("enter your preffered language", "en"));
  }, []);

  return (
    <div className="homepageRootContainer">
      <div className="navbar">
        <a href="#" className="navbarListItems">
          India Gov
        </a>
        <img src={logo} height={100} style={{ marginLeft: 50 }}></img>
        <a
          style={{ marginTop: 10 }}
          href="#"
          onMouseOver={handleHoverEvent}
          className="navbarListItems"
        >
          HealthCare
        </a>

        <a
          style={{ marginTop: 10 }}
          href="#"
          className="navbarListItems"
          onMouseOver={handleHoverEvent}
        >
          Finance
        </a>
      </div>
      <div style={{ marginTop: 50, marginLeft: 20 }}>
        <img
          src={searchBar}
          alt="searchBar "
          height={50}
          width="95%"
          style={{ margin: 20 }}
        ></img>
        <img src={carasoual} alt="" height={200} width="100%" />
      </div>
      <div className="Link-Container">
        <div className="news-highlights">
          <p className="headingLinkContainer"> News Highlights </p>
          <ol>
            <a
              href="#"
              target="_blank"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
              className="listItemsHomePage"
            >
              President Of India Presents Sangeet Natak Akademi Fellowships...
            </a>
            <a
              ref={elementRef}
              href="#"
              target="_blank"
              className="listItemsHomePage"
              id="NeetiAyog"
            >
              NITI Aayog spearheads 'National Conference to Accelerate...
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
            >
              PRESIDENT OF INDIA PRESENTS SANGEET NATAK AKADEMI
            </a>

            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              DRI intercepts illegal elephant tusk trade in Bengaluru, seven...
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              CSIR-lndian Institute of Petroleum signs MoU with UCOST to...
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
            >
              Shri Piyush Goyal urges textile beneficiaries to be vocal for...
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              CSIR-NlScPR hosted Expert Review Meeting on 'Millets for...
            </a>
          </ol>
        </div>
        <div className="Requested-forms">
          <label
            className="headingLinkContainer"
            onMouseOver={handleHoverEvent}
          >
            Most Requested Information
          </label>
          <ol className="linkListHomePage">
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              Website of Institute for Design of Electrical
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
            >
              Website of High Court of Chhattisgar
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              Website of Tribal Research and Training Institute
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              Health and Family Welfare Department of Himachal
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              Website of Centre for Soft Matter Research
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
              onMouseLeave={handleMouseLeave}
            >
              List of State Agricultural Marketing Boards
            </a>
            <a
              href="#"
              target="_blank"
              className="listItemsHomePage"
              onMouseOver={handleHoverEvent}
            >
              List of deemed universities by University Grants
            </a>
          </ol>
        </div>
      </div>
      <div className="blueContainer">
        <p className="blueContainerItems">Be involved</p>
        <p
          className="blueContainerItems"
          onMouseOver={handleHoverEvent}
          onMouseLeave={handleMouseLeave}
        >
          collaborate, share and influence government policy
        </p>
        <p
          className="blueContainerItems"
          onMouseOver={handleHoverEvent}
          onMouseLeave={handleMouseLeave}
        >
          Slogan Writing Contest for GOV.IN AppStore
        </p>
        <p
          className="blueContainerItems"
          onMouseOver={handleHoverEvent}
          onMouseLeave={handleMouseLeave}
        >
          Shoonya Campaign Townhall - Inviting Suggestions
        </p>
        <p
          className="blueContainerItems"
          onMouseOver={handleHoverEvent}
          onMouseLeave={handleMouseLeave}
        >
          On How Can Local Communities Po ..
        </p>
        <p className="blueContainerItems">
          Vote for your Favourite Tableau at Republic Day 2024
        </p>
        <p
          className="blueContainerItems"
          onMouseOver={handleHoverEvent}
          onMouseLeave={handleMouseLeave}
        >
          Tune in to 110th Episode of Mann Ki Baat by Prime Minister Narendra
          Modi on 25th ..
        </p>
      </div>
      {loader ? (
        <div
          className="translatedDiv"
          style={{
            position: "absolute",
            left: mouseX,
            top: mouseY,
          }}
        >
          {istranslated ? <p>{translatedText} </p> : <p>loading....</p>}
        </div>
      ) : null}

      <footer id="footer" class="footer" role="contentinfo">
        <div class="footer-div1">
          <div className="footerDiv1">
            <a className="footerList" title="NPI Overview ">
              About us
            </a>

            <a className="footerList" title="Write to NPI">
              Contact us
            </a>

            <a className="footerList" title="Suggestion for NPI">
              Feedback
            </a>

            <a className="footerList" title="Visitor Summary for NPI">
              Visitor Summary
            </a>
          </div>

          <div className="footerDiv2">
            <a className="footerList" title="Using NPI">
              Help
            </a>

            <a className="footerList" title="Link to Us">
              Link to Us
            </a>

            <a className="footerList" title="Monthly Newsletter">
              Newsletter
            </a>

            <a className="footerList" title="Recommend NPI">
              Tell a Friend
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
