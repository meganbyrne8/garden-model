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

- _Create a full-stack app that takes in user permissions in order to access the app's main features._
- _Apply CRUD that can display, modify, delete, or add new gardens/plants depending on user access level & implement AUTH._
- _Write clean, scalable code, with reusable components._


<br>

### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _To build out and create a front end for this app._ |
|   React Router   | _To be able to create routes and leverage already created apps built by Rails._ |
|   Ruby on Rails  | _To create server (API, routes, controllers, models) via Rails._ |

<br>

### Client (Front End)

#### Wireframes

> All Wireframes can be seen here: https://www.figma.com/file/V1q6klSBamEaxQRIYoRZO0/Garden-Modeling

![Home](https://user-images.githubusercontent.com/52892348/83982348-27b6cf00-a8f4-11ea-961d-59142dddb0f2.png)

![Nursery - Signed In](https://user-images.githubusercontent.com/52892348/83984272-52a81f80-a902-11ea-8b34-c28ce2572afb.png)

![NurseryItem](https://user-images.githubusercontent.com/52892348/83982363-4b7a1500-a8f4-11ea-9075-b2ba38d06727.png)

![Add/Edit](https://user-images.githubusercontent.com/52892348/83982393-6a78a700-a8f4-11ea-9406-7a186639ba5b.png)

![About](https://user-images.githubusercontent.com/52892348/83982409-77959600-a8f4-11ea-8c1a-6d21d0a9b9bf.png)

![Sign In](https://user-images.githubusercontent.com/52892348/83982417-8b40fc80-a8f4-11ea-9d98-b281d4d0317c.png)

![Sign Up](https://user-images.githubusercontent.com/52892348/83982420-8e3bed00-a8f4-11ea-9577-7249f8068b3c.png)

![Nursery Item Tablet](https://user-images.githubusercontent.com/52892348/83982431-a7dd3480-a8f4-11ea-9210-3b2379bb7d1a.png)

![Add/Edit Tablet](https://user-images.githubusercontent.com/52892348/83982435-aca1e880-a8f4-11ea-9fc7-f7b0897b1187.png)

![Home Mobile](https://user-images.githubusercontent.com/52892348/83982439-b297c980-a8f4-11ea-9ea6-ee5596cdcf73.png) ![Add/Edit Mobile](https://user-images.githubusercontent.com/52892348/83982443-b62b5080-a8f4-11ea-9e5d-7a46d8f6b0a3.png)

#### Component Tree

![CompTreeGarden](https://user-images.githubusercontent.com/52892348/83984263-48862100-a902-11ea-89d0-c42e8d0aebb5.png)


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
      |__ AccountBubble.jsx
      |__ Home.jsx
      |__ Nursery.jsx
      |__ NurseryCard.jsx
      |__ NurseryIndex.jsx
      |__ SignUp.jsx
      |__ SignIn.jsx
      |__ SignOut.jsx
      |__ MyGarden.jsx
      |__ AddGarden.jsx
      |__ EditGarden.jsx
      |__ AddPlant.jsx
      |__ EditPlant.jsx

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
|    SignUp   | functional |   y   |   n   | _This component will allow the user to sign up._ |
|    SignIn   | functional |   y   |   n   | _This component will allow the user to sign in._ |
|    SignOut   | functional |   y   |   n   | _This componenet will allow the user to sign out._ |


#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header    |    L     |     3 hrs      |     TK hrs     |    TK    |
| Footer |    L     |     3 hrs      |     TK hrs     |     TK     |
| Layout |    H     |     2 hrs      |     TK hrs     |     TK     |
| Styling for Layout |    L     |     4 hrs      |     TK hrs     |     TK     |
| Home |    H     |     4 hrs      |     TK hrs     |     TK     |
| Nursery |    M     |     6 hrs      |     TK hrs     |     TK     |
| NurseryCard |    H     |     5 hrs      |     TK hrs     |     TK     |
| NurseryIndex |    M     |     4 hrs      |     TK hrs     |     TK     |
| Styling for Home Elements |    L     |     10 hrs      |     TK hrs     |     TK     |
| Create CRUD Actions for UserGarden |    H     |     6 hrs      |     TK hrs     |     TK     |
| MyGarden |    H     |     5 hrs      |     TK hrs     |     TK     |
| AddGarden |    H     |     5 hrs      |     TK hrs     |     TK     |
| EditGarden |    H     |     6 hrs      |     TK hrs     |     TK     |
| Styling for CRUD Elements |    L     |     10 hrs      |     TK hrs     |     TK     |
| TOTAL               |          |     TK     |     TK      |     TK     |


<br>

### Server (Back End)

#### ERD Model

![Garden_Modeling_ERD](https://user-images.githubusercontent.com/52892348/83982661-6e0d2d80-a8f6-11ea-925b-bcefe8d75a92.png)

<br>

***

## Post-MVP
> - Create an image drop so that users can also visually plan out garden beds using a grid system, grouping plants together by planting, frost and soil type. 
> - Incorp. external weather API to update all relevant information and add new plants to the API. 
> - Incorp. alerts for users (to alert users when they should water, look out for frosts or unexpected weather).

***

## Code Showcase

> TK

## Code Issues & Resolutions

> TK
