# View exif data on command line - exiftool - DONE

Using the `exiftool` command we can view any exif data easily. [Download and install tool](https://exiftool.org/).

```
sudo apt-get install exiftool
sudo apt install libimage-exiftool-perl

View the data

exiftool img/jpg1.jpg
exiftool img/jpg/1.jpg | grep "GPS Latitude"
```
