
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import ToggleButton from '@material-ui/lab/ToggleButton';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';




export default function Headers({darkMode, setDarkMode }){
    const useStyles = makeStyles((theme) => ({
        root: {
    
        },
        start: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
        },
        center: {
            flexGrow: 2,
            display: 'flex',
            alignItems: 'center'
        },
        end: {
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
        },
        appBar: {
            boxShadow: 'none',
        },
        toolbar: {
            paddingLeft: 10,
            paddingRight: 10,
        },
        menuButton: {
          
        },
        logo: {
            display: 'flex',
            width: '100px'
        },
        imgLogo: {
            height: '28px'
        },
        titleLogo: {
            fontSize: 10,
            marginLeft: 4,
        },
        inputSearch: {
            border: darkMode ? "1px solid hsl(0, 0%, 18.82%)" : "1px solid #ccc",
            background: darkMode ? "rgba(0, 0, 0, 0.8)" : "#fff",
            padding: '2px 5px',
            marginLeft: '15%',
            width: '494px',
            height: '40px',
            borderRight: 'none'
        },
        searchButton: {
            width: '64px',
            height: '40px',
            borderRadius: '0',
            background: darkMode ? "hsla(0, 0%, 100%, 0.08);" : "#f8f8f8",
        },
        loginButton: {
            borderRadius: '0',
            borderColor: '#065fd4',
            width: '146px',
            height: '40px',
            color: '#065fd4',
        }
    
       
      }));

    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar classes={{ root: classes.toolbar }}>

            <div className={classes.start}>
                <IconButton className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <div className={classes.logo}>
                    <img 
                        src={darkMode ? "/img/logo-yt-white.png" : "/img/logo-yt-black.png" }
                        className={classes.imgLogo}/>
                    <Typography className={classes.titleLogo}>
                        BR
                    </Typography>
                </div>
            </div>

            <div className={classes.center}>
                <InputBase
                    className={classes.inputSearch}
                    placeholder="Pesquisar"
                    inputProps={{ 'aria-label': 'Pesquisar' }}
                    type="search"
                    />
                <ToggleButton className={classes.searchButton}> 
                    <SearchIcon />
                </ToggleButton>

                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>

            <div className={classes.end}>

                <Switch
                    value={darkMode}
                    onChange={ () => setDarkMode(!darkMode) }
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>

                <Button
                    className={classes.loginButton} 
                    variant="outlined"
                    startIcon={<AccountCircleOutlinedIcon />}>
                        FAZER LOGIN
                </Button>
            </div>

            
            </Toolbar>
        </AppBar>
        </div>
    );
};