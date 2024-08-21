
    console.log("javascript is working....................")
    function applyParams({inputUrl}) {
      console.log(inputUrl)
      const inputUrlObj = new URL(inputUrl, window.location.origin);
      const currentPageParams = new URLSearchParams(window.location.search);
      const inputUrlParams = new URLSearchParams(inputUrlObj.search);
    
      // Iterate over all parameters in the current page's URL
      for (const [key, value] of currentPageParams) {
        // If the input URL does not already contain the parameter, add it
        if (!inputUrlParams.has(key)) {
          inputUrlParams.append(key, value);
        }
      }
    
      // Construct the final URL
      const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
      console.log(finalUrl)
      return finalUrl;
    }

    const atomiFormatDate = (options = { slated: false, addDate: 0 }) => {
      const defaultOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    
      const today = new Date();
    
      if (options.slated) {
        const day = (today.getDate() + (options.addDate || 0)).toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
      }
    
      if(options.addDate){
        today.setDate(today.getDate()+options.addDate)
      }
      const formattedDate = today.toLocaleDateString(undefined, defaultOptions);
    
      return formattedDate;
    };
    
    const formatTime = () => {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };
    function runDelayedFunctions(data) {
      document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
      if(data?.setDisplayed){
        localStorage.setItem(data?.setDisplayed, true);
      }
      
    }
  
      (function() {
        function rdn(e, t) {
          return Math.floor(Math.random() * (t - e + 1) + e)
        }

        let initial = rdn(400,700);

        setInterval(() => {
          document.querySelectorAll('.atomicat-random').forEach(el => {
            el.innerText = initial.toString();
          });
          initial += rdn(-1, 2);
        }, 1000);

      })();
    
    (function() {
      document.addEventListener('DOMContentLoaded', function () {
        document.addEventListener("keydown", function (e) {
          e.ctrlKey && e.preventDefault();
        }),
        (document.onkeydown = function (e) {
          if (123 == e.keyCode) return !1;
        }),
        document.addEventListener("contextmenu", (e) => e.preventDefault());
      });
    })();
    
      (function() {
        var vturbvideoId = "66912da0191a99000adfafba";
        var SECONDS_TO_DISPLAY = 479;
        var attempts = 0;
        var elsDisplayed = false;
        var alreadyDisplayedKey = 'alreadyElsDisplayed479';
        var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

        var showHiddenElements = function () {
          elsDisplayed = true;
          runDelayedFunctions();
          localStorage.setItem(alreadyDisplayedKey, true);
        };
        if (alreadyElsDisplayed === 'true') {
          setTimeout(function () {
            showHiddenElements();
          }, 100);
        } else {
          startWatchVideoProgress();
        }
        function getVideoInstance() {
          if (smartplayer.instances.length > 1) {
            return smartplayer.instances.find(
              (instance) => instance.options.id === vturbvideoId
            );
          }
          return smartplayer.instances[0];
        };
        function startWatchVideoProgress() {
          if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
            if (attempts >= 10) return;
            attempts += 1;
            return setTimeout(function () {
              startWatchVideoProgress();
            }, 1000);
          }
          console.log(smartplayer.instances);
          var videoInstance = getVideoInstance();
          videoInstance.on('timeupdate', () => {
            if (elsDisplayed || videoInstance.smartAutoPlay) return;
            console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
            if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
            showHiddenElements();
          });
        };
      })();
    