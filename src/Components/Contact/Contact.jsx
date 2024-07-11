
import Stack from '@mui/material/Stack';
import "./Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { useMediaQuery } from '@mui/material';

const Contact = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    
    return (
        <>
            <Stack className="c-container" direction="" spacing={12}>
                <div className="contact-container">
                    <h2 className="contact-me-heading">Get in Touch</h2>
                    <Stack direction="row" spacing={{ xs: 4, md: 10 }} className='stack-row-c'>
                        <div className="contact-icon"><a href="https://www.linkedin.com/in/kanchustambham-dharanesh/" style={{ color: "black", textDecoration: "none" }}><LinkedInIcon sx={{
                            width: isMobile ? 50 : 70,
                            height: isMobile ? 50 : 70,
                        }} /></a></div>
                        <div className="contact-icon"><a href="mailto:dharaneshk2003@gmail.com" style={{ color: "black", textDecoration: "none" }}> <ForwardToInboxIcon sx={{
                            width: isMobile ? 50 : 70,
                            height: isMobile ? 50 : 70,
                        }} /></a></div>
                    </Stack>
                </div>
            </Stack>
            {!isMobile && (
                <h4 className='cpyryt'>&copy; 2024 Dharanesh</h4>
            )}
        </>
    )
}

export default Contact;
