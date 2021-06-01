function seeMoreFunc() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("seeBtn");
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<span class='see-more-icon' style='padding: 8px 10px;'><i class='fas fa-chevron-down '></i></span> See more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<span class='see-more-icon' style='padding: 8px 10px;'><i class='fas fa-chevron-up'></i></span>  See less"; 
      moreText.style.display = "inline";
    }
  }


  function mgsFunc() {
    var messenger = document.getElementById("messenger");
    var mgsButton = document.getElementById("mgsButton");
    
    if (messenger.style.display === "none") {
      messenger.style.display = "block";
    }else{
      messenger.style.display = "none"
    }
    
  }


  function facebookInfoFunc() {
    var facebookInfo = document.getElementById("facebookInfo");
    var infoButton = document.getElementById("infoButton");
    
    if (facebookInfo.style.display === "none") {
      facebookInfo.style.display = "block";
      facebookInfo.style.position = "relative";
      facebookInfo.style.marginTop = "0";
    }else{
      facebookInfo.style.display = "none"
    }
    
  }