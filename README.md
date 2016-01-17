# cityofbaltimore
A  Semantic Web Project

1. Introduction:

 A detailed crime analysis of Baltimore city can occur at various levels, including tactical, operational, and strategic. We are studying crime reports, arrests reports, and police calls for service to identify emerging patterns, series, and trends as quickly as possible. We analyze these phenomena for all relevant factors, predict future occurrences, and issue reports, and alerts to their agencies.

 Rdf123 is used to convert the csv data to RDF raw data.

 Apache-Jena-Fuseki-2.3.0 is used to host the Datasets.

 JavaScript, AJAX, HTML, CSS, jQuery, Google Visualization API and Bootstrap are used to provide the end results to our webpage.

 Google maps, Bar chart, Column chart are the Google Visualization API’s used to display the results.

 Google maps depict the entire Baltimore city with the red markers displaying what kind of crime it is and blue markers depicting the CCTV location with their name.

 Clicking at red markers in the google maps displays the kind of crime and for blue markers it displays the CCTV name.

 Drop down list is used to display crime based on the neighborhood in Baltimore.

 Column chart is used to displays the neighborhood vs crime count.

 Bar chart is used to displays the unemployment rate vs neighborhood.

 All these information’s are displayed in a webpage.

2. Target Audience:

 Our project combines the crime and its related datasets and highlight the Baltimore’s crime rate which helps us in identify emerging patterns, series, and trends as quickly as possible.

 Our target audience are Baltimore police department and City residents.

 BPD will find the results helpful in predicting future occurrences, and issuing reports in crime.

 With the help of these analysis, we can even predict which of these neighborhood are safe to be a residential area.

3. Description of Data Sources:

All below datasets are taken from: https://data.baltimorecity.gov/

 Recorded Crimes by Region FY 2014:

 This dataset provides the crime code, description, crime date, geo location (with latitude and longitude) and neighborhood.

 Kinds of recorded crimes are Robbery, Rape, Prostitution, Carjacking, aggravated assault.

 Unemployment rate by Region:

 This raw RDF had various information about every neighborhood in the city. From all the information, we need only unemployment rate.

 After data formatting and data cleaning done using Google refine, we represent only the neighborhood and their unemployment rate from this dataset.

 CCTV location data:

 Provides information about the CCTV location with latitude and longitude, their names and their district.
