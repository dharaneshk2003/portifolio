import Stack from '@mui/material/Stack';
import "./Skills.css";
//all languages icons import
import html from "../../assets/skills_&_tools/html.png";
import css from "../../assets/skills_&_tools/css.png";
import js from "../../assets/skills_&_tools/js.png";
import react from "../../assets/skills_&_tools/react.gif";
import node from "../../assets/skills_&_tools/nodejs.png";
import express from "../../assets/skills_&_tools/express.png"
import mongo from "../../assets/skills_&_tools/mongodb.png";
import python from "../../assets/skills_&_tools/python.png";
import java from "../../assets/skills_&_tools/java.png";
import c from "../../assets/skills_&_tools/c.png";
import vscode from "../../assets/skills_&_tools/vscode.png";
import git from "../../assets/skills_&_tools/git.png";
import postman from "../../assets/skills_&_tools/postman.png";
import netlify from  "../../assets/skills_&_tools/netlify.png";



function Skills() {
    return (
        <>
            <Stack className="s-container" >
            <h2 className="skills-heading">Skills</h2>
                <div className="skill-container">
                    <Stack direction="row" spacing={{ xs: 5, md: 10 }} className='stack-row-a'>
                        <div className="skill-icon"><img src={html} alt="html" /></div>
                        <div className="skill-icon"><img src={css} alt="css" /></div>
                        <div className="skill-icon"><img src={js} alt="js" /></div>
                        <div className="skill-icon"><img src={react} alt="react" /></div>
                        <div className="skill-icon"><img src={node} alt="node" /></div>   
                    </Stack>

                    <Stack direction="row" spacing={{ xs: 5, md: 10 }} className='stack-row-a'>
                    <div className="skill-icon"><img src={express} alt="express" /></div>
                    <div className="skill-icon"><img src={mongo} alt="mongo" /></div>
                    <div className="skill-icon"><img src={python} alt="python" /></div>
                    <div className="skill-icon"><img src={java} alt="java" /></div>
                    <div className="skill-icon"><img src={c} alt="c" /></div>
                    </Stack>
                    <h2 className="tools-heading">Tools</h2>
                    <Stack direction="row" spacing={{ xs: 5, md: 10 }} className='stack-row'>
                        <div className="skill-icon"><img src={vscode} alt="vscode" /></div>
                        <div className="skill-icon"><img src={git} alt="git" /></div>
                        <div className="skill-icon"><img src={postman} alt="postman" /></div>
                        <div className="skill-icon"><img src={netlify} alt="netlify" /></div>
                    </Stack>

                </div>
            </Stack>
        </>
    )
}

export default Skills;
