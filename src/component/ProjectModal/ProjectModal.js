import { Modal, Typography, Button, Paper, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { projectModalOpenContext, projectModalObjContext } from "../Home";
import hvTechPs from '../../assets/synopsis-hv_tech.jpg'
import emperorsPS from '../../assets/synopsis-emperors.jpg'
import eclsPs from '../../assets/synopsis-ecls.jpg'
import voidChatPs from '../../assets/synopsis-voidchat.jpg'
import pcHainesPs from '../../assets/synopsis-pc_haines.jpg'
import medPakPs from '../../assets/MedPak_Redesign-2020.jpg'



function ProjectModal(props) {

    // EXAMPLE OF STATEFUL COMPONTENT - DOES NOT HAVE PROPS

    const { projectModalOpen, setProjectModalOpen } = useContext(projectModalOpenContext);
    // uses 'projectModalOpenContext' from Home
    const { projectModalObj, setProjectModalObj } = useContext(projectModalObjContext);
    const [value, setValue] = useState("false");
    // sets 'value' to 'setValue' is otherwise it is set to false 
    console.log(projectModalObj)

    let imagePs;
    switch (projectModalObj.title) {
        case "HV Tech Solutions":
            imagePs = hvTechPs;
            break;
        case "Emperors E-Sports":
            imagePs = emperorsPS;
            break;
        case "ECLS Inc":
            imagePs = eclsPs;
            break;
        case "VoidChat":
            imagePs = voidChatPs;
            break;
        case "P.C. Haines":
            imagePs = pcHainesPs;
            break;
        case "Medical Packaging Inc":
            imagePs = medPakPs;
            break;
    }

    return (
        <Modal
            open={projectModalOpen}
            aria-labelledby="project-modal-label"
            aria-describedby="project-modal-description"
        >
            <Grid container sx={{ maxWidth:'800px', margin:'50px auto 0', border:'none', borderRadius:'5px', overflow:'hidden', backgroundColor:'#080808' }}>
                {
                // grabs elements from project Modal 
                }
                <Grid item xs={12} sm={8} md={8} lg={8} sx={{ overflow:'scroll', height:'810px', backgroundColor:'#080808' }}>
                        <img src={imagePs} title={props.title} alt={props.altText} width='100%'/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{ padding:'30px 0 0 20px', backgroundColor:'#080808' }}>
                    <Typography id="project-modal-title" variant="h6" component="h2" sx={{ color:'#c71010', fontFamily: 'Raleway', fontWeight:'900', textTransform: 'uppercase' }} >
                        {projectModalObj.title}
                    </Typography>
                    <Typography id="project-modal-type" sx={{ fontFamily: 'Raleway', fontWeight:'700', color:'#c9c9c9' }} >
                        {projectModalObj.type}
                    </Typography>
                    <Typography id="project-modal-info" sx={{ fontFamily: 'Raleway', fontWeight:'300', color:'#c9c9c9', margin:'10px 0 0' }} >
                        {projectModalObj.info}
                    </Typography>
                    <Button onClick={() => setProjectModalOpen(false)} sx={{ margin:'20px auto 0', bgcolor:'#c71010', color:'#ffffff' }}>
                        Close
                    </Button>
                </Grid>

            </Grid>
        </Modal>

    )


};




export default ProjectModal;
