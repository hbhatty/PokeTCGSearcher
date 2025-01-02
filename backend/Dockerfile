# Use JDK 19 as the base image
FROM eclipse-temurin:19-jdk

# Set the working directory in the container
WORKDIR /workspace/app

# Copy the Gradle wrapper and required files
COPY gradlew .
RUN chmod +x ./gradlew
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

# Copy application source code
COPY src src
# COPY config config 

# Build the application
RUN ./gradlew clean build --no-daemon

# Expose the application port
EXPOSE 8080

# Run the built application
ENTRYPOINT ["java", "-jar", "build/libs/backend-0.0.1-SNAPSHOT.jar"]