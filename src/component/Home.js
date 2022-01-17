// Version 1


import { Typography, Box, Container, Card, Paper, Grid, Button, Icon, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, Modal, CardActionArea } from '@mui/material';
import { PhotoCamera, Contrast, Instagram, GitHub } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ThemeContext } from '@emotion/react';
import {useState} from 'react';
import { margin, borderTop, borderRadius, fontStyle, border, textAlign } from '@mui/system';



// --- Page Structure ---
function Home() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => open ? setOpen(false) : setOpen(true); 
    //Terinary syntax: if opened(?) set to close, else (:) open
   

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => open1 ? setOpen1(false) : setOpen1(true);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => open2 ? setOpen2(false) : setOpen2(true);


    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => open3 ? setOpen3(false) : setOpen3(true); 
    //Terinary syntax: if opened(?) set to close, else (:) open
   

    const [open4, setOpen4] = useState(false);
    const handleOpen4 = () => open4 ? setOpen4(false) : setOpen4(true);

    const [open5, setOpen5] = useState(false);
    const handleOpen5 = () => open5 ? setOpen5(false) : setOpen5(true);

    const [open6, setOpen6] = useState(false);
    const handleOpen6 = () => open6 ? setOpen6(false) : setOpen6(true); 
    //Terinary syntax: if opened(?) set to close, else (:) open
   

    const [open7, setOpen7] = useState(false);
    const handleOpen7 = () => open7 ? setOpen7(false) : setOpen7(true);

    const [open8, setOpen8] = useState(false);
    const handleOpen8 = () => open8 ? setOpen8(false) : setOpen8(true);
    


return(
    <div id="home-body">
    <Container  maxWidth={false} sx={{flexGrow: 1, bgcolor:'#0a0a0a',borderBottom:'1px solid #1a1a1a'}}>
       
       <Box maxWidth='100%'sx={navCenter}>
        <Grid container spacing={0} >
            <Grid item xs={12} sm={4} sx={{padding:'15px 0 0'}} > 
                <img src='https://static.wixstatic.com/media/aaba45_94b78673a269460f95213b5da42b9cba~mv2.png/v1/fill/w_37,h_37,al_c,q_85,usm_1.20_1.00_0.01/jv-logo.webp'/>
            </Grid>
            <Grid item xs={8}>
                <Typography sx={mainNav}>
                    <List >
                        <ListItem sx={{display:'inline-block', width:'120px'}}>Home</ListItem>
                        <ListItem sx={{display:'inline-block', width:'120px'}}>Skills</ListItem>
                        <ListItem sx={{display:'inline-block', width:'120px'}}>Portfolio</ListItem>
                        <ListItem sx={{display:'inline-block', width:'120px'}}>Resume</ListItem>
                        <ListItem sx={{display:'inline-block', width:'200px'}}>
                            <Button sx={{bgcolor:'#c71010',color:'#ffffff', padding:'5px 20px'}}>contact us</Button>
                        </ListItem>
                        <ListItem sx={{display:'inline-block', padding:'0', margin:'0', width:'100px'}}>
                            <Instagram></Instagram> <GitHub></GitHub>
                        </ListItem>
                    </List>
                </Typography>
            </Grid>
        </Grid>
        </Box>   
     </Container>

     <Container maxWidth={false} sx={mainContent}>
        <Grid container spacing={0} sx={{paddingTop: '110px'}}>
            <Grid item xs={12} sm={12} md={12} lg={7} sx={intro}>
                <Box sx={introBox}>
                <Typography sx={{fontSize:'.3', color: '#c71010', fontFamily: 'Montserrat',textAlign:'left', fontWeight:'bold' }}>
                One Two Three
                </Typography>
                <Typography variant='h1' sx={introHeadline}>
                And So The Nightmare Begins Again...
                </Typography> 
                <Typography sx={{color:'#cbcbcb', fontFamily:'Merriweather',fontStyle:'italic', fontWeight:'100', textAlign:'left'}}>
                And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
                </Typography>
                </Box>
            </Grid>
            

            <Grid item xs={12} sm={12} md={12} lg={5} sx={{paddingTop:'10px'}}>
            <Box sx={portrait}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGZCx53WLU0kg/profile-displayphoto-shrink_800_800/0/1517499924283?e=1645660800&v=beta&t=lxy5dgXsNnKSxMLyqDGI8wUwx4Ezzq1kWA4Io5cOgkw" alt='Jonathan Vasquez' title='Jonathan Vasquez' width='100%'/>
            </Box> 
            </Grid>
        </Grid>

    </Container>

    <Card sx={videoCard}>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iutQJzAXiWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Card>
    

    {
     // ----- Skills -----
    }


    <Container maxWidth={'xl'} sx={{ borderBottom:'1px solid #202020', margin: '0 auto'}}>
        
        <Grid container spacing={5} sx={{padding:'10vh 0 7vh'}}>
            <Grid container xs={12} sm={12} md={6} lg={6} sx={{ paddingLeft: {xs:'40px', sm:'0'} }}>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding:'5vh'}}>
                    <Card sx={skillBox}>
                        <Box sx={skillIcon}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7af40134894253.61de6bd52f880.png" width='50px' sx={whiteIcon} />
                        </Box>
                        <Typography sx={skillTitle}> 
                        UI &amp; UX Design
                        </Typography> 
                        <Typography  sx={skillInfo}>
                        And So The Nightmare Begins Again...
                        </Typography> 
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding:'5vh'}} >
                    <Card sx={skillBox}>
                        <Box sx={skillIcon}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/70ee0c134894253.61de6cc304a91.png" width='50px' sx={whiteIcon} />
                        </Box>
                        <Typography sx={skillTitle}> 
                        Video Production
                        </Typography>
                        <Typography  sx={skillInfo}>
                        And So The Nightmare Begins Again...
                        </Typography>  
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding:'5vh'}} >
                    <Card sx={skillBox}>
                        <Box sx={skillIcon}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3e2c6134894253.61de6bd52f118.png" width='50px' sx={whiteIcon} />
                        </Box>
                        <Typography sx={skillTitle}> 
                        Graphic Design
                        </Typography>
                        <Typography  sx={skillInfo}>
                        And So The Nightmare Begins Again...
                        </Typography>  
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{padding:'5vh'}} >
                    <Card sx={skillBox}>
                        <Box sx={skillIcon}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a51f9134894253.61de6bd52ec30.png" width='50px' sx={whiteIcon} />
                        </Box>
                        <Typography sx={skillTitle}> 
                        Photography
                        </Typography>
                        <Typography  sx={skillInfo}>
                        And So The Nightmare Begins Again...
                        </Typography>  
                    </Card>
                </Grid>
            </Grid>

    {
     // ----- Tools -----
    }
           

            <Grid item xs={12} sm={12} md={6} lg={6} justifyContent='center' sx={{float:'left'}}>
                <Typography sx={headline}>
                The  <Box sx={{color:'#c71010', display: 'inline' }}>Tools</Box> I Use Everyday
                </Typography>
                <Box sx={{padding:'20px', textAlign:'left'}}>
                <Grid container spacing={0} sx={{marginTop:'50px', marginLeft:'30px'}}>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} > 
                    <img src="https://cdn3.iconfinder.com/data/icons/adobe-family-software/512/Adobe-23-512.png" alt='Photoshop' title='Photoshop' width='75px' />
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    <img src="https://cdn3.iconfinder.com/data/icons/adobe-family-software/512/Adobe-01-512.png" alt='Illustrator' title='Illustrator' width='75px' />
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} > 
                    <img src="https://cdn3.iconfinder.com/data/icons/adobe-family-software/512/Adobe-35-512.png" alt='Adobe XD' title='Adobe XD' width='75px'/>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    <img src="https://cdn3.iconfinder.com/data/icons/adobe-family-software/512/Adobe-26-512.png" alt='Premiere Pro' title='Premiere Pro' width='75px' />
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    <img src="https://cdn3.iconfinder.com/data/icons/adobe-family-software/512/Adobe-03-512.png" alt='After Effects' title='After Effects' width='75px'/>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    <img src="https://cdn3.iconfinder.com/data/icons/adobe-family-software/512/Adobe-20-512.png" alt='Indesign' title='Indesign' width='75px'/>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" alt='HTML5' title='HTML5' width='75px'/>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-256.png" alt='CSS3' title='CSS3' width='75px'/>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} > 
                    <img src="https://seeklogo.com/images/S/Sony_Alpha-logo-3BA7DFA79B-seeklogo.com.png" alt='Photography' title='Sony Photography' width='75px'/>
                    </Grid>
                    <Grid item xs={4} md={4} sx={{marginBottom:'20px'}} >
                    </Grid>
                </Grid>
                </Box>
            </Grid>
        </Grid>
    </Container>


    {
    // ----- Projects -----
    }


    <Container maxWidth={'xl'} sx={{ borderTop:'1px solid black', borderBottom:'1px solid #202020', margin: '0 auto', padding:'10vh 0'}}>
            <Typography sx={subheadline}>
            My Portfolio
            </Typography>

            <Typography sx={headline}>
            Projects That I'm <Box sx={redText}>Proud</Box> Of
            </Typography>

            <Grid container spacing={0} sx={{padding:'10vh 0 0'}}>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center'  onClick={handleOpen}>
                    
                    <Box sx={{padding:'10px', bgcolor:'#efc445',display:'inline-block',zIndex:'2'}}>                    
                    <CardActionArea>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/576216134894253.61de181a1a550.png" alt='HV Tech Branding' title='HV Tech Branding' width='100%' sx={{border:'1px solid #050505'}} />
                    </CardActionArea>
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0c57b745585641.5835b99faaa8e.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen1} >
                    <Box sx={{padding:'10px', bgcolor:'#014977'}} >
                    <CardActionArea>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/999b25134894253.61de181a17e2a.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </CardActionArea>
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open1} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09f65c132683445.61ae4d90589ee.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen2} >
                    <Box sx={{padding:'10px', bgcolor:'#3ec555'}} >
                        <CardActionArea>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c0e49134894253.61de181a192b9.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                        </CardActionArea>
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open2}  aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0cf4c5101234785.5f19f4cbaf8f1.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen3}>
                    <Box sx={{padding:'10px', bgcolor:'#120a33',display:'inline-block',zIndex:'2'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7dff35134894253.61de181a1a037.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open3} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9be812100924665.5f136e314bd34.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen4} >
                    <Box sx={{padding:'10px', bgcolor:'#8f0700'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ef006d134894253.61de640255a22.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open4} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/135621103285781.5f4970f87e628.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen5} >
                    <Box sx={{padding:'10px', bgcolor:'#145e0f'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30a1aa134894253.61de6653e5605.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open5} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1faf22112157499.600f77fcbc07b.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen6} >
                    <Box sx={{padding:'10px', bgcolor:'#004b8b'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dc13ae134894253.61de181a1779d.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open6} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/dfbfd846068201.5846e74ed8140.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen7} >
                    <Box sx={{padding:'10px', bgcolor:'#31135c'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a8b2fd134894253.61de66d66e249.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open7} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3161a7103242547.5f4896cd431af.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} justifyContent='center' onClick={handleOpen8}>
                    <Box sx={{padding:'10px', bgcolor:'#f0cc26',display:'inline-block',zIndex:'2'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/848de2134894253.61de181a1997b.png" alt='web1' title='web1' width='100%' sx={{border:'1px solid #050505'}} />
                    </Box>
                    <Box sx={{padding:'3vh 0'}}>
                        <Typography sx={headline}>
                            Project name
                        </Typography>
                        <Typography sx={{color:'#c71010', textAlign: 'left', fontFamily: 'Montserrat', fontWeight: '500'}}>
                            Project name
                        </Typography>
                    </Box>
                    <Modal open={open8} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={projectModal}>
                        <Box >
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7cd1ea45898369.58407fe154751.jpg" width='100%'/>
                        </Box >
                    </Modal>
                </Grid>

               
            </Grid>
                
    </Container>



    <Container maxWidth={'xl'} sx={{ borderTop:'1px solid black', margin: '0 auto', padding:'10vh 0'}}>
            <Typography sx={subheadline}>
            My Resume
            </Typography>

            <Typography sx={headline}>
            And  <Box sx={redText}>Teams</Box> I've Worked With
            </Typography>

            <Grid container spacing={5} sx={{padding:'10vh 0 0'}}>
                <Grid item xs={12} sm={12} md={12} lg={4} justifyContent='center'>
                <Accordion sx={resume}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={arrow} />} aria-controls="panel1a-content" id="panel1a-header"  >
                        <Box sx={{marginTop:'0px', display:'inline', height:'70px', marginTop:'-20px'}}> 
                        <img src="https://www.spstechnology.com/wp-content/uploads/2021/07/partner-logos-abs.png" alt='ABS' title='ABS' height='100px' /> 
                        </Box>
                        <Typography sx={ resumeYear } >(2021)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ resumeDetail }>
                        <List>
                            <ListItem disablePadding>
                                <Typography sx={{fontWeight:'900'}}>Design Consultant (contract)</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Created video promotions and news updates</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed layouts for product update and technical documents</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Created presentations, ads, and graphics for tradeshows and partners</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed digital assets for social media campaigns</Typography>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} justifyContent='center'>
                <Accordion sx={resume}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={arrow} />} aria-controls="panel2a-content" id="panel2a-header">
                        <Box sx={{marginTop:'15px', display:'inline'}}> 
                        <img src="https://www.capstonevideo.com/hs-fs/hubfs/DealerCreative-May2019/2020%20Logos/Capstone%20Video%202020%20-%20On%20Black%20For%20Small%20Applications.png?width=1779&name=Capstone%20Video%202020%20-%20On%20Black%20For%20Small%20Applications.png" alt='Capstone Production Group' title='Capstone Production Group' height='30px' />
                        </Box>
                        <Typography sx={ resumeYear }>(2021)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ resumeDetail }>
                        <List>
                            <ListItem disablePadding>
                                <Typography sx={{fontWeight:'900'}}>Motion Graphic Designer (Contract)</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Created video advertisements using recorded footage and motion graphics</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Directed live video shoots on location</Typography>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} justifyContent='center'>
                <Accordion  sx={resume}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={arrow} />} aria-controls="panel3a-content" id="panel3a-header">
                        <img src="https://mlhdnfzf1mb2.i.optimole.com/wf-MSBk-S66gxpPs/w:93/h:43/q:75/https://newviewphotosnc.com/wp-content/uploads/2018/08/NewViewLogos620x429.png" alt='Shoeboxed' title='Shoeboxed' height='50px'  sx={{logo}} />
                        <Typography sx={ resumeYear } >(2020)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ resumeDetail }>
                        <List>
                            <ListItem disablePadding>
                                <Typography sx={{fontWeight:'900'}}>Photographer and Videographer </Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>HDR Photography</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Photo Editing and Manipulation</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Video Editing &amp; Production</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>3D Photography</Typography>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{padding:'5vh 0 0'}}>
                <Grid item xs={12} sm={12} md={12} lg={4} justifyContent='center'>
                <Accordion sx={resume}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={arrow} />} aria-controls="panel1a-content" id="panel1a-header">
                        <Box sx={{marginTop:'15px'}}> 
                        <img src="https://insightsoftware.com/wp-content/themes/jetreports/assets/images/logo_InsightSoftware_white.png" alt='insightsoftware' title='insightsoftware' height='30px'  sx={{marginTop:'15px'}} /> 
                        </Box>
                        <Typography sx={ resumeYear}>(2019-2020)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ resumeDetail }>
                        <List>
                            <ListItem disablePadding>
                                <Typography sx={{fontWeight:'900'}}>Design Consultant</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Filmed and edited video tutorials, interviews and online conferences</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed whiteletters, mailers, print ads, and tradeshow booths</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Coded and edited email templates</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed and planned Ad campaigns</Typography>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} justifyContent='center'>
                <Accordion sx={resume}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={arrow} />} aria-controls="panel2a-content" id="panel2a-header">
                        <Box sx={{marginTop:'10px'}}> 
                        <img src="https://cdn.dribbble.com/users/73135/screenshots/3170388/attachments/674187/large-textivialightblue-notagline-transparentbg.png" alt='Textiva (now 3ve)' title='Textiva (now 3ve)' height='35px'  sx={{marginTop:'15px'}} />
                        </Box>
                        <Typography sx={ resumeYear }>(2014-2018)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ resumeDetail }>
                        <List>
                            <ListItem disablePadding>
                                <Typography sx={{fontWeight:'900'}}>Web &amp; Graphic Designer</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Created logos, social media assets, and branding standards for clients</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Planned and designed multi-page websites and layouts</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed icons, illustrations, and infographics</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Filmed and edited video advertisements with original and pre-filmed footage</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Created informative audio tutorials for clients</Typography>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4} justifyContent='center'>
                <Accordion  sx={resume}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={arrow} />} aria-controls="panel3a-content" id="panel3a-header">
                        <Box sx={{marginTop:'10px'}}> 
                        <img src="https://www.shoeboxed.com/wp-content/themes/sbx/test/img/logos/shoeboxed-white.png" alt='Textiva (now 3ve)' title='Textiva (now 3ve)' height='40px'  marginTop='105px'  />
                        </Box>
                        <Typography sx={ resumeYear } >(2012-2014)</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={ resumeDetail }>
                        <List>
                            <ListItem disablePadding>
                                <Typography sx={{fontWeight:'900'}}>Graphic Designer</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Built and standardized company branding</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Filmed and edited original video advertisements</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed icons, illustrations, and infographics</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Designed whiteletters, print ads, and merchandise</Typography>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon><ChevronRightIcon sx={icon} /></ListItemIcon>
                                <Typography sx={resumeBullet}>Built and edited Wordpress websites using HTML5, CSS3, and PHP</Typography>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                </Grid>
            </Grid>
          
    </Container>






     </div>
)
}



// --- Page Styling ---

const navCenter = {
    fontFamily: 'Montserrat !important', 
    height: '',
    width:'100%',
    margin: '0 auto',
    
}

const mainNav ={
    color: '#ffffff',
    display: {
        xs: 'none',
        sm: 'block',
    }
}

const subheadline = {
    fontFamily: 'Montserrat',
    color:'#2a2a2a',
    fontWeight: '900',
    fontSize: {
        xs:'3rem',
        sm:'5rem',
        md:'5rem',
    },
    lineHeight:'1',
    borderTop: 'red',
    textAlign: 'left',
    paddingBottom:'2vh'
}

const headline = {
    fontFamily: 'Montserrat',
    color:'#d8d8d8',
    fontWeight: '900',
    fontSize: {
        xs:'1rem',
        sm:'1rem',
        md:'1.5rem',
    },
    lineHeight: '1',
    textAlign:'left',
    paddingleft: {
        xs:'30px !important',
        sm:'0',
        md:'0',
    }
}

const redText= {
    color:'#c71010', 
    display: 'inline' 
}

const intro= {
    padding: {
        sm: '0 auto',
        md:'10px 100px 0'
    }
}

const introBox ={
    width: {
        xs:'100%',
        sm:'640px',
        md:'640px'
    },
    float: {
        xs:'none',
        sm:'right',
        md:'right',
        lg:'right'
    },
    marginTop: {
        xs:'0',
        sm:'0',
        md:'100px'
    }
}

const introHeadline= {
    textAlign: 'left',
    fontFamily: 'Montserrat',
    color:'white',
    fontWeight: '900',
    fontSize: '3.2rem',
    lineHeight: '1',
    marginBottom: '30px'
}

const portrait= {
    borderRadius: '300px',
    overflow:'hidden',
    margin: {
        xs: '30px auto',
        sm: '30px auto',
        md: '30px auto'
    },
    height: {
        xs:'250px',
        sm:'400px',
        md:'400px',
        lg:'400px',
        xl:'400px'
    },
    width:  {
        xs:'250px',
        sm:'400px',
        md:'400px',
        lg:'400px',
        xl:'400px'
    },
    float: {
        md:'none',
        lg: 'left'
    }
}

const mainContent = {
    width:'100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    bgcolor:'#0a0a0a',
    backgroundPosition: 'center',
    paddingBottom: '200px'
}


const videoCard = {
    border: '10px solid #28282A',
    height: '40vh',
    margin: '-10vh auto 10vh',
    boxShadow: '0px 10px 15px #000000',
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

const skillBox= {
    bgcolor:'#141414', 
    padding:'30px', 
    textAlign:'center',
    maxWidth:'none',
    fontFamily:'Merriweather'
}

const skillIcon= { 
    maxWidth:'55px', 
    border:'2px solid #c71010', 
    borderRadius:'100px', 
    bgcolor:'#101010', 
    margin:'0 auto 10px',
    padding:'10px'
}

const skillTitle= {
    color:'white', 
    fontWeight:'bold', 
    fontFamily:'Montserrat', 
    fontSize:'1.1rem'
}

const skillInfo= {
    color:'#cbcbcb', 
    fontFamily:'Merriweather',
    fontStyle:'italic', 
    fontWeight:'100', 
    textAlign:'left',
    textAlign:'center',
    fontSize: '.7rem',
    paddingTop:'1vh'
}

const icons= {
    fontFamily: 'Montserrat',
    width:'100%',
    margin: '5vh auto ',
    padding: '0 0',
    color: 'white',
}

const clearIcon= {
    display: {
        xs: 'none',
        sm: 'none',
        md: 'block',
        lg: 'block',
        xl: 'block'
    }
}

const projectItem = {
    margin: '2vh auto', 
    bgcolor:'#28282A',
    border: '10px solid #28282A',
    boxShadow: '0px 0px 10px #010101',
    width: {
        xs: '300px',
        sm: '400px',
        md: '400px',
        lg: '400px',
        xl: '400px',
    }
}

const projectName = {
    fontFamily: 'Montserrat',
    color:'white',
    fontWeight: '900',
    fontSize: '1rem',
    marginTop: '1vh',
    paddingTop: '1vh'
}

const projectModal = {
    border:'none',
    margin:'0 auto',
    width:'50%', 
    overflow:'scroll'
}

const resume = {
    bgcolor:'#060606',
    color: '#d9d9d9',
    border: '1px solid #3c3c3c',

}

const resumeYear= {
    lineHeight:'4', 
    textAlign: 'right', 
    width:'100%', 
    paddingRight:'20px', 
    fontWeight:'900'
}

const resumeDetail= {
    marginTop:'-10px', 
    minHeight: '240px'
}

const resumeBullet= {
    fontFamily:'Merriweather',
    fontStyle:'italic',
    color:'#b5b5b5', 
    fontSize:'.9rem'
}

const arrow= {
    color:'#ffffff',
    bgcolor: '#0c0c0c',
    borderRadius: '5px',
    padding: '5px'
}

const icon= {
    color:'#c71010'
}

const logo= {
    marginTop:'55px'
}

const whiteIcon = {
    filter: "brightness(0) invert(1)"
}

export default Home; 
