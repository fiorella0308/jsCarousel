Plugin's development source folder.

This folder will include the javascript for the plugin, in a developement version.

The file name will be the name of the plugin and the version. The version is based in 3 numbers:

a: The version name. Starts as 1, increments with big functionalities.
b: The subversion name. Starts as 1, increments with small functionalities.
c: The revision name. Starts as 1, increments with bug fixes.

The directory base structure is:

./
	./jsPlugin-a.b.c.js

Changelog:
----------
	1.1.1:
		- Changed the image costruction, so the a element doesn't loses their 
		attributes

	1.1.0:
		- Added onLoad callback
		- Added addCallback and removeCallback methods
		- Init method waits for the images to be loaded