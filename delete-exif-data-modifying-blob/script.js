// Attach an event listener to the image upload button
var input = document.querySelector('#erd');
input.addEventListener('change', load);

// Used to create the image from a URL
var urlCreator = window.URL || window.webkitURL;

function load() {
  var fr = new FileReader();
  fr.onload = process;
  fr.readAsArrayBuffer(this.files[0]);

  // Open Dirty EXIF containing image in window
  // window.open(
  //   URL.createObjectURL(this.files[0]),
  //   '_blank',
  //   'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400'
  // );

  var dirtyImageURL = urlCreator.createObjectURL(this.files[0]);
  document.querySelector('#dirty').src = dirtyImageURL;
  console.log('Dirty image', dirtyImageURL);
}
function process() {
  var dv = new DataView(this.result);
  var offset = 0,
    recess = 0;
  var pieces = [];
  var i = 0;
  var cleanImageURL = null;

  // 0xFFD8 means SOI(Start of image), 0xFFD9 means EOI(End of image)

  if (dv.getUint16(offset) == 0xffd8) {
    offset += 2;
    var app1 = dv.getUint16(offset);
    offset += 2;
    while (offset < dv.byteLength) {
      // 0xffe1 is an Application Marker for inserting EXIF data
      if (app1 == 0xffe1) {
        pieces[i] = { recess: recess, offset: offset - 2 };
        recess = offset + dv.getUint16(offset);
        i++;
      } else if (app1 == 0xffda) {
        //File ends at 0xFFD9 so if we hit 0xFFDA we have finished with the file???
        break;
      }
      offset += dv.getUint16(offset);
      var app1 = dv.getUint16(offset);
      offset += 2;
    }
    if (pieces.length > 0) {
      var newPieces = [];
      pieces.forEach(function (v) {
        newPieces.push(this.result.slice(v.recess, v.offset));
      }, this);
      newPieces.push(this.result.slice(recess));
      var br = new Blob(newPieces, { type: 'image/jpeg' });
      console.log(br);

      // Open the EXIF free image in a new window
      // window.open(
      //   URL.createObjectURL(br),
      //   '_blank',
      //   'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400'
      // );
      cleanImageURL = urlCreator.createObjectURL(br);
      console.log('Dirty image', cleanImageURL);
      document.querySelector('#clean').src = cleanImageURL;
    }
  }
  return cleanImageURL;
}
