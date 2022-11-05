import React from 'react'
import './Button.css';
import Footer from '../component/footer/footer'

function Button(props) {
  return (
    <div className='container-small'>
        <img src="./images/IMG_7107.jpg" alt="pho" id='profile__img' />
        <p>Bolarinwa MuhdSodiq</p>
        <a href="#slack" id='slack'>Amity</a>
        <div className='containe-anchor'>
        <a href='https//wwww.twitter.com/Bolarinwamuhd1' id='twitter'>Twitter Link</a>
        
        <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
        <a href='http://books.zuri.team' id='books'>Zuri Book</a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=Amity' id='book__python'>Python Book</a>
        <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
        <a href="/contact">Contact Me</a>
        {/* <Link to="/contact">Contact Me</Link> */}
        </div>
        <div>
          <img src="./images/slack.png" alt="zuri" id='social-media'/>
          <img src="./images/github.png" alt="git" id='social-media'/>
        </div>
        <Footer />
    </div>
  )
}

export default Button