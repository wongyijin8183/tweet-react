import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets'

class App extends React.Component {
  render() {

    let posts = tweets.map( post => {

      let img_url = null;
      if (post.entities.media) {
        img_url = post.entities.media[0].media_url;

      }

      // let currentDate = Date.now()
      // console.log("the date now is :",currentDate);

      return (
        <div>
          <p><img src={post.user.profile_image_url} style={{borderRadius:"500px" , float:"left" , marginRight:"20px"}}/>{post.user.name.toUpperCase()} @{post.user.screen_name} .<br/>{post.text}</p>
          
          <p style={{textAlign:"right"}}><img src={img_url} style={{width:"80%" , borderRadius:"25px"}}/></p>
          <hr/>
        </div>
      )
    });

    return (
      <div>
        {posts}
      </div>
    )
  }  
}


const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");