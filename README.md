# Food App

## List of Contents

- Descritpion
- Input
- Processing
- Output
- Link

> **Description:** This food app mainly tells about rating of different types of food.

> **Input:** User has to click on either of the food type according to his/her wish

> **Output:** User will get to know which one dish is best in this menu.

> **Processing:**
>
> > - User has to click the type of food he recommended.
> > - When a user click on dish item `foodClickHandler` is called which take type as argument and then gets dishes recommended by app from the database, this function uses `useState` function to update dishes recommendation to user.
> > - Function `foodMenu` using passed argument updates list of dishes recommended by menu, for that it uses `useState` and map.
> > - In this app `ReactJS` is used, which handles everything behind the scenes and make work easier.

<br>
> **Link:** [Food app](codesandbox.io/s/github/arpit-dotcom)
