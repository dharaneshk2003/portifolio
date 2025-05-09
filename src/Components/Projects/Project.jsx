import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import yelpcamp from "../../assets/projects/yelpcamp.png";
import cricapi from "../../assets/projects/cricapi.jpg";
import translang from "../../assets/projects/translang.png";
import gemini from "../../assets/projects/gemini.png";
import url from "../../assets/projects/url.jpg";
import business from "../../assets/projects/business.jpg";
import ticket from "../../assets/projects/ticket.png";
import "./Project.css";

export default function Project() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const cardDimensions = { width: isMobile ? 300 : 400, height: 450 };

  return (
    <>
      <Stack className="p-container">
        <h2 className="projects-heading">Projects</h2>
        <div className="project-container">
          <Stack direction={isMobile ? "column" : "row"} spacing={{ xs: 10, lg: 25 }} className="stack-row-p">
            <Card sx={{ ...cardDimensions, border: "4px solid black", p: 2, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: { xs: 185, lg: 215 } }}
                image={yelpcamp}
                title="Yelp-Camp"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Yelp-Camp
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }} >
                  YelpCamp is a web application to connect enthusiasts by sharing ,exploring campgrounds, user reviews, ratings, and images,forms a community platform for camping enthusiasts.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://github.com/DharaneshKanchustambham/YelpCamp-Project' style={{ color: "black", textDecoration: "none" }}>Github</a>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://yelpcamp-al0z.onrender.com/' style={{ color: "black", textDecoration: "none" }}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ ...cardDimensions, border: "4px solid black", p: 2, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: { xs: 185, lg: 215 } }}
                image={cricapi}
                title="Score-Cric"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Score-Cric
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }} >
                  CricAPI is a website that integrates cricket data from various sources, offering fast responses for accessing real-time scores, match information, including empowering interaction.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://github.com/DharaneshKanchustambham/score-cric' style={{ color: "black", textDecoration: "none" }}>Github</a>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://score-cric.netlify.app/' style={{ color: "black", textDecoration: "none" }}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </div>
        <div className="project-container">
          <Stack direction={isMobile ? "column" : "row"} spacing={{ xs: 10, lg: 25 }} className="stack-row-p">
            <Card sx={{ ...cardDimensions, border: "4px solid black", p: 2, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: { xs: 180, lg: 215 } }}
                image={translang}
                title="Trans-Lang"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Trans-Lang
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }} >
                  TransLang Project enables seamless response multilingual communication using translation API&apos;s ,which overcomes language barriers, and promoting global understanding.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://github.com/DharaneshKanchustambham/TransLang' style={{ color: "black", textDecoration: "none" }}>Github</a>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://trans-lang.netlify.app/' style={{ color: "black", textDecoration: "none" }}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ ...cardDimensions, border: "4px solid black", p: 2, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: { xs: 160, lg: 215 } }}
                image={ticket}
                title="ticketer"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ticketer
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }} >
                  The Ticketer is a online SaaS platform buy/sell and download tickets ensure smooth reserving of tickets using Queue system.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://github.com/dharaneshk2003/ticketer' style={{ color: "black", textDecoration: "none" }}>Github</a>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://ticketer-theta.vercel.app/' style={{ color: "black", textDecoration: "none" }}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </div>
        <div className="project-container">
          <Stack direction={isMobile ? "column" : "row"} spacing={{ xs: 10, lg: 25 }} className="stack-row-p">
            <Card sx={{ ...cardDimensions, border: "4px solid black", p: 2, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: { xs: 180, lg: 215 } }}
                image={business}
                title="Business-Directory"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Business-Directory
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }} >
                The Business Directory app helps users find and explore local businesses, offering easy search, categorization, and detailed listings. It simplifies business discovery.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://github.com/dharaneshk2003/business-directory' style={{ color: "black", textDecoration: "none" }}>Github</a>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://drive.google.com/file/d/1mgquMsPnPhCxY244ii_YYfXW-qEAySFo/view' style={{ color: "black", textDecoration: "none" }}>Drive Link</a>
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ ...cardDimensions, border: "4px solid black", p: 2, borderRadius: 10 }}>
              <CardMedia
                sx={{ height: { xs: 160, lg: 215 } }}
                image={url}
                title="URL-Trimrr"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  URL-Trimrr
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }} >
                  The URL Shortener project simplifies long URLs into compact, shareable links while tracking performance with analytics. It offers a user-friendly interface for creating, managing
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://github.com/dharaneshk2003/url_shortner' style={{ color: "black", textDecoration: "none" }}>Github</a>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <a href='https://url-shortner-tau-seven.vercel.app/' style={{ color: "black", textDecoration: "none" }}>Live Demo</a>
                </Button>
              </CardActions>
            </Card>
          </Stack>
        </div>
      </Stack>
    </>
  );
}