package com.knightrunner;

import javafx.animation.AnimationTimer;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.control.Button;
import javafx.scene.input.KeyCode;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.TextAlignment;
import javafx.stage.Stage;

/**
 * Main JavaFX application for the Knight Runner endless runner game
 */
public class KnightRunnerApp extends Application {
    
    private Canvas canvas;
    private GraphicsContext gc;
    private Knight knight;
    private GameWorld gameWorld;
    private GameManager gameManager;
    private InputHandler inputHandler;
    private AnimationTimer gameLoop;
    
    @Override
    public void start(Stage primaryStage) {
        // Initialize game components
        canvas = new Canvas(Constants.WINDOW_WIDTH, Constants.WINDOW_HEIGHT);
        gc = canvas.getGraphicsContext2D();
        
        knight = new Knight();
        gameWorld = new GameWorld();
        gameManager = new GameManager();
        
        // Setup scene and input
        StackPane root = new StackPane();
        root.getChildren().add(canvas);
        Scene scene = new Scene(root, Constants.WINDOW_WIDTH, Constants.WINDOW_HEIGHT);
        inputHandler = new InputHandler(scene);
        
        // Handle pause with P key
        scene.setOnKeyPressed(e -> {
            if (e.getCode() == KeyCode.P) {
                gameManager.togglePause();
            }
            if (e.getCode() == KeyCode.R && gameManager.isGameOver()) {
                resetGame();
            }
        });
        
        // Setup window
        primaryStage.setTitle("Knight Runner - Endless Adventure");
        primaryStage.setScene(scene);
        primaryStage.setResizable(false);
        primaryStage.show();
        
        // Start game loop
        startGameLoop();
    }
    
    /**
     * Initializes and starts the main game loop
     */
    private void startGameLoop() {
        gameLoop = new AnimationTimer() {
            private long lastUpdate = 0;
            
            @Override
            public void handle(long now) {
                if (lastUpdate == 0) {
                    lastUpdate = now;
                    return;
                }
                
                long deltaTime = now - lastUpdate;
                
                // Cap frame time to prevent huge jumps
                if (deltaTime > Constants.ANIMATION_DURATION_MS * 1_000_000 * 2) {
                    deltaTime = Constants.ANIMATION_DURATION_MS * 1_000_000 * 2;
                }
                
                // Update at ~60 FPS
                if (deltaTime >= Constants.ANIMATION_DURATION_MS * 1_000_000) {
                    update();
                    render();
                    lastUpdate = now;
                }
            }
        };
        
        gameLoop.start();
    }
    
    /**
     * Updates all game entities
     */
    private void update() {
        if (gameManager.isGamePaused() || gameManager.isGameOver()) {
            return;
        }
        
        // Process input
        inputHandler.processInput(knight);
        
        // Update game manager
        gameManager.update();
        
        // Update knight
        knight.update();
        
        // Update world
        gameWorld.update(gameManager.getCurrentScrollSpeed());
        
        // Check for obstacle passing (scoring)
        for (Obstacle obstacle : gameWorld.getObstacles()) {
            if (!obstacle.isPassed() && 
                CollisionDetector.hasPassedObstacle(knight, obstacle)) {
                obstacle.markPassed();
                gameManager.obstaclePassed();
            }
        }
        
        // Process collisions
        CollisionDetector.processCollisions(
            knight, 
            gameWorld.getObstacles(), 
            gameWorld.getTotems(), 
            gameManager
        );
    }
    
    /**
     * Renders all game entities
     */
    private void render() {
        // Clear canvas
        gc.setFill(Color.LIGHTBLUE);
        gc.fillRect(0, 0, Constants.WINDOW_WIDTH, Constants.WINDOW_HEIGHT);
        
        // Render clouds (background decoration)
        renderBackground();
        
        // Render world (ground, obstacles, totems)
        gameWorld.render(gc);
        
        // Render knight
        knight.render(gc);
        
        // Render UI
        renderUI();
        
        // Render game over screen
        if (gameManager.isGameOver()) {
            renderGameOverScreen();
        }
        
        // Render pause screen
        if (gameManager.isGamePaused()) {
            renderPauseScreen();
        }
    }
    
    /**
     * Renders background elements
     */
    private void renderBackground() {
        // Simple clouds
        gc.setFill(Color.WHITE);
        gc.setGlobalAlpha(0.7);
        for (int i = 0; i < 3; i++) {
            double x = 100 + i * 250;
            double y = 50 + (i % 2) * 30;
            gc.fillOval(x, y, 60, 40);
            gc.fillOval(x + 30, y, 60, 40);
            gc.fillOval(x + 60, y, 60, 40);
        }
        gc.setGlobalAlpha(1.0);
    }
    
    /**
     * Renders UI elements (score, lives, etc.)
     */
    private void renderUI() {
        gc.setFill(Color.BLACK);
        gc.setFont(Font.font("Arial", 20));
        gc.setTextAlign(TextAlignment.LEFT);
        
        // Score
        gc.fillText("Score: " + gameManager.getScore(), 10, 30);
        
        // Lives
        gc.fillText("Lives: " + knight.getLives(), 10, 60);
        
        // Totems collected
        gc.fillText("Totems: " + gameManager.getTotemsCollected(), 10, 90);
        
        // Speed indicator
        gc.setFont(Font.font("Arial", 14));
        gc.fillText(String.format("Speed: %.1f", gameManager.getCurrentScrollSpeed()), 
                   10, Constants.WINDOW_HEIGHT - 20);
        
        // Instructions
        gc.setTextAlign(TextAlignment.RIGHT);
        gc.fillText("SPACE/UP: Jump | P: Pause", 
                   Constants.WINDOW_WIDTH - 10, Constants.WINDOW_HEIGHT - 20);
    }
    
    /**
     * Renders game over screen
     */
    private void renderGameOverScreen() {
        // Semi-transparent overlay
        gc.setFill(Color.rgb(0, 0, 0, 0.7));
        gc.fillRect(0, 0, Constants.WINDOW_WIDTH, Constants.WINDOW_HEIGHT);
        
        // Game over text
        gc.setFill(Color.WHITE);
        gc.setFont(Font.font("Arial", 48));
        gc.setTextAlign(TextAlignment.CENTER);
        gc.fillText("GAME OVER", Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2 - 80);
        
        // Final stats
        gc.setFont(Font.font("Arial", 24));
        gc.fillText("Final Score: " + gameManager.getScore(), 
                   Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2 - 20);
        gc.fillText("Totems Collected: " + gameManager.getTotemsCollected(), 
                   Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2 + 20);
        gc.fillText("Survival Time: " + gameManager.getSurvivalTime() + " seconds", 
                   Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2 + 60);
        
        // Restart instruction
        gc.setFont(Font.font("Arial", 18));
        gc.fillText("Press R to Restart", 
                   Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2 + 120);
    }
    
    /**
     * Renders pause screen
     */
    private void renderPauseScreen() {
        // Semi-transparent overlay
        gc.setFill(Color.rgb(0, 0, 0, 0.5));
        gc.fillRect(0, 0, Constants.WINDOW_WIDTH, Constants.WINDOW_HEIGHT);
        
        // Pause text
        gc.setFill(Color.WHITE);
        gc.setFont(Font.font("Arial", 48));
        gc.setTextAlign(TextAlignment.CENTER);
        gc.fillText("PAUSED", Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2);
        
        gc.setFont(Font.font("Arial", 18));
        gc.fillText("Press P to Resume", 
                   Constants.WINDOW_WIDTH / 2, Constants.WINDOW_HEIGHT / 2 + 50);
    }
    
    /**
     * Resets the game for a new playthrough
     */
    private void resetGame() {
        knight = new Knight();
        gameWorld.reset();
        gameManager.reset();
    }
    
    public static void main(String[] args) {
        launch(args);
    }
}

