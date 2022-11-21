# Pokemon TeamFight

A website mini-game using Next.js along with PokeAPI for fetching Pokémon data

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Hot refresh is enabled.
Every page will be static rendered at reload.

---

To run the production server you must build the Next.js project:

```bash
npm run build
# or
yarn build
```

Afterwards you can start the server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Game rules

You must create a team of six pokemons, and the team must have a name as well.

After that, the route "TEAM FIGHTING" will be enabled on the homepage.

By clicking that, you will be transported to the `/team/fight` route, showing the summary of the two teams.

The button "THE BATTLE BEGINS" will start a Pokemon battle between your team and a randomly generated team, for the other side.

The team with more base experience will win the match.

## Learn More

To learn more about this project, take a look at the following resources:

- [Figma Draft](https://www.figma.com/file/KqeyKRho3VP7yG6OXProON/Pokemon-Teamfight---Next.js?node-id=6%3A340&t=tQMEa62DopFgfc2u-1) - UI/UX Design
- [Next.js](https://nextjs.org/) - learn about Next.js.
- [Vercel](https://vercel.com/) - explore Vercel for serverless deployments.
