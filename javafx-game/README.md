# Knight Runner - JavaFX Endless Runner Game

An endless runner game built with JavaFX where players control a knight navigating through a perpetually scrolling environment. The objective is to survive as long as possible by avoiding obstacles and collecting life-boosting totems.

## Game Features

- **Endless Scrolling**: Continuous horizontal scrolling that gradually increases in speed
- **Knight Character**: Playable knight with jumping mechanics
- **Obstacles**: Spikes and barriers that must be avoided
- **Life Totems**: Collectible items that restore health
- **Scoring System**: Points based on survival time and obstacles passed
- **Progressive Difficulty**: Game speed increases over time

## Controls

- **SPACE** or **UP Arrow**: Jump
- **P**: Pause/Resume game
- **R**: Restart game (when game over)

## Project Structure

The code is organized into functional modules:

### Core Classes

1. **`KnightRunnerApp.java`** - Main application entry point and game loop
   - Initializes JavaFX application
   - Manages game loop (AnimationTimer)
   - Handles rendering and updates
   - Manages game states (playing, paused, game over)

2. **`Constants.java`** - Game configuration and constants
   - Window dimensions
   - Game physics (gravity, speed)
   - Entity sizes and properties
   - Timing constants

### Entity Classes

3. **`Knight.java`** - Player character
   - Jumping mechanics and physics
   - Health/lives management
   - Rendering the knight sprite
   - Position and collision bounds

4. **`Obstacle.java`** - Enemy obstacles
   - Obstacle generation
   - Movement with scrolling
   - Visual representation (spikes)
   - Collision detection helpers

5. **`Totem.java`** - Collectible life items
   - Floating animation
   - Collection mechanics
   - Visual effects (glowing aura)
   - Position tracking

### System Classes

6. **`GameWorld.java`** - World management
   - Obstacle and totem spawning
   - Entity lifecycle management
   - Ground rendering
   - World reset functionality

7. **`GameManager.java`** - Game state and progression
   - Score tracking
   - Speed progression
   - Game over logic
   - Pause state management

8. **`InputHandler.java`** - Input processing
   - Keyboard event handling
   - Input state tracking
   - Control mapping

9. **`CollisionDetector.java`** - Collision system
   - AABB collision detection
   - Knight-obstacle collisions
   - Knight-totem collisions
   - Obstacle passing detection (for scoring)

## Building and Running

### Prerequisites

- Java JDK 11 or higher
- JavaFX SDK (included in JDK 11+, or separate for older versions)

### Compilation

```bash
cd javafx-game
javac -d bin --module-path /path/to/javafx/lib --add-modules javafx.controls src/com/knightrunner/*.java
```

### Running

```bash
java --module-path /path/to/javafx/lib --add-modules javafx.controls -cp bin com.knightrunner.KnightRunnerApp
```

### Using Maven (if you set up a pom.xml)

For easier dependency management, you can set up a Maven project with JavaFX dependencies.

## Game Mechanics

### Physics
- **Gravity**: Applied continuously when knight is airborne
- **Jumping**: Fixed jump force applied when grounded
- **Scrolling**: Background and obstacles move left at increasing speed

### Scoring
- **Time-based**: 1 point per 100ms survived
- **Obstacle Bonus**: +10 points for each obstacle passed
- **Totem Bonus**: +25 points for each totem collected

### Difficulty Progression
- Scroll speed gradually increases up to a maximum
- Obstacles spawn at consistent intervals
- Totems spawn less frequently than obstacles

### Health System
- Start with 3 lives
- Lose 1 life per obstacle collision
- Gain 1 life per totem collected (max 3)

## Code Organization Benefits

This modular structure provides:

1. **Separation of Concerns**: Each class has a single responsibility
2. **Maintainability**: Easy to modify individual game elements
3. **Testability**: Components can be tested independently
4. **Extensibility**: New features can be added without major refactoring
5. **Readability**: Clear code organization makes it easy to understand

## Future Enhancement Ideas

- Multiple character types
- Power-ups (speed boost, shield, etc.)
- Different obstacle types
- Sound effects and background music
- High score persistence
- Animation improvements
- Particle effects
- Multiple difficulty levels

## License

This is a demonstration project for learning JavaFX game development.

