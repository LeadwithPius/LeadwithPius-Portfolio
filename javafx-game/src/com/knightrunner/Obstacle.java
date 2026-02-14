package com.knightrunner;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;

/**
 * Represents an obstacle that the knight must avoid
 */
public class Obstacle {
    private double x;
    private final double y;
    private final double width;
    private final double height;
    private boolean passed; // Track if obstacle has been passed to avoid double counting
    
    public Obstacle(double x) {
        this.x = x;
        this.y = Constants.GROUND_Y - Constants.OBSTACLE_HEIGHT;
        this.width = Constants.OBSTACLE_WIDTH;
        this.height = Constants.OBSTACLE_HEIGHT;
        this.passed = false;
    }
    
    /**
     * Updates obstacle position (moves left with scrolling)
     */
    public void update(double scrollSpeed) {
        x -= scrollSpeed;
    }
    
    /**
     * Renders the obstacle on the canvas
     */
    public void render(GraphicsContext gc) {
        // Main obstacle body (spike/rock)
        gc.setFill(Color.DARKRED);
        gc.fillRect(x, y, width, height);
        
        // Spikes on top
        double[] spikeX = {x, x + width / 2, x + width};
        double[] spikeY = {y, y - 15, y};
        gc.setFill(Color.RED);
        gc.fillPolygon(spikeX, spikeY, 3);
        
        // Decorative lines
        gc.setStroke(Color.MAROON);
        gc.setLineWidth(2);
        gc.strokeRect(x + 5, y + 5, width - 10, height - 10);
    }
    
    /**
     * Checks if obstacle is off-screen
     */
    public boolean isOffScreen() {
        return x + width < 0;
    }
    
    /**
     * Checks if obstacle has been passed by the knight
     */
    public boolean isPassed() {
        return passed;
    }
    
    /**
     * Marks obstacle as passed
     */
    public void markPassed() {
        passed = true;
    }
    
    // Getters for collision detection
    public double getX() { return x; }
    public double getY() { return y; }
    public double getWidth() { return width; }
    public double getHeight() { return height; }
    public double getCenterX() { return x + width / 2; }
    public double getCenterY() { return y + height / 2; }
}

