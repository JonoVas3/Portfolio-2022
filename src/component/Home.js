// Version 2.2022.1
// Hey There! this is Jon, this site is a learning experience so please excuse the amount of comments in the code they are essentially study notes, Thanks! 

import { GitHub, Instagram } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, Grid, List, ListItem, ListItemIcon, Modal, Typography } from '@mui/material';
import { useState, createContext } from 'react';
import { toolArray } from '../data/Tools';
import ToolIcon from './ToolIcon/ToolIcon';
import { projectArray } from '../data/ProjectsData';
import Projects from './Projects/Projects';
import ProjectModal from './ProjectModal/ProjectModal';
import { resumeArray } from '../data/resumeData';
import Resume from './resume/Resume';

// exporting the funtions
export const projectModalOpenContext = createContext(false);
export const projectModalObjContext = createContext(false);

// --- Modal ---
function Home() {

    // declaring two functions, 'if Modal is Open' & 'what is in the Modal'
    const [projectModalOpen, setProjectModalOpen] = useState(false);
    const [projectModalObj, setProjectModalObj] = useState('');


    const [open, setOpen] = useState(false);
    //const is normally a constant, but it references the immediate value on the right side of the =.
    //In this case, the const references the useState is being permamently mapped to "open" and "setOpen", but the value of the useState can change

    const handleOpen = () => open ? setOpen(false) : setOpen(true);
    //Terinary syntax: if opened(?) set to close, else (:) open


    // --- Page Structure ---
    return (
        <div id="home-body">

            <projectModalOpenContext.Provider value={{ projectModalOpen, setProjectModalOpen }}>
                <projectModalObjContext.Provider value={{ projectModalObj, setProjectModalObj }}>
                    {
                        //get Project Modal
                    }
                    <ProjectModal />

                    <Container maxWidth={false} sx={mainContent}>

                        <Box maxWidth={'xl'} sx={{ margin: '0 auto' }}>
                            <Grid container spacing={0} sx={{ paddingTop: '20px' }}>

                                {
                                    // ----- Top Nav -----
                                }

                                <Grid item xs={12} sm={12} md={1} lg={1} sx={{ margin: '15px 0 0' }}>
                                    <Box sx={logo}>
                                        <img src='https://static.wixstatic.com/media/aaba45_94b78673a269460f95213b5da42b9cba~mv2.png/v1/fill/w_115,h_115,al_c,q_85,usm_1.20_1.00_0.01/jv-logo.webp' width='75px' />
                                    </Box>
                                </Grid>


                                <Grid item xs={12} sm={12} md={9} lg={9} sx={{ paddingTop: '35px' }}>
                                    <Typography sx={mainNav}>
                                        <List>
                                            <ListItem sx={{ display: 'inline', maxWidth: '200px', padding: '50px' }}>Gallery</ListItem>
                                            <ListItem sx={{ display: 'inline', maxWidth: '200px', padding: '50px' }}>Resume</ListItem>
                                            <ListItem sx={{ display: 'inline', maxWidth: '200px', padding: '50px' }}>Contact</ListItem>
                                        </List>
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={12} md={2} lg={2} sx={{ paddingTop: '35px', }}>
                                    <Box sx={navIcons}>
                                        <List >
                                            <ListItem sx={{ display: 'inline', padding: '0', margin: '5px 0 0', maxWidth: '25px' }}>
                                                <a href="https://www.behance.net/jonvasquezbca7" ><Box sx={{ marginBottom: '-10px', display: 'table-caption', paddingRight: '25px' }}><img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3427fd134894253.61e63e19b43d5.png' alt='Behance' width='20px' /></Box></a>
                                            </ListItem>
                                            <ListItem sx={{ display: 'inline', padding: '0', margin: '5px 0 0', maxWidth: '25px' }}>
                                                <a href="https://www.instagram.com/jon_v_designs/"><Instagram sx={{ marginBottom: '-8px', color: '#ffffff', paddingLeft: '10px', paddingRight: '25px' }}></Instagram></a>
                                            </ListItem>
                                            <ListItem sx={{ display: 'inline', padding: '0', margin: '5px 0 0', maxWidth: '25px' }}>
                                                <a href="https://github.com/JonoVas3/Portfolio-2022/tree/master" ><GitHub sx={{ marginBottom: '-8px', color: '#ffffff', paddingLeft: '10px' }}></GitHub></a>
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Grid>

                            </Grid>

                            {
                                // ----- Main Header Content -----
                            }

                            <Grid container spacing={0} sx={header}>
                                <Grid item xs={12} sm={12} md={12} lg={7} sx={intro}>
                                    <Box sx={introBox}>
                                        <Typography sx={{ fontSize: '.3', color: '#c71010', fontFamily: 'Raleway', textAlign: 'left', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                            I'm Jonathan Vasquez
                                </Typography>
                                        <Typography variant='h1' sx={introHeadline}>
                                            A UI/UX Designer with Front-end<br />  Development experience
                                </Typography>
                                        <Typography sx={{ color: '#cbcbcb', fontFamily: 'Raleway', fontWeight: '400', textAlign: 'left' }}>
                                            I am a freelance designer/developer based out of Raleigh, NC. I am also skilled in photography, video production, and video editing. If you want to see an example of my work click on the links to see the designing process or the code that I used to build this website.
                                </Typography>
                                        <a href="https://www.youtube.com/watch?v=8CmktCBkhrg"><Button sx={{ float: 'left', margin: '20px 0 0', color: '#ffffff', padding: '10px 20px', backgroundColor: '#c71010', borderRadius: '0' }}>Watch Video</Button></a>
                                        <a href="https://github.com/JonoVas3/Portfolio-2022"><Button sx={{ float: 'left', margin: '20px 0 0 25px', color: '#ffffff', padding: '10px 20px', backgroundColor: '#c71010', borderRadius: '0' }}>View Code</Button></a>
                                    </Box>
                                </Grid>


                                <Grid item xs={12} sm={12} md={12} lg={5} sx={{ portraitBox }}>
                                    <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
                                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/70b999135992597.61f17d0b4c320.png" alt='Jonathan Vasquez' title='Jonathan Vasquez' width='100%' />
                                    </Box>
                                </Grid>
                            </Grid>


                        </Box>

                    </Container>


                    {
                        // ----- Video -----
                    }


                    <Card sx={videoCard}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dkwiQE-eQLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Card>


                    {
                        // ----- Skills -----
                    }

                    <Container maxWidth={false}>
                        <Box maxWidth={'xl'} sx={{ margin: '0 auto' }}>

                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: '20px' }}>
                                    <Box sx={introBox}>
                                        <Typography variant='h1' sx={headline}>
                                            What I Do
                                </Typography>
                                        <Typography sx={subheadline}>
                                            And The <Typography sx={redText}>Tools</Typography> I Use Everyday
                                </Typography>
                                        <Typography sx={{ color: '#cbcbcb', fontFamily: 'Raleway', fontWeight: '400', textAlign: 'left' }}>
                                            I use a number of tools and programs everyday, Including the Adobe Creative Suite, HTML 5 and CSS3, DSLR Photography and Video. I’m also learning more about Javascript, React, and Material UI.
                                </Typography>
                                    </Box>
                                </Grid>
                            </Grid>


                            <Grid container spacing={0}>
                                {toolArray.map((tool) => {
                                    return (<ToolIcon title={tool.title} altText={tool.alt_text} />)
                                })};
                            </Grid>
                        </Box>
                    </Container>

                    {
                        // ----- Projects -----
                    }

                    <Container maxWidth={false} sx={{ marginTop: '140px', paddingBottom: '70px' }}>
                        <Box maxWidth={'xl'} sx={{ margin: '0 auto' }}>

                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginBottom: '20px' }}>
                                    <Box sx={introBox}>
                                        <Typography variant='h1' sx={headline}>
                                            My Portfolio
                                </Typography>
                                        <Typography sx={subheadline}>
                                            Projects That I'm <Typography sx={redText}>Proud</Typography> of
                                </Typography>
                                    </Box>
                                </Grid>
                            </Grid>

                            {
                                // projectArray is defined at the top in ProjectsData.js, each Const in the array is referenced by .map((projects)
                                // Second line returns Projects
                            }

                            <Grid container spacing={0}>
                                {projectArray.map((project) => {
                                    return (<Projects title={project.title} altText={project.alt_text} opener={(event) => {
                                        setProjectModalObj(project);
                                        setProjectModalOpen(true);
                                    }} />)
                                })};
                    </Grid>

                        </Box>
                    </Container>

                    {
                        // --- Resume ---
                    }

                    <Container maxWidth={false} sx={{ marginTop: '0px' }}>
                        <Box maxWidth={'xl'} sx={{ margin: '0 auto', borderTop: '1px solid #561e1e', padding: '100px 0 0' }}>

                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ marginBottom: '20px' }}>
                                    <Box sx={introBox}>
                                        <Typography variant='h1' sx={headline}>
                                            What I Do
                                        </Typography>
                                        <Typography sx={subheadline}>
                                            And <Typography sx={redText}>Teams</Typography> I've Worked With
                                        </Typography>
                                        <Typography sx={{ color: '#cfcfcf', textAlign: 'left', paddingRight: '30px' }}>
                                            In my ten years of experience I’ve worked with companies ranging from small start-ups, to design firms, to multi-national corporations. I’ve designed over 250 websites and hundreds of different brands. My skillset includes the list below :
                                        </Typography>

                                        <Grid container spacing={0} sx={{ color: '#cfcfcf', margin: '30px 0 0', textAlign: 'left', fontWeight: '700' }}>
                                            <Grid item xl={6}>
                                                <List>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            HTML 5
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            CSS 3
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Photoshop
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Illustrator
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Indesign
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Adobe XD
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                            <Grid item xl={6}>
                                                <List>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Premire Pro
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            After Effects
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Video Production
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Video Editing
                                                        </Typography>
                                                    </ListItem>
                                                    <ListItem sx={skillListItem}>
                                                        <Typography sx={skillListInfo}>
                                                            Photography
                                                        </Typography>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </Grid >

                                        <a href="https://www.linkedin.com/in/jonathan-vasquez-9aa52928/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAXF4FIB22nTIQkppRVLqAV5qga77cCmdAw,1635481300308)/"><Button sx={{ float: 'left', margin: '40px 0', color: '#ffffff', padding: '20px 40px', backgroundColor: '#c71010', borderRadius: '0' }}>Download Resume</Button></a>


                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6} spacing={0}>
                                    {resumeArray.map((resume) => {
                                        return (<Resume resumeObj={resume} />)
                                        {// funtion prop={data}
                                        }

                                    })};
                                </Grid>
                            </Grid>

                        </Box>
                    </Container>


                    {
                        // --- Contact ---
                    }

                    <Container maxWidth={false} sx={{ marginTop: '80px' }}>
                        <Box maxWidth={'xl'} sx={{ margin: '0 auto', borderTop: '1px solid #561e1e', padding: '80px 0' }}>

                            <Grid container spacing={0}>
                                <Grid sx={{}} item xs={12} sm={12} md={8} lg={8} sx={{ marginBottom: '20px' }}>
                                    <Box sx={introBox}>
                                        <Typography variant='h1' sx={headline}>
                                            Contact
                                        </Typography>
                                        <Typography sx={subheadline}>
                                            Got a Project? let <Typography sx={redText}>Talk</Typography>
                                        </Typography>
                                        <Typography sx={{ color: '#cfcfcf', textAlign: 'left', paddingRight: '30px' }}>
                                            Need a Designer? a Photographer? a Videographer? Feel free to email anytime and we can get started on bringing your project to life.
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4} lg={4} spacing={0}>
                                <a href="mailto:jonv.designs@gmail.com"><Button sx={{ margin: { md: '40px auto 0', sm: '40px 0', xs: '40px 0' }, float: { md: 'none', sm: 'left' }, color: '#ffffff', padding: '20px 40px', backgroundColor: '#c71010', borderRadius: '0' }}>Contact Me</Button></a>
                                </Grid>
                            </Grid>


                        </Box>
                    </Container>

                    {
                     // ----- Footer -----
                    }
                    <Box sx={{bgcolor:'#0f0303'}}>
                        <Box maxWidth={'xl'} sx={{ margin: '0 auto' }}>
                        <Grid container spacing={0} sx={{ paddingTop: '20px' }}>

                            <Grid item xs={12} sm={12} md={1} lg={1} sx={{ margin: '15px 0 0' }}>
                                <Box sx={logo}>
                                    <img src='https://static.wixstatic.com/media/aaba45_94b78673a269460f95213b5da42b9cba~mv2.png/v1/fill/w_115,h_115,al_c,q_85,usm_1.20_1.00_0.01/jv-logo.webp' width='75px' />
                                </Box>
                            </Grid>


                            <Grid item xs={12} sm={12} md={9} lg={9} sx={{ paddingTop: '35px' }}>
                                <Typography sx={mainNav}>
                                    <List>
                                        <ListItem sx={{ display: 'inline', maxWidth: '200px', padding: '50px' }}>Gallery</ListItem>
                                        <ListItem sx={{ display: 'inline', maxWidth: '200px', padding: '50px' }}>Resume</ListItem>
                                        <ListItem sx={{ display: 'inline', maxWidth: '200px', padding: '50px' }}>Contact</ListItem>
                                    </List>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={12} md={2} lg={2} sx={{ padding: '35px 0', }}>
                                <Box sx={navIcons}>
                                    <List >
                                        <ListItem sx={{ display: 'inline', padding: '0', margin: '5px 0 0', maxWidth: '25px' }}>
                                            <a href="https://www.behance.net/jonvasquezbca7" ><Box sx={{ marginBottom: '-10px', display: 'table-caption', paddingRight: '25px' }}><img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/3427fd134894253.61e63e19b43d5.png' alt='Behance' width='20px' /></Box></a>
                                        </ListItem>
                                        <ListItem sx={{ display: 'inline', padding: '0', margin: '5px 0 0', maxWidth: '25px' }}>
                                            <a href="https://www.instagram.com/jon_v_designs/"><Instagram sx={{ marginBottom: '-8px', color: '#ffffff', paddingLeft: '10px', paddingRight: '25px' }}></Instagram></a>
                                        </ListItem>
                                        <ListItem sx={{ display: 'inline', padding: '0', margin: '5px 0 0', maxWidth: '25px' }}>
                                            <a href="https://github.com/JonoVas3" ><GitHub sx={{ marginBottom: '-8px', color: '#ffffff', paddingLeft: '10px' }}></GitHub></a>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Grid>

                            
                            <Grid container spacing={0} sx={{borderTop: '1px solid #561e1e'}}>
                                <Grid item xs={12} sm={12} md={12} lg={12} spacing={0}> 
                                    <Typography sx={{ color: '#cfcfcf', padding: '20px 30px 20px 0', textAlign:{md:'right', sm:'center'}, color:'#561e1e' }}>
                                    Copyright &copy; 2022  Jonathan Vasquez 
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                        </Box>
                    </Box>

                </projectModalObjContext.Provider>
            </projectModalOpenContext.Provider>
        </div>
    )
}



// --- Page Styling ---

const navCenter = {
    fontFamily: 'Raleway !important',
    height: '',
    margin: '0 auto',
    position: 'fixed',
}

const mainNav = {
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    fontWeight: '800',
    color: '#ffffff',
    display: {
        xs: 'none',
        sm: 'block',
    },
    float: {
        sm: 'none',
        md: 'left'
    },
    paddingLeft: '10px',
    margin: {
        md: '0 auto',
        lg: '0'
    }
}

const navIcons = {
    float: {
        sm: 'none',
        md: 'right'
    },
    display: {
        xs: 'none',
        sm: 'block',
    }

}


const logo = {
    float: {
        xs: 'none',
        sm: 'none',
        md: 'left',
        lg: 'left',
        xl: 'left'
    }
}

const intro = {
    marginTop: {
        xs: '-20px',
        sm: '50px',
        md: '0px'
    },
    padding: {
        sm: '0 auto',
        md: '150px 0 30px',
        lg: '150px 0 30px',
        xl: '150px 0 30px'
    },
    marginBottom: '30px'
}

const introBox = {

    float: {
        xs: 'none',
        sm: 'none',
        md: 'none',
        lg: 'none'
    },
    margin: {
        xs: '0 auto',
        sm: '0 auto',
        md: '0px auto',
        lg: '0px 0'
    },
    paddingBottom: '20px'
}

const header = {

    marginBottom: '-204px'
}

const introHeadline = {
    textAlign: 'left',
    fontFamily: 'Raleway',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: '3.1rem',
    lineHeight: '1',
    marginBottom: '10px'
}

const headline = {
    textAlign: 'left',
    fontFamily: 'Raleway',
    color: '#551d1d',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: '3.2rem',
    lineHeight: '1',
}

const subheadline = {
    color: '#ffffff',
    fontFamily: 'Raleway',
    textAlign: 'left',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '10px',
    fontSize: '1rem'
}

const portraitBox = {
    margin: {
        xs: '-50px 0 0 0',
        sm: '-50px 0 0 0',
        md: '-50px 0 0 0',
        lg: '0px 0 0 0',
        xl: '0px 0 0 0'
    }
}


const mainContent = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(45deg, #080000, #350606)',
    backgroundPosition: 'center',
    paddingBottom: '200px'
}


const videoCard = {
    border: '10px solid #101010',
    margin: {
        xs: '-10vh auto 5vh',
        sm: '-10vh auto 5vh',
        md: '-10vh auto 5vh',
        lg: '-15vh auto 5vh',
        xl: '-10vh auto 5vh'
    },
    boxShadow: '0px 0px 15px rgba(199,16,16,.35)',
    zIndex: '2',
    position: 'relative',
    width: {
        xs: '300px',
        sm: '480px',
        lg: '640px',
    },
    height: {
        xs: '172px',
        sm: '270px',
        lg: '360px',
    },
}

const redText = {
    color: '#c71010',
    display: 'inline',
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '1rem'
}

const toolIcon = {
    float: 'left'
}

const project = {
    maxWidth: '300px'
}

const skillListItem = {
    display: 'inline',
    padding: '0'

}

const skillListInfo = {
    fontWeight: '700',
    color: '#cfcfcf',
    textAlign: 'left',
    paddingRight: '30px',
    margin: '10px 0'
}
export default Home; 
