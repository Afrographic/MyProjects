
--- FULLY CUSTOMISABLE SWIPER PLUGINS ---

follow this instructions to learn how to set up the plugins

it's pretty easy!

STEP 1 - open the swiper_demo the see the basic html structure of the plugins.

if you change that structure things may stop working but you can still style it however you want

STEP 2 - include all the neccessary files into your project-------------------
1 - the css file '(your_page_location/Swiper_Plugins/Styles/swiper_style.css"
2 - the main javascript file ''(your_page_location/Swiper_Plugins/Styles/swiper.js"
3 - the initialisation file "(your_page_location/Swiper_Plugins/Styles/swiper.init.js"

STEP 3 - open the swiper.init.js file ----------------------
here you have 07 properties, some are compulsory and others are optionnal

1- the 'container' property (compulsory)
here you specify where your data will be displayed

2-data  (compulsory)
this property stores all the data in an array

3-display_mode  (compulsory)
this property take two values: images and text, if you set it to images , the data must contains the path of every images that you want to display and if it set to text, you will insert all your text into the array

4 - loop (optional)
when set to true this property allow the swiper to start again when all the data have been shown

5-autoplay(optional)
this property, when set to true swipe automatically after a certain time, that time must be set in the property below

6-delay(compulsory if autoplay is set to true)
this property defines in how much time the swiper will move to the second element

7 - show_controls (optional)
this property allow you to show or hide the next and preview button, it is recommeded to set it to true when the loop property is active.

for any issue please contact me at
afrographics.dev@gmail.com