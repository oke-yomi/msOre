- [Project Demo Link](https://ms-ore.vercel.app/recipes)

### Project Brief

- [x] User can lookup any recipe
- [x] Ensure there's a calorie count
- [x] Add Cost that shows the Price of the recipe and have a pop-up that shows the USD equivalent
- [ ] Dedicated page for restaurants using Location
##### Side notes
- [x] Add Animation
- [x] Card styling
- [x] Grid styling
- [x] Purple Color

###### ***Reason for the not dedicated page for restaurants***
- The APIs I saw online for some reason were not having restaurants and the ones that did were not free. I also wanted to use the google Place APi but I have had card issues for a while and ygoogle would not provide you an api key if you don’t have a card attached.
- To solve this, I figured since I had done a data fetch using react-query for the recipes to show my use of working with APIs, I decided to create a data and just populate the page.
- However, I ensured the website still requests for your location which is supposed to be the point, using your location to fetch the restaurants

### Technologies Used

- [Nextjs 13](https://nextjs.org/): core javascript framework
- [Tailwind CSS](https://tailwindcss.com/): a utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/): an animation library for React
- [Edamam](https://www.edamam.com/): aa Nutritional API for the recipes


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


