package com.knightrunner;

/**
 * Manages game state, score, and game progression
 */
public class GameManager {
    private int score;
    private int totemsCollected;
    private double currentScrollSpeed;
    private long gameStartTime;
    private boolean gameOver;
    private boolean gamePaused;
    
    public GameManager() {
        this.score = 0;
        this.totemsCollected = 0;
        this.currentScrollSpeed = Constants.SCROLL_SPEED;
        this.gameStartTime = System.currentTimeMillis();
        this.gameOver = false;
        this.gamePaused = false;
    }
    
    /**
     * Updates game manager state (speed increases over time)
     */
    public void update() {
        if (!gameOver && !gamePaused) {
            // Gradually increase scroll speed
            currentScrollSpeed = Math.min(
                currentScrollSpeed + Constants.SPEED_INCREASE_RATE,
                Constants.MAX_SCROLL_SPEED
            );
            
            // Update score based on survival time
            long currentTime = System.currentTimeMillis();
            score = (int) ((currentTime - gameStartTime) / 100);
        }
    }
    
    /**
     * Increments score when obstacle is passed
     */
    public void obstaclePassed() {
        if (!gameOver) {
            score += 10;
        }
    }
    
    /**
     * Called when totem is collected
     */
    public void collectTotem() {
        totemsCollected++;
        score += 25;
    }
    
    /**
     * Ends the game
     */
    public void gameOver() {
        gameOver = true;
    }
    
    /**
     * Resets the game state
     */
    public void reset() {
        this.score = 0;
        this.totemsCollected = 0;
        this.currentScrollSpeed = Constants.SCROLL_SPEED;
        this.gameStartTime = System.currentTimeMillis();
        this.gameOver = false;
        this.gamePaused = false;
    }
    
    /**
     * Toggles pause state
     */
    public void togglePause() {
        if (!gameOver) {
            gamePaused = !gamePaused;
        }
    }
    
    // Getters
    public int getScore() { return score; }
    public int getTotemsCollected() { return totemsCollected; }
    public double getCurrentScrollSpeed() { return currentScrollSpeed; }
    public boolean isGameOver() { return gameOver; }
    public boolean isGamePaused() { return gamePaused; }
    public long getSurvivalTime() {
        return (System.currentTimeMillis() - gameStartTime) / 1000;
    }
}

