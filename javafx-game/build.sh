#!/bin/bash

# Build script for Knight Runner JavaFX game
# Make sure JavaFX is in your PATH or adjust the JAVA_HOME variable

echo "Building Knight Runner Game..."

# Create bin directory if it doesn't exist
mkdir -p bin

# Compile Java files
# Note: Adjust the module path based on your JavaFX installation
# For Java 11+: JavaFX may need to be installed separately
# For Java 17+: Use jpackage or install JavaFX SDK separately

JAVAFX_MODULE_PATH="${JAVAFX_HOME:-/usr/share/openjfx/lib}"

if [ -d "$JAVAFX_MODULE_PATH" ]; then
    echo "Using JavaFX at: $JAVAFX_MODULE_PATH"
    javac -d bin --module-path "$JAVAFX_MODULE_PATH" --add-modules javafx.controls src/com/knightrunner/*.java
else
    echo "Warning: JavaFX module path not found. Attempting compilation without explicit module path..."
    echo "If this fails, please set JAVAFX_HOME environment variable or install JavaFX."
    javac -d bin --module-path /usr/lib/jvm/openjfx/lib --add-modules javafx.controls src/com/knightrunner/*.java 2>/dev/null || \
    javac -d bin src/com/knightrunner/*.java
fi

if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo ""
    echo "To run the game, use:"
    echo "  ./run.sh"
    echo ""
    echo "Or manually:"
    echo "  java --module-path $JAVAFX_MODULE_PATH --add-modules javafx.controls -cp bin com.knightrunner.KnightRunnerApp"
else
    echo "Build failed. Please check your JavaFX installation."
    exit 1
fi

