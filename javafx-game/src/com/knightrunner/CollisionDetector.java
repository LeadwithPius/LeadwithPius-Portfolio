package com.knightrunner;

import java.util.List;

/**
 * Handles collision detection between game entities
 */
public class CollisionDetector {
    
    /**
     * Checks collision between knight and obstacle using AABB (Axis-Aligned Bounding Box)
     */
    public static boolean checkKnightObstacleCollision(Knight knight, Obstacle obstacle) {
        return knight.getX() < obstacle.getX() + obstacle.getWidth() &&
               knight.getX() + knight.getWidth() > obstacle.getX() &&
               knight.getY() < obstacle.getY() + obstacle.getHeight() &&
               knight.getY() + knight.getHeight() > obstacle.getY();
    }
    
    /**
     * Checks collision between knight and totem
     */
    public static boolean checkKnightTotemCollision(Knight knight, Totem totem) {
        return knight.getX() < totem.getX() + totem.getWidth() &&
               knight.getX() + knight.getWidth() > totem.getX() &&
               knight.getY() < totem.getY() + totem.getHeight() &&
               knight.getY() + knight.getHeight() > totem.getY();
    }
    
    /**
     * Checks if knight has passed an obstacle (for scoring)
     */
    public static boolean hasPassedObstacle(Knight knight, Obstacle obstacle) {
        return knight.getX() > obstacle.getX() + obstacle.getWidth();
    }
    
    /**
     * Processes all collisions in the game world
     */
    public static void processCollisions(Knight knight, List<Obstacle> obstacles, 
                                        List<Totem> totems, GameManager gameManager) {
        // Check obstacle collisions
        for (Obstacle obstacle : obstacles) {
            if (!obstacle.isPassed() && checkKnightObstacleCollision(knight, obstacle)) {
                knight.takeDamage();
                obstacle.markPassed();
                if (!knight.isAlive()) {
                    gameManager.gameOver();
                    return;
                }
            }
        }
        
        // Check totem collisions
        for (Totem totem : totems) {
            if (!totem.isCollected() && checkKnightTotemCollision(knight, totem)) {
                totem.collect();
                knight.heal();
                gameManager.collectTotem();
            }
        }
    }
}

