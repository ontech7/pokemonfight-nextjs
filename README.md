# Pokemon TeamFight

A website mini-game using Next.js along with PokeAPI for fetching Pokémon data

![Screenshots](https://i.imgur.com/Y4cwaJq.png)

## Public website

The game is available at the following url using Vercel: [Pokemon TeamFight - Vercel](https://pokemonfight-nextjs.vercel.app/home)

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

After that, the route **TEAM FIGHTING** will be enabled on the homepage.

By clicking that, you will be transported to the `/team/fight` route, showing the summary of the two teams.

The button **THE BATTLE BEGINS** will start a Pokemon battle between your team and a randomly generated team, for the other side.

The team with more base experience will win the match.

## Avilable routes

* `/` - redirect to `/home`  
* `/home` - the hub for going at `/team/create` and `/team/fight`  
* `/team` - redirect to `/home`  
* `/team/create` - page where you can create your team of six pokemons  
* `/team/fight` - page where you can let your pokemon fight against a random-generated team (available when the player team is created. A fallback to `/home` is applied)  
* `other routes` - 404 page  

## Learn More

To learn more about this project, take a look at the following resources:

- [Figma Draft](https://www.figma.com/file/KqeyKRho3VP7yG6OXProON/Pokemon-Teamfight---Next.js?node-id=6%3A340&t=tQMEa62DopFgfc2u-1) - UI/UX Design
- [Next.js](https://nextjs.org/) - learn about Next.js.
- [Vercel](https://vercel.com/) - explore Vercel for serverless deployments.
