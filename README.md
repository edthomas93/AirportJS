# Airport Challenge JS

```
        ______
        _\____\___
=  = ==(____MA____)
          \_____\___________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

### Completed by Marek Schmidt and Ed Thomas
#### Instructions below

## Context
I paired with a member of my cohort, [Marek Schmidt](https://github.com/Mschmidt19/), in order to complete this challenge in one afternoon. This is our third day working with JavaScript and Jasmine, and our goal was to translate our already existing Airport Challenge from Ruby into JavaScript.

## Approach
We took a driver-navigator approach to pairing using his laptop for the entirety of the project. We used TDD with Jasmine as our testing framework in order to satisfy one user story at a time. In order to use the program, we are able to use the console from Chrome's Developer Tools while on the SpecRunner page. Using the knowledge we gained from our previous Ruby experience, we were better able to encapsulate our project and test in isolation using Jasmine mocks.

## State of project and changes to be made
As of now, we only completed the user stories given to us for this translation. Our initial Airport Challenge project had additional "stretch goals" which have not been included. There are many opportunities to expand upon this project such as naming planes and airports, checking the airport of a current plane, launching specific planes (perhaps by name), and more. The main goal of this project, however, was to test our ability to quickly learn and adapt to a new language using our existing knowledge.

## How to use

#### 1. Open SpecRunner.html in a browser

#### 2. Open the console in your browser

#### 3. Set up at least one airport  
  * Optional capacity parameter can be passed
  ```
  my_airport = new Airport(10);
  ```  
  * If no parameters are passed, the capacity will default to 5


#### 4. Set up at least one plane
  ```
  my_plane = new Plane;
  ```  

#### 5. Land planes at your airport  
  * Call the land method on an airport and pass the plane as an argument
  ```
  my_airport.land(my_plane)
  ```

#### 6. Make your plane take off  
  * Call the launch method on an airport and pass a plane object by it's name in memory
  ```
  my_airport.launch(my_plane)
  ```

#### 7. To check an airport's current list of planes  
  * Call the planes method on your airport
  ```
  my_airport.planes
  ```  

#### Each time a plane attempts to either take off or land at an airport, there is a 10% chance that the weather will be too stormy to safely allow the action, and an error will be given

#### If an airport is at capacity, an error will be given when attempting to land an additional plane

## User Stories:
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport
```
```
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
```
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy
```
```
As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```
```
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```
```
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```
