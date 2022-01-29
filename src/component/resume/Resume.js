import { Accordion, AccordionSummary, List, ListItem, Typography, AccordionDetails, ListItemIcon } from "@mui/material";
import abs from '../../assets/logo-abs.png'
import capstone from '../../assets/logo-capstone.png'
import newView from '../../assets/logo-newview.png'
import insightSoftware from '../../assets/logo_insightsoftware.png'
import textivia from '../../assets/logo-textivia.png'
import shoeboxed from '../../assets/logo-shoeboxed.png'
import { Box } from "@mui/system";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Resume(props) {
    const resume= props.resumeObj

    let image;
    switch (resume.title) {
        case "ABS":
            image = abs;
            break;
        case "Capstone Video":
            image = capstone;
            break;
        case "New View Photography":
            image = newView;
            break;
        case "Insight Software":
            image = insightSoftware;
            break;
       case "Textivia, Now 3VE":
            image = textivia;
            break;
        case "Shoeboxed":
            image = shoeboxed;
            break;
    
    }
    
    return (
    <Accordion sx={{bgcolor:'#250606', color:'#ffffff', textAlign:'right', marginBottom:'20px', borderRadius:'0px', padding:'10px 0'}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:'#ffffff'}}/>} aria-controls="panel1a-content" id="panel1a-header">
            <Box sx={{ marginTop: '5px' }}>
                <img src={image} alt={props.title} title={props.title} height='30px' sx={{ margin:'0px', padding:'0' }} />
            </Box>
            <Typography sx={{float:'right', width:'100%', margin:'8px 0 0',fontWeight:'700'}} >{resume.year}</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <List>
                <ListItem disablePadding>
                    <Typography sx={{fontWeight:'700'}}>{resume.role}</Typography>
                </ListItem>
                <ListItem disablePadding >
                    <ListItemIcon ><ChevronRightIcon/></ListItemIcon>
                    <Typography>{resume.item1}</Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                    <Typography>{resume.item2}</Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon><ChevronRightIcon /></ListItemIcon>
                    <Typography>{resume.item3}</Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon><ChevronRightIcon /></ListItemIcon>{}
                    <Typography >{resume.item4}</Typography>
                </ListItem>

            </List>
        </AccordionDetails>
    </Accordion>
    )
}


export default Resume;