package com.knightrunner;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;

/**
 * Represents the player-controlled Knight character
 */
public class Knight {
    private double x;
    private double y;
    private double velocityY;
    private double width;
    private double height;
    private int lives;
    private boolean isJumping;
    private boolean isGrounded;
    
    public Knight() {
        this.x = Constants.KNIGHT_START_X;
        this.y = Constants.GROUND_Y - Constants.KNIGHT_HEIGHT;
        this.width = Constants.KNIGHT_WIDTH;
        this.height = Constants.KNIGHT_HEIGHT;
        this.velocityY = 0;
        this.lives = Constants.KNIGHT_MAX_LIVES;
        this.isJumping = false;
        this.isGrounded = true;
    }
    
    /**
     * Updates the knight's position based on physics
     */
    public void update() {
        // Apply gravity
        if (!isGrounded) {
            velocityY += Constants.GRAVITY;
        }
        
        // Update Y position
        y += velocityY;
        
        // Check if grounded
        double groundLevel = Constants.GROUND_Y - height;
        if (y >= groundLevel) {
            y = groundLevel;
            velocityY = 0;
            isGrounded = true;
            isJumping = false;
        } else {
            isGrounded = false;
        }
    }
    
    /**
     * Makes the knight jump
     */
    public void jump() {
        if (isGrounded && !isJumping) {
            velocityY = Constants.KNIGHT_JUMP_FORCE;
            isJumping = true;
            isGrounded = false;
        }
    }
    
    /**
     * Renders the knight on the canvas
     */
    public void render(GraphicsContext gc) {
        // Knight body (rectangle representing knight)
        gc.setFill(Color.DARKBLUE);
        gc.fillRect(x, y, width, height);
        
        // Knight helmet/head
        gc.setFill(Color.MIDNIGHTBLUE);
        gc.fillOval(x + 10, y, width - 20, height / 3);
        
        // Knight sword (simple line)
        gc.setStroke(Color.SILVER);
        gc.setLineWidth(3);
        gc.strokeLine(x + width, y + height / 2, x + width + 20, y + height / 2 - 10);
        
        // Eyes
        gc.setFill(Color.WHITE);
        gc.fillOval(x + 15, y + 15, 8, 8);
        gc.fillOval(x + width - 23, y + 15, 8, 8);
        gc.setFill(Color.BLACK);
        gc.fillOval(x + 17, y + 17, 4, 4);
        gc.fillOval(x + width - 21, y + 17, 4, 4);
    }
    
    /**
     * Decreases knight's lives when hit by obstacle
     */
    public void takeDamage() {
        if (lives > 0) {
            lives--;
        }
    }
    
    /**
     * Increases knight's lives when collecting totem
     */
    public void heal() {
        if (lives < Constants.KNIGHT_MAX_LIVES) {
            lives++;
        }
    }
    
    // Getters
    public double getX() { return x; }
    public double getY() { return y; }
    public double getWidth() { return width; }
    public double getHeight() { return height; }
    public int getLives() { return lives; }
    public boolean isAlive() { return lives > 0; }
    
    // Getters for collision detection
    public double getCenterX() { return x + width / 2; }
    public double getCenterY() { return y + height / 2; }
}

