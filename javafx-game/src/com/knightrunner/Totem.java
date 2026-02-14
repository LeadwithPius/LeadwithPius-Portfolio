package com.knightrunner;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;

/**
 * Represents a life-boosting totem that the knight can collect
 */
public class Totem {
    private double x;
    private double y;
    private double width;
    private double height;
    private boolean collected;
    private double animationOffset; // For floating animation
    
    public Totem(double x) {
        this.x = x;
        this.y = Constants.GROUND_Y - Constants.TOTEM_HEIGHT - 20; // Slightly above ground
        this.width = Constants.TOTEM_WIDTH;
        this.height = Constants.TOTEM_HEIGHT;
        this.collected = false;
        this.animationOffset = 0;
    }
    
    /**
     * Updates totem position and animation
     */
    public void update(double scrollSpeed) {
        x -= scrollSpeed;
        // Floating animation
        animationOffset = Math.sin(System.currentTimeMillis() / 200.0) * 5;
    }
    
    /**
     * Renders the totem on the canvas
     */
    public void render(GraphicsContext gc) {
        if (collected) return;
        
        double renderY = y + animationOffset;
        
        // Totem pole
        gc.setFill(Color.SADDLEBROWN);
        gc.fillRect(x + width / 2 - 5, renderY + height / 2, 10, height / 2);
        
        // Totem head (circular with glowing effect)
        gc.setFill(Color.GOLD);
        gc.fillOval(x, renderY, width, height / 2);
        
        // Glowing aura
        gc.setFill(Color.rgb(255, 215, 0, 0.3));
        gc.fillOval(x - 5, renderY - 5, width + 10, height / 2 + 10);
        
        // Totem face/pattern
        gc.setFill(Color.ORANGE);
        gc.fillOval(x + 8, renderY + 8, 6, 6);
        gc.fillOval(x + width - 14, renderY + 8, 6, 6);
        
        // Cross symbol (health symbol)
        gc.setStroke(Color.RED);
        gc.setLineWidth(3);
        double centerX = x + width / 2;
        double centerY = renderY + height / 4;
        gc.strokeLine(centerX - 8, centerY, centerX + 8, centerY);
        gc.strokeLine(centerX, centerY - 8, centerX, centerY + 8);
    }
    
    /**
     * Marks totem as collected
     */
    public void collect() {
        collected = true;
    }
    
    /**
     * Checks if totem is collected
     */
    public boolean isCollected() {
        return collected;
    }
    
    /**
     * Checks if totem is off-screen
     */
    public boolean isOffScreen() {
        return x + width < 0;
    }
    
    // Getters for collision detection
    public double getX() { return x; }
    public double getY() { return y + animationOffset; }
    public double getWidth() { return width; }
    public double getHeight() { return height; }
    public double getCenterX() { return x + width / 2; }
    public double getCenterY() { return y + animationOffset + height / 2; }
}

