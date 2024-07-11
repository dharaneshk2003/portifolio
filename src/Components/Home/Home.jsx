import "./Home.css";
import profile from '../../assets/profile_&_about/Home.jpg';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Home() {
    return (
        <>
            <Stack className="h-container" direction="" spacing={15}>
                <img src={profile} alt="ok" className="profile-image" />
                <div className="home-container">
                    <h3 className="hey">
                        Hey There...! <span className="waving-hand">👋</span>
                    </h3>
                    <h2 className="myName">I&apos;m Dharanesh</h2>
                    <h3 className="typing">
                        ~Full Stack Developer
                    </h3>
                    <h2 className="cnt">Connect me Through : </h2>
                    <Stack className="info" direction="row" spacing={5}>
                        <div className="gh">
                            <a href="https://github.com/dharaneshk2003" style={{color:"black"}}>
                                <GitHubIcon sx={{ width: 40, height: 40 }} />
                            </a>
                        </div>
                        <div className="li">
                        <a href="https://www.linkedin.com/in/kanchustambham-dharanesh/" style={{color:"black"}}>
                            <LinkedInIcon sx={{ width: 40, height: 40 }} />
                        </a>
                        </div>
                    </Stack>
                </div>
            </Stack>
        </>
    )
}

export default Home;
 