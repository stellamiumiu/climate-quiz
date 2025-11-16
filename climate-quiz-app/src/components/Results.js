import React from "react";

import earthGuardianImg from "../components/earth_guardian.png";
import planetProtectorImg from "../components/planet_protector.png";
import carbonCompromiserImg from "../components/carbon_compromiser.png";
import climateChallengerImg from "../components/climate_challenger.png";


function getResult(points) {
  if (points >= 8 && points <= 12) {
    return {
      title: "Earth Guardian",
      image: earthGuardianImg,
      description: `Congratulations, you’ve ascended to eco-enlightenment. You’re practically a superhero—minus the cape (because capes are “probably” not sustainable).

You’re the type who probably whispers apologies to trees when you accidentally step on their roots. You bring reusable bags, reusable bottles, and probably reusable socks (just kidding… we think). The planet owes you a thank you card, but since we’re all in debt to nature, you might need to settle for this digital pat on the back.`,
      nextSteps: `Keep up the good work, but don’t stop here—recruit others to join your eco-crew! Just be careful not to become “that person” who lectures everyone at the lunch table about how their sandwich wrapper is ruining the ozone layer. Inspire with your actions, not guilt trips.
Challenge: Write a strongly worded email to your local government about climate policies (bonus points for using recycled paper if you print it).`,
    };
  }
  if (points >= 13 && points <= 20) {
    return {
      title: "Planet Protector",
      image: planetProtectorImg,
      description: `You’re doing a solid job at saving the planet, but just not at the finish line yet.

You’re the kind of person who uses a reusable water bottle, but occasionally forgets it and ends up buying a plastic one. You might take shorter showers, but still linger a little too long on cold mornings. The planet appreciates your effort, but it’s quietly waiting for you to take the next step.`,
      nextSteps: `You’re on the right track, but there’s some untapped potential here. Swap out one meat-based meal per week, and maybe ditch the habit of leaving chargers plugged in 24/7. Remember, the little things add up—or so says every motivational Instagram post ever.`,
    };
  }
  if (points >= 21 && points <= 28) {
    return {
      title: "Carbon Compromiser",
      image: carbonCompromiserImg,
      description: `Oh dear. You’re like the person who tries to clean their room by shoving everything under the bed, well-intentioned but not fooling anyone (especially the Earth).

You’re trying, truly, but your lifestyle choices still come with a hefty carbon receipt. You’ve probably said, “I’ll start recycling next week” at least three times, but next week never quite arrives. You’re the type who uses a metal straw but orders takeout in plastic containers. The planet is side-eyeing you so hard right now.`,
      nextSteps: `Let’s be real, you’ve got some bad habits to kick. Start small by swapping plastic bags for reusable ones or cutting back on fast fashion. Don’t think of this as punishment, think of it as leveling up in a video game. Right now, you’re stuck on Level 1, but with a bit of effort, you might just make it to the boss fight (spoiler alert: the boss is climate change).`,
    };
  }
  if (points >= 29 && points <= 32) {
    return {
      title: "Climate Challenger",
      image: climateChallengerImg,
      description: `Well, look who it is: Public Enemy no. 1 (according to the planet, anyway). Your carbon footprint isn’t a footprint. It’s a full-on crater.

You’re the type who leaves the lights on, cranks the AC to “Arctic Tundra,” and thinks composting is a weird hobby for people who wear hemp pants. You’re basically binge-watching Netflix with a pile of single-use plastic containers next to you.`,
      nextSteps: `It’s time for an intervention. Start by asking yourself, “Do I really need to drive three blocks to get bubble tea?” Small changes can make a big difference. Try walking, recycling, or learning what can and can’t be recycled (hint: greasy pizza boxes don’t count). The Earth isn’t mad, just disappointed… but hey, it’s never too late to turn things around. The planet is rooting for you (even if it’s a little skeptical).`,
    };
  }
  return { title: "Unknown", description: "", nextSteps: "", image: null };
}

export default function Results({ totalPoints, onRetake }) {
  const result = getResult(totalPoints);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
        backgroundColor: "#e3f2fd",  // Match original blue background color here
      }}
    >
      <div
        className="results-container"
        style={{
          maxWidth: 700,
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "12px",
          textAlign: "center",
          width: "100%",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        }}
      >
        <h1>Results</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ margin: 0 }}>{result.title}</h2>
          {result.image && (
            <img
              src={result.image}
              alt={result.title}
              style={{
                height: "200px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          )}
        </div>
        <p style={{ whiteSpace: "pre-wrap" }}>{result.description}</p>
        <p
          style={{
            whiteSpace: "pre-wrap",
            fontWeight: "600",
            marginBottom: "2rem",
          }}
        >
          {result.nextSteps}
        </p>
        <button className="btn" onClick={onRetake} style={{ maxWidth: 200 }}>
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
