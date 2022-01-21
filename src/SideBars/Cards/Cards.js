import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from '@material-ui/core';




export default function Cards({id,imgpath,text,technology}) {
  const styles = {
    cardWidth:{
      width:"90%",
      margin:"auto"
    }
  };
  return(
      <>
        <Card style={styles.cardWidth} key={id}>
          {/* <CardMedia 
              className={styles.media}
              // image={this.props.recipe.thumbnail}
              image={"https://itsg-global.com/wp-content/uploads/2016/09/react-js-to-use-or-not-to-use.png"}
          />  */}
          
          <CardContent>
          <img src={imgpath} width="100%" height="100"/>
            <Typography color="textSecondary" gutterBottom>
              {text}
            </Typography>
            
            <Button variant='contained' color='secondary'  size="small">Learn {technology}</Button>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>

      </>
  );
}
