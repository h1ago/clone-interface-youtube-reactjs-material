import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";


const videos = [
    {
      id: 1,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 2,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 3,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 4,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 5,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 6,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 7,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    },
    {
      id: 8,
      title:
        'Pearl Jam - Even Flow',
      channel: 'Pearl Jam',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/img/avatar.jpeg',
      thumb: '/img/thumb1.png',
    }
  ];

export default function Content(){
    
    return(
        <div>
            <Box p={6} >
                
                <Toolbar />
                
                <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
                    Recomendados
                    
                </Typography>
                

                <Grid container spacing={3}>
                    {videos.map((item, index) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>    
                                <img
                                    style={{ width: "100%" }}
                                    alt={item.title}
                                    src={item.thumb}
                                />
                                </Box>
    
                                <Typography
                                    style={{ fontWeight: 600 }}
                                    gutterBottom
                                    variant="body1"
                                    color="textPrimary"
                                >
                                    {item.title}
                                </Typography>
            
                                <Typography display="block" variant="body1" color="textPrimary">
                                {item.channel}
                                </Typography>

                                <Typography variant="body2" color="textSecondary">
                                {`${item.views} + ${item.date}`}
                                </Typography>

                            </Grid>
                        ))}
                </Grid>
            </Box>
        </div>
    );
};