# EXIF-removal

Tool to remove EXIf data from media uploads.

# To Do:

## Figure out what filetypes we need to deal with

Check the uploads folder of decrimusa to see what file types we are using. Check all file types for sensitive EXIF data.

- jpg - stores exif data and is commonly used in cameras.
- png - can technically store EXIF data but isn't common. When you convert from jpeg to png the info is lost. (Possible solution)
- pdf ???
- heic ???

Sensitive EXIF data fields:

- Make
- Camera Model Name
- Software
- GPS Latitude Ref
- GPS Longitude Ref
- GPS Latitude
- GPS Longitude
- GPS Position

Some EXIF data is pretty vital. For example `Orientation` data is often used to make sure images display correctly. This could cause problems on the site especially for images already uploaded.

## What version of jQuery is decrimusa.org using - DONE

The site uses version 3.5.1 of jQuery.

```
$().jquery;
3.5.1
```

## Cause File Uploads to fail if EXIF data is detected

We want to check for EXIF data using JS or jQuery and notify the user that there is private metadata that needs removal.

[This fiddle](https://codepen.io/romswellparian/pen/VLWBjz) shows the EXIF data on a image client side using jQuery.

## View EXIF Data

On Command Line you can use `exiftool` to view EXIF data. Check the [view-exif-command-line folder](./view-exif-command-line).

Using jQuery you can view and check for EXIF data `view-exif-data-jQuery` - [This fiddle](https://codepen.io/romswellparian/pen/VLWBjz) shows the EXIF data on a jpeg image client side. [View updated version of this script](./view-exif-data-jQuery)

## Delete EXIF Data Client Side

Option 1 `delete-exif-data-with-download` - [This fiddle](https://jsfiddle.net/mowglisanu/frhwm2xe/3/) shows how to prune exif data using JS client side and provides a exif free image to download.

Option 2 `delete-exif-data-modifying-blob` - [Exif.js library](https://github.com/exif-js/exif-js) - Explore this library for EXIF removal options. [This stack overflow answer](https://stackoverflow.com/questions/10341685/html-javascript-access-exif-data-before-file-upload?noredirect=1&lq=1) seems promising.

# Implement JS EXIF removal solution within WordPress

TODO

# Delete EXIF data Server side

Find a EXIF cleaning tool to run server side within the WP uploads folder.

TODO
