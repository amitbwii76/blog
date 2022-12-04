import '../styles/globals.css'
import '../public/Js/main.js'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import AOS from "aos";
import '../public/css/style.css'; 
 
function MyApp({ Component, pageProps }) {
 
 useEffect(() => {
  // AOS.init({disable: 'mobile'});   
  //  AOS.refresh();
  AOS.init({
    disable: function() {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    }
  });
  }, []);




  return <Component {
    ...pageProps} />
}

export default MyApp
