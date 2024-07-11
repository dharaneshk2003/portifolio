import "./About.css";
import profile from '../../assets/profile_&_about/About.jpg';
import Stack from '@mui/material/Stack';
import Resume from "../../assets/profile_&_about/resume.pdf"

function Home() {
    return (
        <>
            <Stack className="a-container" direction="" spacing={15}>
                <div className="about-container">
                    <h2 className="about-me-heading">About Me</h2>
                    <p className="about-me-paragraph">
                        Hello! I&apos;m a Passionate Full-Stack Developer specializing in React, Node.js, Express.js, and database management. Let&apos;s connect! and Create something Amazing Together.    
                    </p>
                    <a href={Resume} download>
                            <button className="download">Download Resume</button>
                    </a>
                </div>
                <img src={profile} alt="ok" className="profile-image"/>
            </Stack>
        </>
    );
}

export default Home;
