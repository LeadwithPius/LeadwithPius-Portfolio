package com.knightrunner;

import javafx.scene.canvas.GraphicsContext;
import javafx.scene.paint.Color;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

/**
 * Manages the game world including scrolling, obstacles, and totems
 */
public class GameWorld {
    private List<Obstacle> obstacles;
    private List<Totem> totems;
    private Random random;
    private double lastObstacleX;
    private double lastTotemX;
    
    public GameWorld() {
        this.obstacles = new ArrayList<>();
        this.totems = new ArrayList<>();
        this.random = new Random();
        this.lastObstacleX = Constants.WINDOW_WIDTH;
        this.lastTotemX = Constants.WINDOW_WIDTH + 200;
    }
    
    /**
     * Updates all world entities
     */
    public void update(double scrollSpeed) {
        // Spawn obstacles
        if (Constants.WINDOW_WIDTH - lastObstacleX >= Constants.OBSTACLE_SPAWN_DISTANCE) {
            spawnObstacle();
        }
        
        // Spawn totems (less frequent than obstacles)
        if (Constants.WINDOW_WIDTH - lastTotemX >= Constants.TOTEM_SPAWN_DISTANCE) {
            spawnTotem();
        }
        
        // Update obstacles
        Iterator<Obstacle> obstacleIterator = obstacles.iterator();
        while (obstacleIterator.hasNext()) {
            Obstacle obstacle = obstacleIterator.next();
            obstacle.update(scrollSpeed);
            
            // Remove off-screen obstacles
            if (obstacle.isOffScreen()) {
                obstacleIterator.remove();
            }
        }
        
        // Update totems
        Iterator<Totem> totemIterator = totems.iterator();
        while (totemIterator.hasNext()) {
            Totem totem = totemIterator.next();
            totem.update(scrollSpeed);
            
            // Remove off-screen totems
            if (totem.isOffScreen()) {
                totemIterator.remove();
            }
        }
    }
    
    /**
     * Spawns a new obstacle at an appropriate distance
     */
    private void spawnObstacle() {
        double spawnX = Constants.WINDOW_WIDTH + 
                       random.nextDouble() * Constants.OBSTACLE_MIN_DISTANCE;
        obstacles.add(new Obstacle(spawnX));
        lastObstacleX = spawnX;
    }
    
    /**
     * Spawns a new totem at an appropriate distance
     */
    private void spawnTotem() {
        double spawnX = Constants.WINDOW_WIDTH + 
                       random.nextDouble() * Constants.TOTEM_MIN_DISTANCE;
        totems.add(new Totem(spawnX));
        lastTotemX = spawnX;
    }
    
    /**
     * Renders the ground and all world entities
     */
    public void render(GraphicsContext gc) {
        // Draw ground
        gc.setFill(Color.SADDLEBROWN);
        gc.fillRect(0, Constants.GROUND_Y, Constants.WINDOW_WIDTH, 
                   Constants.WINDOW_HEIGHT - Constants.GROUND_Y);
        
        // Draw ground line
        gc.setStroke(Color.DARKGREEN);
        gc.setLineWidth(2);
        gc.strokeLine(0, Constants.GROUND_Y, Constants.WINDOW_WIDTH, Constants.GROUND_Y);
        
        // Render obstacles
        for (Obstacle obstacle : obstacles) {
            obstacle.render(gc);
        }
        
        // Render totems
        for (Totem totem : totems) {
            totem.render(gc);
        }
    }
    
    /**
     * Resets the world for a new game
     */
    public void reset() {
        obstacles.clear();
        totems.clear();
        lastObstacleX = Constants.WINDOW_WIDTH;
        lastTotemX = Constants.WINDOW_WIDTH + 200;
    }
    
    // Getters for collision detection
    public List<Obstacle> getObstacles() { return obstacles; }
    public List<Totem> getTotems() { return totems; }
}

