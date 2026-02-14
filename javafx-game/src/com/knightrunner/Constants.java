package com.knightrunner;

/**
 * Constants configuration for the Knight Runner game
 */
public class Constants {
    // Window dimensions
    public static final int WINDOW_WIDTH = 800;
    public static final int WINDOW_HEIGHT = 600;
    
    // Game world
    public static final int GROUND_Y = 500;
    public static final double SCROLL_SPEED = 3.0;
    public static final double GRAVITY = 0.8;
    
    // Knight (Player) properties
    public static final double KNIGHT_WIDTH = 60;
    public static final double KNIGHT_HEIGHT = 80;
    public static final double KNIGHT_START_X = 100;
    public static final double KNIGHT_JUMP_FORCE = -15;
    public static final int KNIGHT_MAX_LIVES = 3;
    
    // Obstacle properties
    public static final double OBSTACLE_WIDTH = 40;
    public static final double OBSTACLE_HEIGHT = 60;
    public static final int OBSTACLE_SPAWN_DISTANCE = 400;
    public static final int OBSTACLE_MIN_DISTANCE = 250;
    
    // Totem properties
    public static final double TOTEM_WIDTH = 35;
    public static final double TOTEM_HEIGHT = 50;
    public static final int TOTEM_SPAWN_DISTANCE = 600;
    public static final int TOTEM_MIN_DISTANCE = 400;
    
    // Game timing
    public static final int ANIMATION_DURATION_MS = 16; // ~60 FPS
    public static final double SPEED_INCREASE_RATE = 0.001; // Speed increases over time
    public static final double MAX_SCROLL_SPEED = 8.0;
}
