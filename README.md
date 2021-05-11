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

## Determine what version of jQuery decrimusa.org uses - DONE

The site uses version 3.5.1 of jQuery.

```
$().jquery;
3.5.1
```

## Cause File Uploads to fail if EXIF data is detected

We want to check for EXIF data using JS or jQuery and notify the user that there is private metadata that needs removal.

[This fiddle](https://codepen.io/romswellparian/pen/VLWBjz) shows the EXIF data on a image client side using jQuery.

## Delete EXIF Data Client Side

Option 1 - [This fiddle](https://jsfiddle.net/mowglisanu/frhwm2xe/3/) shows how to prune exif data using JS client side and provides a exif free image to download.

Option 2 - jQuery [This fiddle](https://codepen.io/romswellparian/pen/VLWBjz) shows the EXIF data on a image client side.

## View exif data on command line - DONE

Using the `exiftool` command we can view any exif data easily. [Download and install tool](https://exiftool.org/).

```
sudo apt-get install exiftool
sudo apt install libimage-exiftool-perl

View the data

exiftool img/jpg1.jpg
exiftool img/jpg/1.jpg | grep "GPS Latitude"
```
