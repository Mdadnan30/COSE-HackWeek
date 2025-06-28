import React from 'react';
import Card from './Card';
import './index.css';
import profilePic from './assets/img1.jpeg';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.png';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import logo from './assets/logo.jpg';

const players = [
  { name: 'Sachin Tendulkar', type: 'batsman', stats: { 'Strike Rate': 86.23, 'Matches Played': 463, 'Jersey Number': 10, 'Best Performance': '200* vs SA' }, details: ['Highest ODI score: 200*', 'ODI debut: 18 December 1989', 'Last ODI: 18 March 2012', 'Right-handed batsman', 'Bowled right-arm off break, leg break, medium pace'], img: img1 },
  { name: 'Virat Kohli', type: 'batsman', stats: { 'Strike Rate': 93.17, 'Matches Played': 275, 'Jersey Number': 18, 'Best Performance': '183 vs PAK' }, details: ['Highest ODI score: 183', 'ODI debut: 18 August 2008', 'Right-handed batsman'], img: img2 },
  { name: 'Rohit Sharma', type: 'batsman', stats: { 'Strike Rate': 90.26, 'Matches Played': 251, 'Jersey Number': 45, 'Best Performance': '264 vs SL' }, details: ['Highest ODI score: 264', 'ODI debut: 23 June 2007', 'Right-handed batsman'], img: img3 },
  { name: 'MS Dhoni', type: 'batsman', stats: { 'Strike Rate': 87.56, 'Matches Played': 350, 'Jersey Number': 7, 'Best Performance': '183* vs SL' }, details: ['Highest ODI score: 183*', 'ODI debut: 23 December 2004', 'Right-handed batsman', 'Wicketkeeper'], img: img4 },
  { name: 'Yuvraj Singh', type: 'batsman', stats: { 'Strike Rate': 87.67, 'Matches Played': 304, 'Jersey Number': 12, 'Best Performance': '150 vs ENG' }, details: ['Highest ODI score: 150', 'ODI debut: 3 October 2000', 'Left-handed batsman'], img: img5 },
  { name: 'Kapil Dev', type: 'all-rounder', stats: { 'Strike Rate': 95.07, 'Matches Played': 225, 'Jersey Number': 1, 'Best Performance': '175* vs ZIM' }, details: ['Highest ODI score: 175*', 'ODI debut: 1 October 1978', 'Right-handed batsman', 'Right-arm fast bowler'], img: img6 },
  { name: 'Anil Kumble', type: 'bowler', stats: { 'Strike Rate': 37.12, 'Matches Played': 271, 'Jersey Number': 19, 'Best Performance': '6/12 vs WI' }, details: ['Highest ODI score: 26', 'ODI debut: 25 April 1990', 'Right-arm leg spin bowler'], img: img7 },
  { name: 'Jasprit Bumrah', type: 'bowler', stats: { 'Strike Rate': 45.23, 'Matches Played': 72, 'Jersey Number': 93, 'Best Performance': '5/27 vs WI' }, details: ['Best ODI bowling: 5/27', 'ODI debut: 23 January 2016', 'Right-arm fast bowler'], img: img8 },
  { name: 'Ravindra Jadeja', type: 'all-rounder', stats: { 'Strike Rate': 84.33, 'Matches Played': 174, 'Jersey Number': 8, 'Best Performance': '87 vs NZ' }, details: ['Highest ODI score: 87', 'ODI debut: 8 February 2009', 'Left-handed batsman', 'Left-arm orthodox bowler'], img: img9 },
  { name: 'Zaheer Khan', type: 'bowler', stats: { 'Strike Rate': 32.45, 'Matches Played': 200, 'Jersey Number': 34, 'Best Performance': '5/42 vs SL' }, details: ['Best ODI bowling: 5/42', 'ODI debut: 3 October 2000', 'Left-arm fast bowler'], img: img10 },
  { name: 'Sourav Ganguly', type: 'batsman', stats: { 'Strike Rate': 73.70, 'Matches Played': 311, 'Jersey Number': 99, 'Best Performance': '183 vs SL' }, details: ['Highest ODI score: 183', 'ODI debut: 11 January 1992', 'Left-handed batsman'], img: img11 },
];

function App() {
  return (
    <div className="video-bg-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="team-header">
        <img src={logo} alt="Team Logo" className="team-logo" />
        <div className="team-info">
          <h1 className="team-name">Galacticos</h1>
          <p className="team-slogan">Where talent meets opportunity</p>
        </div>
      </div>
      <div className="players-grid">
        {players.map((player, idx) => (
          <Card key={idx} {...player} />
        ))}
      </div>
    </div>
  );
}

export default App;