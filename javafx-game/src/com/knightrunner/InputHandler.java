package com.knightrunner;

import javafx.scene.Scene;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyEvent;

/**
 * Handles keyboard input for player controls
 */
public class InputHandler {
    private boolean spacePressed;
    private boolean upPressed;
    
    public InputHandler(Scene scene) {
        this.spacePressed = false;
        this.upPressed = false;
        
        scene.setOnKeyPressed(this::handleKeyPressed);
        scene.setOnKeyReleased(this::handleKeyReleased);
    }
    
    /**
     * Handles key press events
     */
    private void handleKeyPressed(KeyEvent event) {
        if (event.getCode() == KeyCode.SPACE || event.getCode() == KeyCode.UP) {
            if (event.getCode() == KeyCode.SPACE) {
                spacePressed = true;
            }
            if (event.getCode() == KeyCode.UP) {
                upPressed = true;
            }
            event.consume();
        }
    }
    
    /**
     * Handles key release events
     */
    private void handleKeyReleased(KeyEvent event) {
        if (event.getCode() == KeyCode.SPACE) {
            spacePressed = false;
        }
        if (event.getCode() == KeyCode.UP) {
            upPressed = false;
        }
    }
    
    /**
     * Checks if jump button is currently pressed
     */
    public boolean isJumpPressed() {
        return spacePressed || upPressed;
    }
    
    /**
     * Processes input for the knight (single jump on press, not hold)
     */
    public void processInput(Knight knight) {
        if (isJumpPressed()) {
            knight.jump();
        }
    }
}

