//imports Material UI and images 
import { Grid } from "@mui/material";
import { Box, margin } from "@mui/system";
import hvTech from '../../assets/project-hv_tech.jpg'
import emperors from '../../assets/project-emperors.jpg'
import ecls from '../../assets/project-ecls.jpg'
import pcHaines from '../../assets/project-pc_haines.jpg'
import medPak from '../../assets/project-medical_packaging.jpg'
import voidChat from '../../assets/project-voidchat.jpg'


function Projects(props) {

    // EXAMPLE OF STATEFLESS COMPONTENT - MUST USE PROPS
    // switch checks props.title, in 'case' of title='x', 'let' image be set to 'x'
    let image;
    switch (props.title) {
        case "HV Tech Solutions":
            image = hvTech;
            break;
        case "Emperors E-Sports":
            image = emperors;
            break;
        case "ECLS Inc":
            image = ecls;
            break;
        case "P.C. Haines":
            image = pcHaines;
            break;
        case "Medical Packaging Inc":
            image = medPak;
            break;
        case "VoidChat":
            image = voidChat;
            break;

    }
    // returns a Grid item of any exported project from ProjectData.js
    return (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box sx={projectItem}>
                <img src={image} title={props.title} alt={props.altText} onClick={props.opener} width='100%' />
            </Box>
        </Grid>
    )
}

const projectItem = {
    padding: '10px'
}



export default Projects;