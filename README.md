# Garden Modeling

## Table of Contents

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Garden Modeling** is a full-stack web app that uses Rails and React in order to create a full CRUD app to manage gardens for those who want to plant them. From mulching to sowing and planting, this application will hopefully allow users to stay organized and remove complexity that comes with planting each individual seed or bulb, and allows users to keep all relevant information in one place._


<br>

## MVP

_The **Garden Modeling** MVP will allow users to create accounts, save items to their accounts, and edit, update, and add notes to their own Garden Nursery planners._

<br>

### Goals

- _Create a working API that takes in and is able to add all relevant items._
- _Create CRUD application that can display, modify, delete, or add new plants depending on user permissions._
- _Implement AUTH that allows users to add, edit or remove items from their own "gardens"._
- _Allow users to save information to their "profiles"._

<br>

### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _To build out and create a front end for this app._ |
|   React Router   | _To be able to create routes and leverage already created apps built by Rails._ |
|    Bootstrap     | _To style this app using the Bootstrap library._ |
|   Ruby on Rails  | _To create back end server side rendering via Rails, ._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop View Nursery (Index)

![Dummy Link](url)

- Desktop My Garden

![Dummy Link](url)

- Desktop Add Garden

![Dummy Link](url)

- Desktop Edit Garden

![Dummy Link](url)

- Tablet View Nursery (Index)

![Dummy Link](url)

- Mobile View Nursery (Index)

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

``` structure
src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Layout.jsx
      |__ Header.jsx
      |__ Footer.jsx
      |__ Home.jsx
      |__ Nursery.jsx
      |__ NurseryCard.jsx
      |__ NurseryIndex.jsx
      |__ MyGarden.jsx
      |__ AddGarden.jsx
      |__ EditGarden.jsx

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Layout   | functional |   n   |   y   | _The layout component will inherit all shared elements and export those elements to all pages, essentially wrapping the components with a shared layout in mind._               |
|    Header   | functional |   n   |   n   | _The header will have all relevent navigation links._       |
|    Footer   |   class    |   n   |   n   | _The footer will have all relevant attribution and media links._      |
|     Home    | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Nursery  | functional |   y   |   n   | _The Nursery component will act as a home for all Nursery items that are passed in as cards from the API._ |
|    NurseryCard   | functional |   n   |   y   | _The cards will render the post info via props._ |
|    NurseryIndex    | functional |   n   |   y   | _The nursery index will have all items in the database listed alphabetically so that users can browse through items._ |
|    MyGarden    | functional |   y   |   y   | _This component will allow users to view their saved items._ |
|    AddGarden    | functional |   y   |   y   | _This component will allow users to add a new garden._ |
|    EditGarden   | functional |   y   |   y   | _This component will allow users to add new items to their garden, change the name of their garden, or add any relevant notes._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header    |    L     |     3 hrs      |     TK hrs     |    TK    |
| Footer |    L     |     3 hrs      |     TK hrs     |     TK     |
| Layout |    H     |     2 hrs      |     TK hrs     |     TK     |
| Styling for Layout |    L     |     3 hrs      |     TK hrs     |     TK     |
| Home |    H     |     4 hrs      |     TK hrs     |     TK     |
| Nursery |    M     |     6 hrs      |     TK hrs     |     TK     |
| NurseryCard |    H     |     5 hrs      |     TK hrs     |     TK     |
| NurseryIndex |    M     |     4 hrs      |     TK hrs     |     TK     |
| Styling for Home Elements |    L     |     4 hrs      |     TK hrs     |     TK     |
| Create CRUD Actions for UserGarden |    H     |     8 hrs      |     TK hrs     |     TK     |
| MyGarden |    H     |     5 hrs      |     TK hrs     |     TK     |
| AddGarden |    H     |     5 hrs      |     TK hrs     |     TK     |
| EditGarden |    H     |     6 hrs      |     TK hrs     |     TK     |
| Styling for CRUD Elements |    L     |     10 hrs      |     TK hrs     |     TK     |
| TOTAL               |          |     TK     |     TK      |     TK     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

<br>

***

## Post-MVP
> Incorp. external weather API to give users a reference for when the last frost of the season is. 
> Incorp. alerts for users (to alert users when they should water, look out for frosts or unexpected weather).

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
