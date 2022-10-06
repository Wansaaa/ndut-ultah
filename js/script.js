var a;
function show_hide() {
  if (a == 1) {
    document.getElementById('myImage').src = 'img/kue.jpg';
    return (a = 0);
  } else {
    document.getElementById('myImage').src = 'img/kue.png';
    return (a = 1);
  }
}
