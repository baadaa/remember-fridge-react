const getOrientation = (file, callback) => {
  let reader = new FileReader();

  reader.onload = function(event) {
    let view = new DataView(event.target.result);

    if (view.getUint16(0, false) !== 0xffd8) return callback(-2);

    let length = view.byteLength,
      offset = 2;

    while (offset < length) {
      let marker = view.getUint16(offset, false);
      offset += 2;

      if (marker === 0xffe1) {
        if (view.getUint32((offset += 2), false) !== 0x45786966) {
          return callback(-1);
        }
        let little = view.getUint16((offset += 6), false) === 0x4949;
        offset += view.getUint32(offset + 4, little);
        let tags = view.getUint16(offset, little);
        offset += 2;

        for (let i = 0; i < tags; i++)
          if (view.getUint16(offset + i * 12, little) === 0x0112)
            return callback(view.getUint16(offset + i * 12 + 8, little));
      } else if ((marker & 0xff00) !== 0xff00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };

  reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
};

const resetOrientation = (srcBase64, srcOrientation, callback) => {
  let img = new Image();

  img.onload = function() {
    let width = img.width,
      height = img.height,
      max_size = 544,
      canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");

    // resize the image
    if (width > height) {
      if (width > max_size) {
        height *= max_size / width;
        width = max_size;
      }
    } else {
      if (height > max_size) {
        width *= max_size / height;
        height = max_size;
      }
    }
    canvas.width = width;
    canvas.height = height;

    // set proper canvas dimensions before transform & export
    if ([5, 6, 7, 8].indexOf(srcOrientation) > -1) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }

    // transform context before drawing image
    switch (srcOrientation) {
      case 2:
        ctx.transform(-1, 0, 0, 1, width, 0);
        break;
      case 3:
        ctx.transform(-1, 0, 0, -1, width, height);
        break;
      case 4:
        ctx.transform(1, 0, 0, -1, 0, height);
        break;
      case 5:
        ctx.transform(0, 1, 1, 0, 0, 0);
        break;
      case 6:
        ctx.transform(0, 1, -1, 0, height, 0);
        break;
      case 7:
        ctx.transform(0, -1, -1, 0, height, width);
        break;
      case 8:
        ctx.transform(0, -1, 1, 0, 0, width);
        break;
      default:
        ctx.transform(1, 0, 0, 1, 0, 0);
    }

    // draw image
    ctx.drawImage(img, 0, 0, width, height);

    // export base64
    callback(canvas.toDataURL("image/jpeg", 0.5));
    // return canvas.toDataURL("image/jpeg", 0.5);
  };

  img.src = srcBase64;
};

const takePhoto = (e, cb) => {
  let photo;
  let imgUrl;

  let files = e.target.files;
  if (files && files.length > 0 && files[0].type.match(/^image\//)) {
    photo = files[0];
    imgUrl = window.URL.createObjectURL(photo);
    getOrientation(photo, function(orientation) {
      // if (orientation === 1) {
      // cb(imgUrl);
      // } else {
      resetOrientation(imgUrl, orientation, function(resetBase64Image) {
        cb(resetBase64Image);
      });
      // }
    });
  }
};

export default takePhoto;
