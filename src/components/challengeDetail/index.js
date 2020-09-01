import React from "react";

import "./index.css"
import Illustration from '../illustration'

const ChallengeDetail = () => (
    <main className="container challenge">
        <Illustration />
        <h1>Chole Ting Workout Challenge <span role="img" aria-label="Victory Hand">✌️</span></h1>
        <div>
            <span role="img" aria-label="Star emoji">⭐</span> 20 
        </div>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a className="action" href="facebook.com" title="Join the group" target="_blank">
            Join the group!
        </a>
    </main>
);

export default ChallengeDetail