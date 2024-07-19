# leaflet-challenge

## Here comes the BOOM
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

To accomplish this, I chose a dataset from the USGS site to visualize, and used the URL of this JSON to pull in the data for the visualization. Using Leaflet, I created a map that plots all the earthquakes from my dataset based on their longitude and latitude. My data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color. I included popups that provide additional information about the earthquake when its associated marker is clicked, as well as created a legend that will provide context for my map data.

## Credits
Yash Shah - Instructor

Danny Furman - TA

Paddington Chiguvare - AskBCS

Chat GPT for troubleshooting
