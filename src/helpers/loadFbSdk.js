import { FB_APP_ID } from '../config';

const loadFbSdk = () => {
  return new Promise((resolve, reject) => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : FB_APP_ID,
        xfbml      : true,
        version    : 'v2.8'
      });
      window.FB.AppEvents.logPageView();
      resolve('success');
    };
    (function(d, s, id){
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
};

export default loadFbSdk;