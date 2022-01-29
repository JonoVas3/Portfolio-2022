//imports Material UI and images 
import { Grid } from "@mui/material";
import { Box, margin } from "@mui/system";
import photoshop from '../../assets/icon_photoshop.png'
import illustrator from '../../assets/icon_illustrator.png'
import adobeXd from '../../assets/icon_adobe-xd.png'
import indesign from '../../assets/icon_indesign.png'
import premierePro from '../../assets/icon_premiere-pro.png'
import afterEffects from '../../assets/icon_after-effects.png'
import html5 from '../../assets/icon_html5.png'
import css3 from '../../assets/icon_css3.png'
import sonyAlpha from '../../assets/icon_sony-alpha.png'
import javascriptIcon from '../../assets/icon_javascript.png'
import reactIcon from '../../assets/icon_react.png'
import materialUiIcon from '../../assets/icon_material-ui.png'


function ToolIcon(props) {

    // switch checks props.title, in 'case' of title='x', 'let' image be set to 'x'
    let image;
    switch(props.title){
        case "Photoshop":           
            image = photoshop;
            break;

        case "Illustrator":
            image = illustrator;
            break;

        case "Adobe XD":
            image = adobeXd;
            break;
        
        case "Indesign":
            image = indesign;
            break;

        case "Premiere Pro":
            image = premierePro;
            break;
        
        case "After Effects":
            image = afterEffects;
            break;
            
        case "HTML 5":
            image = html5;
            break;

        case "CSS 3":
            image = css3;
            break;

        case "Sony Alpha":
            image = sonyAlpha;
            break;
        
        case "Javascript":
            image = javascriptIcon;
            break;
        
        case "React":
            image = reactIcon;
            break;
        
        case "Material UI":
            image = materialUiIcon;
            break;
        
    }

    return (
        <Grid item xs={3} sm={3} md={2} lg={1} xl={1}><Box sx={toolIcon}><img src={image} title={props.title} alt={props.altText} width="75px" /></Box></Grid>
    )
}

const toolIcon = {
    float: 'left'
}

//projects exported to Home, and referenced by Tools
export default ToolIcon;