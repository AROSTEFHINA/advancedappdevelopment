import '../styles/Bookevents.css';
import int from '../assets/int.jpg'; 
import balloon from '../assets/balloon.jpg';
import Teddy from '../assets/Teddy.jpg';
import winn from '../assets/winn.jpg';
import paris from '../assets/paris.jpg';
import {Link} from 'react-router-dom';
// Import your component-specific styles

const YourComponent = () => {
  return (
    <>
    <div className="dondd">
      <div className="body">
        <div className="container1">
          <div className="row">
            <div className="left-side">
              <div className="info">
                <h1>Welcome!</h1><br /><br />
                <a href="#"><i className="fa fa-quote-left"></i></a>
                
                <p>Opening presents, sharing cake, playing games — most baby showers<br></br>  feature certain classic elements. But one of the best opportunities to <br></br>unleash your creativity and add personality to the celebration is with a <br></br>baby shower theme.

While a baby shower theme certainly isnt mandatory,<br></br> many hosts find that having a theme helps guide party decisions 
into<br></br> place. Whether you go with a specific color scheme, a nod to a popular<br></br> television show or a favorite vacation destination of the parents-to-be,<br></br>a theme can serve as an anchor for the partys decor, food and activities. </p>
                <a href="#"><i className="fa fa-quote-right"></i></a>
              </div>
            </div>
            <div className="right-side">
              <div className="about-img">
              <img src={int} alt="int" style={{ width: '570px' , height: '70%', objectFit: 'cover', borderRadius: '8px' }} />
                {/* <img src="celeb.jpg" alt="Profile" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="box">
          <div className="box-img">
          <img src={balloon} alt="balloon" style={{ width: '100%' , height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            {/* <img src="balloon.jpg" alt="Family" /> */}
          </div>
          <div className="watt">
            <h2>Birthday Party</h2>
            <p>If this sounds far too basic to be a baby shower theme, think again. Plenty of showers revolve around balloons, especially if they incorporate extravagant balloon decor. Balloons are also a simple and sweet element to feature on invitations.</p>
            <Link to="/Booking">
            Book now</Link>
          </div>
        </div>
        <div className="box">
          
          <div className="box-img">
          <img src={Teddy} alt="Teddy" style={{ width: '100%' , height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="ted">
            <h2>Baby shower</h2>
            <p> Just like balloons, teddy bears are simple and sweet childhood classics — and make for a timeless baby shower theme.
            since teddy bears are timeless childhood classics, you can infuse a sense of nostalgia and sweetness into every aspect of the baby shower.  </p>
            <a href="#">Book now</a>
          </div>
        </div>
        <div className="box">
          
          <div className="box-img">
          <img src={winn} alt="winn" style={{ width: '100%' , height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="win">
            <h2>Job Promotion</h2>
            <p> IT is like stepping into the Hundred Acre Wood itself! Parents love incorporating elements from classic childrens books into their baby showers. Winnie-the-Pooh is particularly cute, with plenty of adorable illustrations to embrace. </p>
            <a href="#">Book now</a>
          </div>
        </div>
        <div className="box">
          <div className="box-img">
          <img src={paris} alt="paris" style={{ width: '100%' , height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
          <div className="paris">
            <h2>Wedding Day</h2>
            <p>For the Francophile mom, the City of Lights offers plenty of inspiration — from the Eiffel Tower to Chanel. French cuisine could make up the baby shower menu, too. Croissants, macarons, éclairs are just some of the sweet treats you could serve. </p>
            <a href="#">Book now</a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default YourComponent;

