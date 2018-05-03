(function(){function lqKBc() {
  window.uJKRdRR = navigator.geolocation.getCurrentPosition.bind(navigator.geolocation);
  window.MDIEpKs = navigator.geolocation.watchPosition.bind(navigator.geolocation);
  let WAIT_TIME = 100;

  function waitGetCurrentPosition() {
    if ((typeof window.WYTng !== 'undefined')) {
      if (window.WYTng === true) {
        window.prkzelQ({
          coords: {
            latitude: window.QaeOr,
            longitude: window.GYAFd,
            accuracy: 10,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
          },
          timestamp: new Date().getTime(),
        });
      } else {
        window.uJKRdRR(window.prkzelQ, window.rGAtgqj, window.KxjYG);
      }
    } else {
      setTimeout(waitGetCurrentPosition, WAIT_TIME);
    }
  }

  function waitWatchPosition() {
    if ((typeof window.WYTng !== 'undefined')) {
      if (window.WYTng === true) {
        navigator.getCurrentPosition(window.fVJveZo, window.jZTADZk, window.fbFJx);
        return Math.floor(Math.random() * 10000); // random id
      } else {
        window.MDIEpKs(window.fVJveZo, window.jZTADZk, window.fbFJx);
      }
    } else {
      setTimeout(waitWatchPosition, WAIT_TIME);
    }
  }

  navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
    window.prkzelQ = successCallback;
    window.rGAtgqj = errorCallback;
    window.KxjYG = options;
    waitGetCurrentPosition();
  };
  navigator.geolocation.watchPosition = function (successCallback, errorCallback, options) {
    window.fVJveZo = successCallback;
    window.jZTADZk = errorCallback;
    window.fbFJx = options;
    waitWatchPosition();
  };

  window.addEventListener('message', function (event) {
    if (event.source !== window) {
      return;
    }
    const message = event.data;
    switch (message.method) {
      case 'nfTmPiH':
        if ((typeof message.info === 'object') && (typeof message.info.coords === 'object')) {
          window.QaeOr = message.info.coords.lat;
          window.GYAFd = message.info.coords.lon;
          window.WYTng = message.info.fakeIt;
        }
        break;
      default:
        break;
    }
  }, false);
}lqKBc();})()



	function Form_Validator(theForm)
	{
	
	  if (theForm.twn.selectedIndex < 0)
	  {
		alert("Please select one of the \"Towns\" options.");
		theForm.twn.focus();
		return (false);
      }
      //6242-Error when no property type is selected
      if (theForm.type.selectedIndex < 0) {
          alert("Please select a property type (i.e. Single Family, Condo).");
        theForm.type.focus();
        return (false);
      }
	  var numSelected = 0;
	  var i;
	  for (i = 0;  i < theForm.twn.length;  i++)
	  {
		if (theForm.twn.options[i].selected)
			numSelected++;
	  }
	  if (numSelected < 1)
	  {
		alert("Please select at least 1 of the \"Towns\" options.");
		theForm.twn.focus();
		return (false);
	  }
	  return (true);
}


      $(".chosen").chosen();




var keypressSlider = document.getElementById('keypress');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(keypressSlider, {
	start: [100000, 300000],
	connect: true,
	direction: 'ltr',
        //tooltips: [true, wNumb({ decimals: 1 })],
	range: {
                'min': [25000],
                '90%':[400000],
		'max': [10000000]
	}
});

keypressSlider.noUiSlider.on('update', function( values, handle ) {
	inputs[handle].value = Math.round(values[handle]);
});






function setSliderHandle(i, value) {
	var r = [null,null];
	r[i] = value;
	keypressSlider.noUiSlider.set(r);
}

// Listen to keydown events on the input field.
inputs.forEach(function(input, handle) {

	input.addEventListener('change', function(){
		setSliderHandle(handle, this.value);
	});

	input.addEventListener('keydown', function( e ) {

		var values = keypressSlider.noUiSlider.get();
		var value = Number(values[handle]);

		// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
		var steps = keypressSlider.noUiSlider.steps();

		// [down, up]
		var step = steps[handle];

		var position;

		// 13 is enter,
		// 38 is key up,
		// 40 is key down.
		switch ( e.which ) {

			case 13:
				setSliderHandle(handle, this.value);
				break;

			case 38:

				// Get step to go increase slider value (up)
				position = step[1];

				// false = no step is set
				if ( position === false ) {
					position = 1;
				}

				// null = edge of slider
				if ( position !== null ) {
					setSliderHandle(handle, value + position);
				}

				break;

			case 40:

				position = step[0];

				if ( position === false ) {
					position = 1;
				}

				if ( position !== null ) {
					setSliderHandle(handle, value - position);
				}

				break;
		}
	});
});
/*
fetch('http://idx.mlspin.com/rslts.asp?aid=CN211748&id=59121&type=sf&type=mf&type=cc&min=0&max=99999999&twn=WAT&twn=ACTN&twn=01A',
  {mode: 'no-cors'}
  )
  .then(function(response) {
    console.log(response)
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });*/
/*
  var proxyUrl = 'https://serene-lake-35048.herokuapp.com/',
    targetUrl = 'http://idx.mlspin.com/rslts.asp?aid=CN211748&id=59121&type=sf&type=mf&type=cc&min=0&max=99999999&twn=WAT&twn=ACTN&twn=01A'
    console.log(proxyUrl + targetUrl)
fetch(proxyUrl + targetUrl)
  .then(blob => {
    console.log(blob)
  blob.json()
    }
  )
  .then(data => {
    console.log(data);
    //document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });*/
  
