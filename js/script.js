var a;
function show_hide() {
  if (a == 1) {
    document.querySelector('#myImage').src = 'img/kue.jpg';
    return (a = 0);
  } else {
    document.querySelector('#myImage').src = 'img/kue.png';
    return (a = 1);
  }
}
