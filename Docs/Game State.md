Game State

Player State: 
```
{
    {Player 1, X1, Y1}
    {Player 2, X2, Y2},
    {Player 3, X3, Y3},
    ...
}
```


Board State: 
```
[
    [Tile Stat1, Tile Stat2, Tile Stat3...],
    [...],
]
```

Tile Stat:
```
{
    isBlocked: bool,      // or enum for blocked type?
    isDestructible: bool, // is is needed if using enum?
    blockedBy?: player id, // indicates whose bomb it is?
}
```

At each epoch, request is posted to server with the current location and action of the player, and gets response back for board status?

key down - start
key hold - start + current time * speed?
key up

Init player state:
- start position

Player action:
- Movement
- Place bomb / use tool
