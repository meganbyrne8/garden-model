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

<br>

## Overview

_**Garden Modeling** is a full-stack web app that uses Ruby on Rails and React in order to manage gardens for those who want to plant & manage the garden themselves. From mulching to sowing and planting, this application will allow users to stay organized and allow users to keep all relevant information in one place instead of searching for each plant's needs individually._

<br>

## MVP

_The **Garden Modeling** MVP will allow users to create accounts, save items to their accounts, and edit, update, and add notes to their own Garden Nursery planners. It will also allow other users to see the plants we host information for on the site._

<br>

### Goals

- _Create a full-stack app that takes in user permissions in order to access the app's main features._
- _Apply CRUD that can display, modify, delete, or add new gardens depending on user access level & implement AUTH._
- _Write clean, scalable code, with reusable components._


<br>

### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _To build out and create a front end for this app._ |
|   React Router   | _To be able to create routes and leverage already created apps built by Rails._ |
|   Ruby on Rails  | _To create server (API, routes, controllers, models) via Rails._ |
|   Burger React  | _Creates animated hamburger menu for mobile breakpoints._ |
|   SocialMediaIconsReact  | _Imports social media icons as React components to the footer._ |

<br>

### Client (Front End)

#### Wireframes

> All Wireframes can be seen here: https://www.figma.com/file/V1q6klSBamEaxQRIYoRZO0/Garden-Modeling

![Home](https://user-images.githubusercontent.com/52892348/83982348-27b6cf00-a8f4-11ea-961d-59142dddb0f2.png)

![Garden Modelingnurserydesk](https://user-images.githubusercontent.com/52892348/84142822-7d3dc980-aa23-11ea-9247-7f9c2844e3d6.png)

![NurseryItem](https://user-images.githubusercontent.com/52892348/83982363-4b7a1500-a8f4-11ea-9075-b2ba38d06727.png)

![Add/Edit](https://user-images.githubusercontent.com/52892348/84149594-b7f92f00-aa2e-11ea-9ad3-e55a4810a0a0.png)

![About](https://user-images.githubusercontent.com/52892348/83982409-77959600-a8f4-11ea-8c1a-6d21d0a9b9bf.png)

![Sign In](https://user-images.githubusercontent.com/52892348/83982417-8b40fc80-a8f4-11ea-9d98-b281d4d0317c.png)

![Sign Up](https://user-images.githubusercontent.com/52892348/83982420-8e3bed00-a8f4-11ea-9577-7249f8068b3c.png)

![Nursery Item Tablet](https://user-images.githubusercontent.com/52892348/83982431-a7dd3480-a8f4-11ea-9210-3b2379bb7d1a.png)

![Add/Edit Tablet](https://user-images.githubusercontent.com/52892348/83982435-aca1e880-a8f4-11ea-9fc7-f7b0897b1187.png)

![Home Mobile](https://user-images.githubusercontent.com/52892348/83982439-b297c980-a8f4-11ea-9ea6-ee5596cdcf73.png) ![Add/Edit Mobile](https://user-images.githubusercontent.com/52892348/83982443-b62b5080-a8f4-11ea-9e5d-7a46d8f6b0a3.png)

#### Component Tree

![CompTreeGarden](https://user-images.githubusercontent.com/52892348/84143618-e2de8580-aa24-11ea-8da8-43444e950d8a.png)


#### Component Hierarchy

``` structure
src
|__ components/
      |__ shared/
        |__ Layout.jsx
        |__ Header.jsx
        |__ Footer.jsx
        |__ AccountBubble.jsx
      |__ nursery/
        |__ Nursery.jsx
        |__ NurseryCard.jsx
        |__ NurseryIndex.jsx
      |__ userAuth/
        |__ SignUp.jsx
        |__ SignIn.jsx
      |__ userAccount/
        |__ MyGarden.jsx
        |__ AddGarden.jsx
        |__ EditGarden.jsx
        |__ PlantTable.jsx
      |__ Home.jsx
      |__ HomeInfo.jsx
      |__ About.jsx


```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Layout   | functional |   n   |   y   | _The layout component will inherit all shared elements and export those elements to all pages, essentially wrapping the components with a shared layout in mind._               |
|    Header   | functional |   y   |   y   | _The header will have all relevent navigation links._       |
|    Footer   |   class    |   n   |   n   | _The footer will have all relevant attribution and media links._      |
|     Home    | class |   y   |   y   | _The cards will render the post info via props._                 |
|    Nursery  | class |   y   |   n   | _The Nursery component will act as a home for all Nursery items that are passed in as cards from the API._ |
|    NurseryCard   | class |   y   |   y   | _The cards will render the post info via props._ |
|    NurseryIndex    | class |   y   |   y   | _The nursery index will have all items in the database listed alphabetically so that users can browse through items._ |
|    MyGarden    | class |   y   |   y   | _This component will allow users to view their saved items._ |
|    AddGarden    | class |   y   |   y   | _This component will allow users to add a new garden._ |
|    EditGarden   | class |   y   |   y   | _This component will allow users to add new items to their garden, change the name of their garden, or add any relevant notes._ |
|    AccountBubble   | class |   n   |   n   | _This component will display a greeting or indication to users who do have accounts and will direct them to navigate into their own accounts._       |
|    SignUp   | class |   y   |   y   | _This component will allow the user to sign up._ |
|    SignIn   | class|   y   |   y   | _This component will allow the user to sign in._ |
|    HamburgerMenu.jsx   | class |   y   |   y   | _This componenet will host the react library code for an animated hamburger menu(comes with citations)._ |


#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header    |    L     |     3 hrs      |     4hrs    |    4hrs    |
| Footer |    L     |     3 hrs      |     2hrs     |     2hrs     |
| Layout |    H     |     2 hrs      |     1hr     |     1hr     |
| Home |    H     |     4 hrs      |     5 hrs     |     5hrs     |
| Nursery |    M     |     6 hrs      |     7hrs hrs     |     7hrs    |
| NurseryCard |    H     |     5 hrs      |     1.5 hrs     |     1.5hrs     |
| NurseryIndex |    M     |     4 hrs      |     3hrs hrs     |     3hrs     |
| Styling for Home Elements |    L     |     8 hrs      |     6hrs     |     6hrs     |
| Create CRUD Actions for UserGarden |    H     |     6 hrs      |     4 hrs     |     4hrs     |
| Auth (Sign In, Up, Out)   |    H     |     4 hrs      |     6 hrs     |    6hrs    |
| Account Bubble   |    M     |     1 hr      |     1 hr     |    1hr    |
| MyGarden |    H     |     5 hrs      |     6hrs     |     6hrs     |
| AddGarden |    H     |     5 hrs      |     4hrs     |     4hrs     |
| EditGarden |    H     |     6 hrs      |     7hrs     |     7hrs     |
| Styling for CRUD Elements |    L     |     6 hrs      |     10 hrs     |     10hrs     |
| TOTAL               |          |     TK     |     TK      |     TK     |


<br>

### Server (Back End)

#### ERD Model

![Garden_Modeling_ERD (2)](https://user-images.githubusercontent.com/52892348/84173011-afaeed00-aa4a-11ea-811c-3773f9ac2b91.png)

<br>

***

## Post-MVP
> - Add error handling for client/services.
> - Add in tests for all future client code to pass.
> - Create an image drop so that users can also visually plan out garden beds using a grid system, grouping plants together by planting, frost and soil type. 
> - Incorp. external weather API to update all relevant information and add new plants to the API. 
> - Incorp. alerts for users (to alert users when they should water, look out for frosts or unexpected weather).
> - Add a search and sort feature to allow users to group and search more easily. 
> - Add in soil types, tags for plants that share characteristics or nest well together. 


***

