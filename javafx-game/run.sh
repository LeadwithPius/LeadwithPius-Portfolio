#!/bin/bash

# Run script for Knight Runner JavaFX game

JAVAFX_MODULE_PATH="${JAVAFX_HOME:-/usr/share/openjfx/lib}"

if [ -d "$JAVAFX_MODULE_PATH" ]; then
    java --module-path "$JAVAFX_MODULE_PATH" --add-modules javafx.controls -cp bin com.knightrunner.KnightRunnerApp
else
    # Try common locations
    if [ -d "/usr/lib/jvm/openjfx/lib" ]; then
        java --module-path /usr/lib/jvm/openjfx/lib --add-modules javafx.controls -cp bin com.knightrunner.KnightRunnerApp
    else
        echo "Error: JavaFX not found. Please install JavaFX or set JAVAFX_HOME environment variable."
        echo "For Ubuntu/Debian: sudo apt-get install openjfx"
        exit 1
    fi
fi

