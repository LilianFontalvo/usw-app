function reduce() {
  reduce_button = document.getElementById("reduce-button");
  if (reduce_button.classList.contains("reduce")) {
    document.getElementById("sidebar").style["width"] = "0";
    reduce_button.classList.remove("reduce");
    reduce_button.classList.add("expand");
  } else {
    document.getElementById("sidebar").style["width"] = "30%";
    reduce_button.classList.remove("expand");
    reduce_button.classList.add("reduce");
  }
}
function toSite() {
  document.getElementById("site-button").classList.remove("disabled");
  document.getElementById("dashboard-button").classList.remove("current");
  document.getElementById("site-button").classList.add("current");
  document.getElementById("dashboard").style["display"] = "none";
  document.getElementById("site").style["display"] = "block";
}
function toDashboard() {
  document.getElementById("site-button").classList.remove("current");
  document.getElementById("dashboard-button").classList.add("current");
  document.getElementById("dashboard").style["display"] = "block";
  document.getElementById("site").style["display"] = "none";
}
function closeVideo() {
  document.getElementById("videoplayer").pause();
  document.getElementById("videoplayer-container").style["display"] = "none";
}
function openVideo() {
  document.getElementById("videoplayer-container").style["display"] = "block";
  document.getElementById("videoplayer").play();
}
function Favorite() {
  document.getElementById("favorite-popup-container").style["display"] = "flex";
}
function Unfavorite() {
  document.getElementById("favorite-icon-selected").style["display"] = "none";
  document.getElementById("favorite-icon-nonselected").style["display"] =
    "block";
}
function favCancel() {
  document.getElementById("favorite-popup-container").style["display"] = "none";
}
function favSubmit() {
  document.getElementById("favorite-popup-container").style["display"] = "none";
  document.getElementById("favorite-icon-nonselected").style["display"] =
    "none";
  document.getElementById("favorite-icon-selected").style["display"] = "block";
}

function openSite(e) {
  toSite();
}
