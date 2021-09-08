# Bomberman

I loved a bomberman-like game called QQTang back in my childhood. The game has been terminated and no longer playable. Ever since working from home my team has been playing online collaboration games like Codewords, Skribbl, Tanks, etc for team bonding. This gives me the idea of recreating an office friendly version of bomberman.

[Demo](https://game-of-bombs.herokuapp.com/) working in progress

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Game Instructions:

Players can move on non-blocking tiles in the game map and place bombs on them. The bomb explodes after (X) seconds after being placed, and bursts out thick gluey syrup from the position placed to four directions, trapping any players in syrup bubbles within its burst range. Players trapped would die in (X) seconds once air is used up in the bubble. If a player moves to a tile with other players trapped, the trapped play gets rescued if they are teammates, or killed if they are opponents.

A bomb blocks the tile.

Here are different types of game modes:
- Suvival mode
- Point-based mode
- Goal-based mode
- Boss mode - in this mode all players will be placed under the same team

Game timeout: TBD

Number of teams: TBD, 3 for now 

A player can interact with the game in the following manner:
- Use up, down, left and right arrows to move to non-blocking tiles in the game map
- Press space to place a bomb which explodes after (X) seconds
- Move to a tile that has other players trapped to rescue teammates and kill opponents 
- Move the game character to tiles with special items and get buffs or tools
- View tools acquired from a bottom toolbar and how many times each tool can be used
- Press the numbers corresponding to the toolbar tool and use the tool

### Enter A Game Room

Players can:
- Create a new room from the home page
- Join an existing room from the home page
- Access an existing room with a link

### Update Options Before Game Starts

Before the game starts, players in the room can change the following settings: 
- Teams assignment
- Game map (if host allows)
- Character appearance 

### Players Requirements
- Between 2 and 15 players
- Have a keyboard
- Launches game in the browser

## Project Analysis

### Goals of the Game 
- Easy to join, no account creation needed
- Low latency
- Smooth movement

## Project Structure

TBD