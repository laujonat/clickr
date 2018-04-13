# README


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
# Table of Contents

- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Technologies)
- [Site Breakdown](#Site Breakdown)
- [Future Directions](#future-directions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Introduction

## Demo
<center>
[Live site!](clickr-photo.herokuapp.com)

<center><img src="https://i.imgur.com/D9pIkAs.jpg" height="400"></center>

Welcome to Clickr (pronounced "clicker"), a [Flickr](flickr.com) photo sharing clone for photography enthusiasts.  
This application was created using Ruby on Rails alongside a PostgreSQL relational database on the backend, following
a React.js/Redux architecture on the front end.  

Clickr is a project created over the course of an aggressive two week timeframe . The initial project completion date for this project was April 13, 2018.  
There are improvements that have been identified in various areas of the project on both the front end and server side
that will be added into the code base over time.
</center>

# Features
+ User accounts and authorization
+ User activity feed
+ Upload, modify, and delete their own photos
+ Create, edit, and delete photo album content
+ Members have access to create tags and comment on other user content



# Technologies
+ React.js/Redux architecture
+ Ruby on Rails/PostgreSQL
+ SCSS/CSS
+ Amazon S3

# Site Breakdown
### Photos ###
Photos are the main component of the clickr application.  Members will have access to the clickr activity feed where they can view the most recent uploads by users on the clickr site. Furthermore, all photos are public access at this time, and can be accessed through a user's profile page.

### User Profiles ###

Member profiles are unique and will contain a collection of a user's current library of photos. Members will have full read-access-delete permissions of their own profiles.  From a user profile, a user can manage their photostream as well as their current list of photo albums.

<center><img src="https://i.imgur.com/Wzv9SJ9.jpg" height="400"></center>

### Photo Feed ###

A photo feed can be access upon valid sign in credentials or the creation of a new user profile.  Users will see a list of most recent photo uploads from the All Activity tab on their main dashboard page.

<center><img src="https://i.imgur.com/ngGNTDb.jpg" height="400""></center>


### Uploads ###

Through the main user dashboard navigation, a user can navigate to an image upload form. Images are able to be previewed before uploading and can be seed immediately on a user's PhotoStream tab on their profile page. An image upload will also become viewable by other members on the clickr side on the photo feed on a user's activity feed.

<center><img src="https://i.imgur.com/iYA05Ut.jpg" height="450"></center>

### Photo Rights ###

A user will not be given access permissions to another user's photos. A user only has the ability to edit and delete their own photo, and read-only permissions on other members' photos.


##Albums

<center><img src="https://i.imgur.com/oqMqnjJ.png" height="400"></center>

### Creating an Album ###

From a user's profile, a user will have the option to create a new album through their albums tab on their main profile page. Users will be redirected to an album creation lab where they can select which photos, which must currently exist in their current photo library, to be added into an album. Additionally an album cover photo can be added as well.  If no cover photo is chosen, a default photo will be assigned to the album.

### Editing an album ###

A user will be able to modify an existing photo album.  From the albums tab, a user can select an existing photo album.  From the edit link on an album page (which will only be visible if the user owns the current album), a user will be redirected to an album edit lab. From here the user can add, or remove photos from the existing album. Additionally, a user has the ability to remove an album and all its contents from an album show page.

## Comments
### Commenting Privileges ###

Members will have the ability to comment on their own and other members' photos. A public viewer will have view-only rights comments currently placed on a photo, but will not have the ability to post.  Users will have the ability to edit and remove comments they have created, but will have read-only rights on other members' comments.
<center><img src="https://i.imgur.com/GuYrQkJ.jpg" height="400"></center>

## Tags
### Tag Privileges ###

Members will have the ability to add tags to their own and other members' photos. A user who owns the photos has the rights to remove any or all tags.  Members will have the ability to remove their own created tags on others' photos, but have read-only rights to tags authored by other members.
### Creating a Tag ###

From a photo show page, users can click the 'Add Tag' link in the tags section.  On click, an input field will be presented to the user where they can add tags to a photo as long as they are unique in the list of tags currently present on a photo.

## Future Directions ##
+ Code can be refactored to more DRY. Due to the time constraints, similar React components were created for various cases of state change. Payloads can be implemented to handle this situation more effectively.
+ A search bar allowing users to search by tags, photos, or album name.
+ Image optimization can be implemented to improve loading times.  Large image sizes affect site performance.
