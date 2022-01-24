
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddCircle from '@material-ui/icons/AddCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflowY: 'auto',
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
    top: 60,
  },
  listItem:{
    padding: '4px 23px',
  },
  listItemText: {
    fontSize: '14px',
  },
  listItemIcon: {
    minWidth: '46px',
  },
  loginButton: {
    borderRadius: '0',
    borderColor: '#065fd4',
    width: '166px',
    height: '40px',
    color: '#065fd4',
    marginTop: '10px',
  },
  sectionLogin: {
    padding: '17px 23px',
  },
  listSubheader: {
    textTransform: 'upperCase',
    
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    
    backgroundColor: theme.palette.background.default,
    
  },
}));

export default function SideBar(){
    const classes = useStyles();
    
    return(
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
       
        <List>
            <ListItem button selected="true" classes={{root: classes.listItem}}>
              <ListItemIcon classes={{root: classes.listItemIcon}} ><HomeIcon /></ListItemIcon>
              <ListItemText classes={{
                  primary: classes.listItemText,
              }}
              primary="Início"/>
            </ListItem>

            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon classes={{root: classes.listItemIcon}} ><ExploreIcon /></ListItemIcon>
              <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Explorar" />
            </ListItem>

            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon classes={{root: classes.listItemIcon}} ><SubscriptionsIcon /></ListItemIcon>
              <ListItemText classes={{
                  primary: classes.listItemText,
              }}
              primary="Inscrições" />
            </ListItem>

        </List>
        <Divider />
        <List>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon classes={{root: classes.listItemIcon}} ><VideoLibraryIcon /></ListItemIcon>
              <ListItemText classes={{
                  primary: classes.listItemText,
              }}
              primary="Biblioteca" />
            </ListItem>

            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon classes={{root: classes.listItemIcon}} ><HistoryIcon /></ListItemIcon>
              <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Histórico" />
            </ListItem>
        </List>

        <Divider />

        <div className={classes.sectionLogin} >
        <Typography variant="body1">
        Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        
          <Button
                    className={classes.loginButton} 
                    variant="outlined"
                    startIcon={<AccountCircleOutlinedIcon />}>
                      FAZER LOGIN
          </Button>
        </div>

        <Divider />
        
        <List>
          <ListSubheader classes={{root: classes.listSubheader}}>
            O melhor do youtube
          </ListSubheader>
          
          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Música" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Esportes" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Jogos" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Filmes e programas" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Notícias" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Ao vivo" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Moda e beleza" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Aprender" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Vídeo em 360º" />
          </ListItem>

        </List>

        <Divider />

        <List>

         <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Procurar canais" />
          </ListItem>

        </List>

        <Divider />

        <List>
          <ListSubheader classes={{root: classes.listSubheader}}>
            mais do youtube
          </ListSubheader>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Youtube Premium" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Ao vivo" />
          </ListItem>

        </List>

        <Divider />

        <List>

         <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Configurações" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Histórico de denúncias" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Ajuda" />
          </ListItem>

          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon classes={{root: classes.listItemIcon}} ><AddCircle /></ListItemIcon>
            <ListItemText classes={{
                  primary: classes.listItemText,
              }}
               primary="Enviar feedback" />
          </ListItem>

        </List>
        <Divider />
      </Drawer>
    </div>
    );
};