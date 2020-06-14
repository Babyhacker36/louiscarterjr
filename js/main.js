// reopen this code here


// Loading pre page

var LoadingPage = document.getElementById('loadingPage');
var MainBodyPage = document.getElementById('mainPageBody');

// function loadingPageDisappears() {
//   MainBodyPage.classList.add('remove')
//   setTimeout(() => {
//     LoadingPage.classList.add('remove');
//     MainBodyPage.classList.remove('remove')
//     MainBodyPage.classList.add('show')

//   }, 5000);

// }

// loadingPageDisappears();

// slide Menu Canvas open and close toggle icon

function changeToggleFunction(x) {
  x.classList.toggle("change");
  bodyPreventScroll()


}

// closes menu that is on the canvas

function closeMenu2(x) {
  document.getElementById("slideMenuCanvas").style.width = "0";
  var x = document.getElementById("menuToggle");
  x.classList.toggle("change");
  openMenu();
  bodyallowScroll()



}

function openMenu() {
  document
    .getElementById("menuToggle")
    .addEventListener("click", function slidecanvas() {
      document.getElementById("slideMenuCanvas").style.width = "100%";
      closeMenu();
      bodyPreventScroll()

    });

}

openMenu();

function closeMenu() {
  document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("slideMenuCanvas").style.width = "0";
    openMenu();

  });
}


// functions for the navigation menus allow overflow on bodt

function CloseNavOverflow() {
  openMenu();
  bodyallowScroll()
}


// closes and opens the slide menu
// canvus from the navigation links in the slide menu
function slideMenuOut() {
  document.querySelectorAll("#slideTab").forEach(item => {
    item.addEventListener("click", event => {
      document.getElementById("slideMenuCanvas").style.width = "0";
      var x = document.getElementById("menuToggle");
      changeToggleFunction(x);
      openMenu();

    });
  });
}

// open and close from the toggle menu
slideMenuOut();

// prevent scrolling when the canvas is open

var noScroll = document.body

function bodyPreventScroll() {
  noScroll.classList.add("slideMenuOpen");
  noScroll.classList.remove("slideMenuClosed");
};

function bodyallowScroll() {
  noScroll.classList.add("slideMenuClosed");
  noScroll.classList.remove("slideMenuOpen");
};






// sticky navigation

class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    let self = this;
    $(".et-hero-tab").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({
        scrollTop: scrollTop
      },
      600
    );
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    let offset =
      $(".et-hero-tabs").offset().top +
      $(".et-hero-tabs").height() -
      this.tabContainerHeight;
    if ($(window).scrollTop() > offset) {
      $(".et-hero-tabs-container").addClass("et-hero-tabs-container--top");
    } else {
      $(".et-hero-tabs-container").removeClass("et-hero-tabs-container--top");
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".et-hero-tab").each(function () {
      let id = $(this).attr("href");
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom =
        $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    $(".et-hero-tab-slider").css("width", width);
    $(".et-hero-tab-slider").css("left", left);
  }
}

new StickyNavigation();

// cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 28) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// slide menu Low

document.getElementById("slideMenuLow").onclick = function () {
  document.getElementById("slideMenuCanvas").style.width = "100%";
  var x = document.getElementById("menuToggle");
  changeToggleFunction(x);
  openMenu();
  closeMenu();
};

// window.onscroll = function(e) {
//   console.log(window.scrollY); // Value of scroll Y in px
// };

// function slideMenuLow() {
//     document.getElementById('slideMenuLow').onclick = function () {
//         console.log('div click works')
//     }
// }

// slideMenuLow();

function hideSlideMenuTab() {
  document.getElementById("slideMenuLow").style.visibility = "hidden";
  window.addEventListener("scroll", function () {
    if (window.scrollY > 381) {
      document.getElementById("slideMenuLow").style.visibility = "visible";
      // menuAnimate();
    } else {
      document.getElementById("slideMenuLow").style.visibility = "hidden";
    }
  });
}
hideSlideMenuTab();

// buttons for the slider timer and distance on the scroll 

var button = document.getElementById("slideButtonR");
button.onclick = function () {
  var container = document.getElementById("tab-Work");
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    container.scrollLeft += 30;
    scrollAmount += 1;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 20);

};

var back = document.getElementById("slideButtonL");
back.onclick = function () {
  var container = document.getElementById("tab-Work");
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    container.scrollLeft -= 30;
    scrollAmount += 1;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 20);
};

// slider function timer and distance on small small screens slide scroll small = SSM

// var SSM = window.matchMedia("(max-width:320px)")

// if (SSM.matches) {
//   var button = document.getElementById("slideButtonR");
// button.onclick = function() {
//   var container = document.getElementById("tab-Work");
//   scrollAmount = 0;
//   var slideTimer = setInterval(function() {
//     container.scrollLeft += 30;
//     scrollAmount += 8;
//     if (scrollAmount >= 100) {
//       window.clearInterval(slideTimer);
//     }
//   }, 20);

// };

// var back = document.getElementById("slideButtonL");
// back.onclick = function() {
//   var container = document.getElementById("tab-Work");
//   scrollAmount = 0;
//   var slideTimer = setInterval(function() {
//     container.scrollLeft -= 30;
//     scrollAmount += 1;
//     if (scrollAmount >= 100) {
//       window.clearInterval(slideTimer);
//     }
//   }, 20);
// };
// } 



// Master code file


















// on hover of the div image 1

var image1 = document.querySelector(".image1");
var textBox1 = document.getElementById("textHoverBox1");
image1.addEventListener("mouseover", boxHover);
image1.addEventListener("mouseleave", boxHoverLeave);

function boxHover() {
  textBox1.classList.add("animate");
  textBox1.classList.remove("animateUp");
  document.getElementById("hoverBoxChild1").style.color = "white";
  document.getElementById("hoverBoxChild2").style.color = "white";
}

function boxHoverLeave() {
  textBox1.classList.remove("animate");
  textBox1.classList.add("animateUp");

  var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
  
  
}

document.getElementById("textHoverBox1").onmouseover = function () {
  bottomBoxHover();
};

function bottomBoxHover() {
  boxHover();
  // grab image
  var imageDivChild = document.getElementById("hovImage");
  imageDivChild.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox1").onmouseleave = function () {
    boxHoverLeave();
    imageDivChild.removeAttribute("style", "transform: scale(1.2);");
  };
}

// second image

var image2 = document.querySelector(".image2");
var textBox2 = document.getElementById("textHoverBox2");
image2.addEventListener("mouseover", boxHover2);
image2.addEventListener("mouseleave", boxHoverLeave2);

function boxHover2() {
  textBox2.classList.add("animate2");
  textBox2.classList.remove("animateUp2");
  document.getElementById("hoverBoxChild3").style.color = "white";
  document.getElementById("hoverBoxChild4").style.color = "white";
}

function boxHoverLeave2() {
  textBox2.classList.remove("animate2");
  textBox2.classList.add("animateUp2");
    var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox2").onmouseover = function () {
  bottomBoxHover2();
};

function bottomBoxHover2() {
  boxHover2();
  // grab image
  var imageDivChild2 = document.getElementById("hovImage2");
  imageDivChild2.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox2").onmouseleave = function () {
    boxHoverLeave2();
    imageDivChild2.removeAttribute("style", "transform: scale(1.2);");
  };
}

// third image

var image3 = document.querySelector(".image3");
var textBox3 = document.getElementById("textHoverBox3");
image3.addEventListener("mouseover", boxHover3);
image3.addEventListener("mouseleave", boxHoverLeave3);

function boxHover3() {
  textBox3.classList.add("animate3");
  textBox3.classList.remove("animateUp3");
  document.getElementById("hoverBoxChild5").style.color = "white";
  document.getElementById("hoverBoxChild6").style.color = "white";
}

function boxHoverLeave3() {
  textBox3.classList.remove("animate3");
  textBox3.classList.add("animateUp3");
  var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox3").onmouseover = function () {
  bottomBoxHover3();
};

function bottomBoxHover3() {
  boxHover3();
  // grab image
  var imageDivChild3 = document.getElementById("hovImage3");
  imageDivChild3.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox3").onmouseleave = function () {
    boxHoverLeave3();
    imageDivChild3.removeAttribute("style", "transform: scale(1.2);");
  };
}


//fourth image

var image4 = document.querySelector(".image4");
var textBox4 = document.getElementById("textHoverBox4");
image4.addEventListener("mouseover", boxHover4);
image4.addEventListener("mouseleave", boxHoverLeave4);

function boxHover4() {
  textBox4.classList.add("animate4");
  textBox4.classList.remove("animateUp4");
  document.getElementById("hoverBoxChild7").style.color = "white";
  document.getElementById("hoverBoxChild8").style.color = "white";
}

function boxHoverLeave4() {
  textBox4.classList.remove("animate4");
  textBox4.classList.add("animateUp4");
    var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox4").onmouseover = function () {
  bottomBoxHover4();
};

function bottomBoxHover4() {
  boxHover4();
  // grab image
  var imageDivChild4 = document.getElementById("hovImage4");
  imageDivChild4.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox4").onmouseleave = function () {
    boxHoverLeave4();
    imageDivChild4.removeAttribute("style", "transform: scale(1.2);");
  };
}

//fifth image

var image5 = document.querySelector(".image5");
var textBox5 = document.getElementById("textHoverBox5");
image5.addEventListener("mouseover", boxHover5);
image5.addEventListener("mouseleave", boxHoverLeave5);

function boxHover5() {
  textBox5.classList.add("animate5");
  textBox5.classList.remove("animateUp5");
  document.getElementById("hoverBoxChild9").style.color = "white";
  document.getElementById("hoverBoxChild10").style.color = "white";
}

function boxHoverLeave5() {
  textBox5.classList.remove("animate5");
  textBox5.classList.add("animateUp5");
    var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox5").onmouseover = function () {
  bottomBoxHover5();
};

function bottomBoxHover5() {
  boxHover5();
  // grab image
  var imageDivChild5 = document.getElementById("hovImage5");
  imageDivChild5.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox5").onmouseleave = function () {
    boxHoverLeave5();
    imageDivChild5.removeAttribute("style", "transform: scale(1.2);");
  };
}



//sixth image

var image6 = document.querySelector(".image6");
var textBox6 = document.getElementById("textHoverBox6");
image6.addEventListener("mouseover", boxHover6);
image6.addEventListener("mouseleave", boxHoverLeave6);

function boxHover6() {
  textBox6.classList.add("animate6");
  textBox6.classList.remove("animateUp6");
  document.getElementById("hoverBoxChild11").style.color = "white";
  document.getElementById("hoverBoxChild12").style.color = "white";
}

function boxHoverLeave6() {
  textBox6.classList.remove("animate6");
  textBox6.classList.add("animateUp6");
    var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox6").onmouseover = function () {
  bottomBoxHover6();
};

function bottomBoxHover6() {
  boxHover6();
  // grab image
  var imageDivChild6 = document.getElementById("hovImage6");
  imageDivChild6.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox6").onmouseleave = function () {
    boxHoverLeave6();
    imageDivChild6.removeAttribute("style", "transform: scale(1.2);");
  };
}

//seventh image

var image7 = document.querySelector(".image7");
var textBox7 = document.getElementById("textHoverBox7");
image7.addEventListener("mouseover", boxHover7);
image7.addEventListener("mouseleave", boxHoverLeave7);

function boxHover7() {
  textBox7.classList.add("animate7");
  textBox7.classList.remove("animateUp7");
  document.getElementById("hoverBoxChild13").style.color = "white";
  document.getElementById("hoverBoxChild14").style.color = "white";
}

function boxHoverLeave7() {
  textBox7.classList.remove("animate7");
  textBox7.classList.add("animateUp7");
    var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox7").onmouseover = function () {
  bottomBoxHover7();
};

function bottomBoxHover7() {
  boxHover7();
  // grab image
  var imageDivChild7 = document.getElementById("hovImage7");
  imageDivChild7.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox7").onmouseleave = function () {
    boxHoverLeave7();
    imageDivChild7.removeAttribute("style", "transform: scale(1.2);");
  };
}

//eigth image

var image8 = document.querySelector(".image8");
var textBox8 = document.getElementById("textHoverBox8");
image8.addEventListener("mouseover", boxHover8);
image8.addEventListener("mouseleave", boxHoverLeave8);

function boxHover8() {
  textBox8.classList.add("animate8");
  textBox8.classList.remove("animateUp8");
  document.getElementById("hoverBoxChild15").style.color = "white";
  document.getElementById("hoverBoxChild16").style.color = "white";
}

function boxHoverLeave8() {
  textBox8.classList.remove("animate8");
  textBox8.classList.add("animateUp8");
    var webTitles = document.querySelectorAll('div#slideDivRec div > p')
webTitles.forEach((e) => {
   e.style.color = "#00ffff";
})

   var number2 = document.querySelectorAll('div#number2 > p > u, div#number > p > u')
number2.forEach((e) => {
    e.style.color = "#00ffff";
})
}

document.getElementById("textHoverBox8").onmouseover = function () {
  bottomBoxHover8();
};

function bottomBoxHover8() {
  boxHover8();
  // grab image
  var imageDivChild8 = document.getElementById("hovImage8");
  imageDivChild8.setAttribute("style", "transform: scale(1.2);");

  document.getElementById("textHoverBox8").onmouseleave = function () {
    boxHoverLeave8();
    imageDivChild8.removeAttribute("style", "transform: scale(1.2);");
  };
}

// scroll effect skills section

jQuery(document).ready(function () {
$(window).scroll(function() { 

      if ($(window).scrollTop() >=  $("section:nth-of-type(2)").offset().top) {
             jQuery('.skillbar').each(function () {
    jQuery(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 6000);
  });
      }

});

});

// Name animation in the resume section
// var string = "Hi, my Name is Louis Carter";
// var str = string.split("");
// var el = document.getElementById('str');
// (function animate() {
// str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
// var running = setTimeout(animate, 90);
// })();

// resume section




// Global
var win = window,
  doc = document;

// Global Functions

function hasClass(el, cls) {
  return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

function addClass(el, cls) {
  if (!this.hasClass(el, cls)) {
    el.className += " " + cls;
  }
};

function removeClass(el, cls) {
  if (this.hasClass(el, cls)) {

    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
};

// Elements

var site = doc.getElementsByClassName('site-wrap')[0];
var wrap = doc.getElementsByClassName('panel-wrap')[0];

var panel = doc.getElementsByClassName('panel');

var zoom = doc.getElementsByClassName('js-zoom');

var nav_up = doc.getElementsByClassName('js-up'),
  nav_left = doc.getElementsByClassName('js-left'),
  nav_right = doc.getElementsByClassName('js-right'),
  nav_down = doc.getElementsByClassName('js-down');

var animation = doc.getElementsByClassName('js-animation');

// Tracking
var pos_x = 0,
  pos_y = 0;

function setPos() {
  wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
  setTimeout(function () {
    removeClass(wrap, 'animate');
  }, 600);
}

setPos();

function moveUp() {
  addClass(wrap, 'animate');
  pos_y++;
  setPos();
}

function moveLeft() {
  addClass(wrap, 'animate');
  pos_x++;
  setPos();
}

function moveRight() {
  addClass(wrap, 'animate');
  pos_x--;
  setPos();
}

function moveDown() {
  addClass(wrap, 'animate');
  pos_y--;
  setPos();
}

for (var x = 0; x < nav_up.length; x++) {
  nav_up[x].addEventListener('click', moveUp);
}

for (var x = 0; x < nav_left.length; x++) {
  nav_left[x].addEventListener('click', moveLeft);
}

for (var x = 0; x < nav_right.length; x++) {
  nav_right[x].addEventListener('click', moveRight);
}

for (var x = 0; x < nav_down.length; x++) {
  nav_down[x].addEventListener('click', moveDown);
}

// Animations

for (var x = 0; x < animation.length; x++) {
  (function (_x) {
    animation[_x].addEventListener('click', function () {
      toggleAnimation(_x);
    });
  })(x);
}

function toggleAnimation(i) {
  for (var x = 0; x < animation.length; x++) {
    if (i === x) {
      addClass(animation[x], 'active');
      addClass(wrap, animation[x].getAttribute('data-animation'));
    } else {
      removeClass(animation[x], 'active');
      removeClass(wrap, animation[x].getAttribute('data-animation'));
    }
  }

}

for (var x = 0; x < zoom.length; x++) {
  zoom[x].addEventListener('click', zoomOut);
}

function zoomOut(e) {
  e.stopPropagation();
  addClass(site, 'show-all');
  for (var x = 0; x < panel.length; x++) {
    (function (_x) {
      panel[_x].addEventListener('click', setPanelAndZoom);
    })(x);
  }
}

function setPanelAndZoom(e) {
  pos_x = -e.target.getAttribute('data-x-pos'),
    pos_y = e.target.getAttribute('data-y-pos');
  setPos();
  zoomIn();
}


function zoomIn() {
  for (var x = 0; x < panel.length; x++) {
    panel[x].removeEventListener('click', setPanelAndZoom);
  }
  removeClass(site, 'show-all');
}

// Resume col right more button function






 const buttonsClicked = $('.resumeColLeft > button').click(() => {

 const hello = setTimeout(() => {
  
   document.getElementById('resumeColRight').innerHTML = `<p>
                        Hello, I am a Full stack web developer and Airforce veteran with a growing knowledge of
                        front-end
                        and back-end programming languages, responsive frameworks and best coding practices. I also have
                        four years experience in web and mobile development, programming, web<br /> marketing and web
                        project management.</p>
                  
                        <img src="./img/webimg/portLou.jpg" class="louPort" alt="louiscarterjr">`
  

  console.log('three secounds is up')

 }, 50000);
   

});






let mybtn1 = document.getElementById('mybtn1').onclick = function () {
  showResInfo()
};

returnText = () => {
  document.getElementById('resumeText')
}


// let hide = document.getElementById('resumeText').style = 'display:none;'

function showResInfo() {
  btnClickedBorderOFF();

  document.getElementById('mybtn1').style = 'border:3px solid #00ffff;'
  document.getElementById('resumeColRight').innerHTML = '-Developed responsive websites and mobile applications using CSS3, HTML5, Javascript, JQuery, Bootstrap Semantic UI and API intergration.' + '<br/> -Built codes for Shadowboxes, Slider Carousels, Tickers, Rotating Headers, Form Validation and JS/CSS animations.' + '<br/>- Knowledge of Javascript frameworks such as React and Jquery.' + '<br/> -Developed and validated test routines and schedules to ensure that test cases mimic external interfaces with responsive design.' + '<br/> -Knowledge of developing and designing email templates for marketing.  ' + '<br/>  -Experience with git bash terminal and github management and workflow.' + '<br/> -Knowledge of terminal management using Node.JS  ';
var formatText = document.getElementById('resumeColRight')
formatText.classList.add('jsStyleText')

};

let mybtn2 = document.getElementById('mybtn2').onclick = function () {
  showResInfo2()
};

function showResInfo2() {
  btnClickedBorderOFF();
  document.getElementById('mybtn2').style = 'border:4px solid #00ffff;'
  document.getElementById('resumeColRight').innerHTML = '- Taught front end development part time at the middle school level.' + '<br/> - Responsible for the implementation of curriculum courses to include programming languages such as HTML5, CSS, Bootstrap,and Javascript.' + '<br/> - Responsible for the implementation of curriculum courses to include programming languages such as HTML5, CSS, Bootstrap,and Javascript.' + '<br/>- Worked with the educational staff to create and implement a robotics course using the Brain.JS framework.';

};

let mybtn3 = document.getElementById('mybtn3').onclick = function () {
  showResInfo3()
};

function showResInfo3() {
  btnClickedBorderOFF()
  document.getElementById('mybtn3').style = 'border:4px solid #00ffff;'
  document.getElementById('resumeColRight').innerHTML = '-Taught a wide variety of subjects during tenure to include: U.S. History,World History, Psychology, Law and Government. ' + '<br/> -Planned, organized and executed lesson plans for over 300 high school students. ' + '<br/>-Maintained accurate files and grades through software to effectively communicate student progress to parents.' + '<br/>-Trained in State IEP requirements and documentation and evaluating student needs based on learning disabilities.';

};

let mybtn4 = document.getElementById('mybtn4').onclick = function () {
  showResInfo4()
};

function showResInfo4() {
  btnClickedBorderOFF()
  document.getElementById('mybtn4').style = 'border:4px solid #00ffff;'
  document.getElementById('resumeColRight').innerHTML = '-Maintained and installed hardware and software systems on F-117               Stealth bombers and F-16 aircraft.' + '<br/>  Inspected and repaired aircraft release, launch, suspension navigation systems and aircraft munitions.' + '<br/>-Analyzed malfunctions and performed routine troubleshooting of launch and suspension systems.' + '<br/>-Perform routine network configuration procedures start to shut down on GPS aircraft systems and configured and tested computer software to analyze and diagnose problems.' + '<br/>-Participated in the test and evaluation of electronic circuitry for continuity, voltage, and proper operation of prototype aircraft weapons systems.';
};

// Turns the border off when a button is clicked

var btn1 = document.getElementById('mybtn1');
var btn2 = document.getElementById('mybtn2');
var btn3 = document.getElementById('mybtn3');
var btn4 = document.getElementById('mybtn4');
var exBtn = [btn1, btn2, btn3, btn4]

function btnClickedBorderOFF() {
  for (var i = 0; i < exBtn.length; i++) {
    exBtn[i].style = 'border:1px solid #00ffff'

  }
};

/* Projects image hover */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// Home typewriter effect
var i = 0;
var j = 0;
var txt = 'Louis';
var txt2 = 'Carter';



function typeOut(string, string2) {
  setTimeout(() => {
    if (i < string.length) {
      document.getElementsByClassName('typewrite')[0].innerHTML += string.charAt(i);
      i++;
      typeOut(txt, txt2);

    } else {
      document.getElementsByClassName('typewrite2')[0].innerHTML += string2.charAt(j);
      j++
      typeOut(txt, txt2);
      var removeClass = document.getElementById("typeRemove");
      removeClass.classList.remove("typewrite");
      var addClass = document.getElementById("typeAdd");
      addClass.classList.add("typewrite");
      // var addGlitch = document.getElementById("typeRemove");
      // addGlitch.classList.add("glitch");
    }
  }, 170);
}
setTimeout(() => {
  typeOut(txt, txt2);
}, 5000);






// hacking effect 

// var intervalID = window.setInterval(updateScreen, 550);
// var c = document.getElementById("console");

// var txt3 = [
//   "FORCE: XX0022. ENCYPT://000.222.2345",
//   "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
//   "RETRY: LouisCarterjr.com",
//   "Login: Welcome to my World!",
//   "Z:> PROGRAMMER/DEVELOPER/UX DESIGNER/GAMER/ EXECUTE -READY YES = 1",
//   "================================================",
//   "Priority 1 // local / scanning...",
//   "scanning ports...",
//   "BACKDOOR FOUND (23.45.23.12.00000000)",
//   "BACKDOOR FOUND (13.66.23.12.00110000)",
//   "BACKDOOR FOUND (13.66.23.12.00110044)",
//   "...",
//   "Louis Carter Jr Successful Infiltration",
//   "BRUTE.EXE -r -z",
//   "...locating vulnerabilities...",
//   "...vulnerabilities found...",
//   "MCP/> DEPLOY CLU",
//   "SCAN: __ 0100.0000.0554.0080",
//   "SCAN: __ 0020.0000.0553.0080",
//   "SCAN: __ 0001.0000.0554.0550",
//   "SCAN: __ 0012.0000.0553.0030",
//   "SCAN: __ 0100.0000.0554.0080",
//   "SCAN: __ 0020.0000.0553.0080",
//   "cat << 'EOF' > kali-root/etc/profile",
//   "chmod +x kali-root/second-stage",
//   "LANG=C chroot kali-root /second-stage",
//   "umount kali-root/dev/pts",
//   "CComQIPtr<IHTMLDOCUMENT2 &IID_IHTMLDocument2> spHTML(spDisp);",


// ]

// var docfrag = document.createDocumentFragment();

// function updateScreen() {

//   txt3.push(txt3.shift());

//   txt3.forEach(function(e) {
//     var p = document.createElement("p");
//     p.textContent = e;
//     docfrag.appendChild(p);
//   });

//   while (c.firstChild) {
//     c.removeChild(c.firstChild);
//   }
//   c.appendChild(docfrag);

// }
// var redBtn = document.getElementById('redBtn');
// var greenBtn = document.getElementById('greenBtn');

// function waringBTN() {
//   greenBtn.classList.add('remove');
//   setTimeout(() => {
//     redBtn.classList.add("remove");
//     greenBtn.classList.remove('remove');
//      greenBtn.classList.add("show");
//   }, 4000);
// };

// waringBTN();

// glitch transition 

setTimeout(() => {
  function glitchSection() {
    document.getElementById('gitchsection')
  }
}, 6000);


// animation slider for the buttons in  skills section


// start the animation when the section is reached





// to set and  locate all dots
var dotAll = document.querySelectorAll("#rtDot");

// to set and locate the image divs
var slideImages = document.querySelectorAll('div#skillsSlide');

// add the remove slide for all images to start
slideImages.forEach((e) => {
  e.classList.add('removeSlide');
  addFirstSlide = () => {
    slideImages[8].classList.add('addSlide')

  };
  addFirstSlide();
  // console.log(e)
})

// remove the remove slide class from all images
RemoveAddSlide = () => {
  slideImages.forEach((e) => {
    e.classList.remove('addSlide');
    e.classList.remove('fade-in');
  })
}



// number of the slide Image is identified
slideNumber = (y) => {
  slideImages[y].classList.add('addSlide')
};

// change images on button click 
dotButtons = (x, y) => {
  dotAll[x].onclick = () => {
    RemoveAddSlide();
    slideNumber(y);

  }
}

dotButtons(0, 8);
dotButtons(1, 7);
dotButtons(2, 6);
dotButtons(3, 5);
dotButtons(4, 4);
dotButtons(5, 3);
dotButtons(6, 2);
dotButtons(7, 1);
dotButtons(8, 0);

// controls the slider

var currentSlide = 0;
var currentButton = 0;
var slideInterval = setInterval(nextSlide, 3500);

// scroll effect skills section

jQuery(document).ready(function () {
$(window).scroll(function() { 

  if ($(window).scrollTop() > $("section:nth-of-type(2)").offset().top) {
        

             jQuery('.skillbar').each(function () {
    jQuery(this).find('.skillbar-bar').animate({
      width: jQuery(this).attr('data-percent')
    }, 2000);
             });
    
    
        
        
  };


  

});

});



function nextSlide() {

  currentSlide = (currentSlide + 1) % slideImages.length;
  currentButton = (currentButton + 1) % dotAll.length;
  slideNumber = (y) => {
    slideImages[y].classList.add('addSlide');
    slideImages[y].classList.add('fade-in');
  };

  slideLoop = (numcs, numsl) => {

    if (currentSlide === numcs) {
      RemoveAddSlide()
      slideNumber(numsl); 
    }
    if (currentButton === numcs) {
      activeDot = (db) => {
        dotAll[numcs].classList.add('rtDotBg')
      }
      activeDot(numcs)
    } 
    else {
      dotAll[numcs].classList.remove('rtDotBg')
    }
  }
  slideLoop(0, 8);
  slideLoop(1, 7);
  slideLoop(2, 6);
  slideLoop(3, 5);
  slideLoop(4, 4);
  slideLoop(5, 3);
  slideLoop(6, 2);
  slideLoop(7, 1);
  slideLoop(8, 0);
}
dotAll[0].classList.add('rtDotBg')


// dotAll[0].classList.add('rtDotBg')


// resume section  mobile buttons

const experienceBtn = document.getElementById('experiencenBtn')
const educationBtn = document.getElementById('educationBtn')

$('#educationSection').hide();

experienceBtn.onclick = function () {

  $('#experienceSection').show();
  $('#educationSection').hide();
}

educationBtn.onclick = function () {
  $('#experienceSection').hide()
  $('#educationSection').show();
 
}



