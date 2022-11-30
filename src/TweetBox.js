import React, {useState} from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import db from './firebase'
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

const sendTweet = e => {
  e.preventDefault();

  db.collection('posts').add({
    displayName: 'Sahdif',
    username: 'sahdif dev',
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar: 'https://s.pinimg.com/images/user/default_75.png'

  });

  setTweetMessage("");
  setTweetImage("");
}

  return (
    <div className='tweetBox'>
        
        <form>

            <div className='tweetBox__input'>

                <AccountCircleRoundedIcon className='profile'/>
                <input 
                onChange={e => setTweetMessage(e.target.value) }
                value={tweetMessage} placeholder="What's happening?" type='text'/>
                
            </div>
            <input 
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage} className='tweetBox__imgInput' placeholder="Optional: Enter image URL" type='text'/>
            <Button onClick={sendTweet} type='submit' className='tweetBox__button'>Tweet</Button>

        </form> 

    </div>
  )
}

export default TweetBox