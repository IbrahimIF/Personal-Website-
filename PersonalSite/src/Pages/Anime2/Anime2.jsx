import React from "react";
import {useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/Contexts/ThemeContext";
import "./Anime2.css"
import "../../Stylesheets/visible.css"
import kekkeisensen from "../../Assets/Image buttons/bloodblockadebattlefront.png"
import steins from "../../Assets/Image buttons/stiensgateclocks.png"
import aot from "../../Assets/Image buttons/attackontitanbg.png"
import onePunch from "../../Assets/Image buttons/onepunchmanbg.png"
import nichijou from "../../Assets/Image buttons/nichijoutitle.png"
import ghoul from "../../Assets/Image buttons/tokyo-ghoulbg.png"
import jojo from "../../Assets/Image buttons/Stardust.Crusadersbg.png"
import onepiece from "../../Assets/Image buttons/Onepiecebg.png"
import fmab from "../../Assets/Image buttons/full-metal-alchemistbg.png"
import note from "../../Assets/Image buttons/DeathNotebg.png"
import stone from "../../Assets/Image buttons/dr-stonebg.png"
import jujutsu from "../../Assets/Image buttons/Jujutsu-Kisenbg.png"
import slayer from "../../Assets/Image buttons/demon-slayer.png"

import slayerAudio from "../../Assets/Audio/Demon Slayer.mp3"
import steinsAudio from "../../Assets/Audio/Steins;Gate.mp3"
import aotAudio from "../../Assets/Audio/Attack on titan.mp3"
import onepunchAudio from "../../Assets/Audio/One Punch Man.mp3"
import nichijouAuido from "../../Assets/Audio/Nichijou.mp3"
import onepieceAudio from "../../Assets/Audio/One Piece.mp3"
import drstoneAudio from "../../Assets/Audio/Dr Stone.mp3"
import fmabAudio from "../../Assets/Audio/Fmab.mp3"
import noteAudio from "../../Assets/Audio/Death Note.mp3"
import jojoAudio from "../../Assets/Audio/JoJo's bizzare adventure.mp3"
import bbbfAudio from "../../Assets/Audio/Kekkai Sensen.mp3"
import tokyoAudio from "../../Assets/Audio/Tokyo Ghoul.mp3"
import JujutsuAudio from "../../Assets/Audio/Jujutsu Kaisen.mp3"

function Anime() {

  const [showExplanation, setShowExplanation] = useState("");

  const {isLeftMode} = useContext(ThemeContext);

  var slayers = document.getElementById("slayers2");
  var stones = document.getElementById("stones2");
  var jujutsus = document.getElementById("jujutsus2");
  var sensens = document.getElementById("sensens2");
  var tokyos = document.getElementById("tokyos2");
  var jojos = document.getElementById("jojos2");
  var steinss = document.getElementById("steinss2");
  var onepieces = document.getElementById("onepieces2");
  var onepunchs = document.getElementById("onepunchs2");
  var nichijous = document.getElementById("nichijous2");
  var metals = document.getElementById("metals2");
  var notes = document.getElementById("notes2");
  var Attacks = document.getElementById("Attacks2");


  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  const explanationTexts = {
    "hover": "hover over a button to see the explanation",
    "#1": "Explanation text for link 1 goes here...",
    "#2": "Explanation text for link 2 goes here...",
    "#3": "Explanation text for link 3 goes here...",
    "#4": "Explanation text for link 4 goes here...",
    "#5": "Explanation text for link 5 goes here...",
    "#6": "Explanation text for link 6 goes here...",
    "#7": "Explanation text for link 7 goes here...",
    "#8": "Explanation text for link 8 goes here...",
    "#9": "Explanation text for link 9 goes here...",
    "#10": "Explanation text for link 10 goes here...",
  };

  return (
    <div className="container">
      <audio id="slayers2">
  <source src={slayerAudio} type="audio/mpeg"></source>
</audio>
<audio id="tokyos2">
  <source src={tokyoAudio} type="audio/mpeg"></source>
</audio>
<audio id="jujutsus2">
  <source src={JujutsuAudio} type="audio/mpeg"></source>
</audio>
<audio id="jojos2">
  <source src={jojoAudio} type="audio/mpeg"></source>
</audio>
<audio id="slayers2">
  <source src={steinsAudio} type="audio/mpeg"></source>
</audio>
<audio id="onepieces2">
  <source src={onepieceAudio} type="audio/mpeg"></source>
</audio>
<audio id="onepunchs2">
  <source src={onepunchAudio} type="audio/mpeg"></source>
</audio>
<audio id="nichijous2">
  <source src={nichijouAuido} type="audio/mpeg"></source>
</audio>
<audio id="metals2">
  <source src={fmabAudio} type="audio/mpeg"></source>
</audio>
<audio id="notes2">
  <source src={noteAudio} type="audio/mpeg"></source>
</audio>
<audio id="Attacks2">
  <source src={aotAudio} type="audio/mpeg"></source>
</audio>
<audio id="stones2">
  <source src={drstoneAudio} type="audio/mpeg"></source>
</audio>
<audio id="sensens2">
  <source src={bbbfAudio} type="audio/mpeg"></source>
</audio>
<audio id="steinss2">
  <source src={steinsAudio} type="audio/mpeg"></source>
</audio>
      <div className="box2">
        <div className="Title">
          <div className="textContainer2">
            <br /> <br />
            <div className="title">
              <span className="block-title"></span>
              <h1 className="firstText">Top 10 anime</h1>
            </div>
          </div>
          <div className="text-area">
            <div className={`text-section ${showExplanation && "show"}`}>
              <p>{explanationTexts[showExplanation]}</p>
            </div>
          </div>
          <div className="text-section2">
            <h3>Honurable mentions:</h3>
            <span> </span>
          </div>
        </div>
        <div className="top-10">
          <div className="Anime">
            <Link onMouseOver={() => {
              steinss.play();
                setShowExplanation("#1");
              }}
              onMouseOut={() => {
                steinss.pause();
                  setShowExplanation(".");
              }} 
            to="/Anime" alt="Steins Gate" name="#1" className="one" style={{backgroundImage: `url(${steins})`, backgroundPosition: "center 10%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link  onMouseOver={() => {
              sensens.play();
                setShowExplanation("#2");
              }}
              onMouseOut={() => {
                sensens.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="BloodBlockateBattlefront" name="#2" className="two" style={{backgroundImage: `url(${kekkeisensen})`, backgroundPosition: "center 10%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              Attacks.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                Attacks.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="Attack on Titan" name="#3" className="three" style={{backgroundImage: `url(${aot})`, backgroundPosition: "center 20%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              tokyos.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                tokyos.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="Tokyo Ghoul" name="#4" className="four" style={{backgroundImage: `url(${ghoul})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              onepunchs.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                onepunchs.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="One punch man" name="#5" className="five" style={{backgroundImage: `url(${onePunch})`,  borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              jojos.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                jojos.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="jojo" name="#6" className="six" style={{backgroundImage: `url(${jojo})`, backgroundPosition: "center 44%",borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
                onepieces.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                onepieces.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="onepiece" name="#7" className="seven" style={{backgroundImage: `url(${onepiece})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              metals.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                metals.pause();
                setShowExplanation(".");
              }} 
            to="/Anime" alt="Fullmetal aclhemist" name="#8" className="eight" style={{backgroundImage: `url(${fmab})`, backgroundPosition: "center 40%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              notes.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                notes.pause();
                setShowExplanation(".");
              }} 
             to="/Anime" alt="DeathNote" name="#9" className="nine" style={{backgroundImage: `url(${note})`, backgroundPosition: "center 60%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              stones.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                stones.pause();
                setShowExplanation(".");
              }} 
             to="/Anime" alt="Dr Stone" name="#10" className="ten" style={{backgroundImage: `url(${stone})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              nichijous.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                nichijous.pause();
                setShowExplanation(".");
              }} 
            o="/Anime" alt="nichijou" name="#11" className="eleven" style={{backgroundImage: `url(${nichijou})`, backgroundPosition: "center 100%", borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              jujutsus.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                jujutsus.pause();
                setShowExplanation(".");
              }}  
            to="/Anime" alt="JujutsuKisen" name="#12" className="twelve" style={{backgroundImage: `url(${jujutsu})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
            <Link onMouseOver={() => {
              slayers.play();
                setShowExplanation("#3");
              }}
              onMouseOut={() => {
                slayers.pause();
                setShowExplanation(".");
              }} 
              to="/Anime" alt="demonslayer" name="#13" className="thirteen" style={{backgroundImage: `url(${slayer})`, borderRadius: "0.375rem", backgroundSize: "cover", height: "100px", zIndex: "5"}}>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;



