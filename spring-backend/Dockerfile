# FROM openjdk:17-jdk-alpine

# RUN addgroup -S spring && adduser -S spring -G spring
# USER spring:spring

# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar


# ENTRYPOINT ["java","-jar","/app.jar"]

FROM maven:3.8.6-eclipse-temurin-17-alpine AS buildstage
ENV HOME=/app
RUN mkdir -p $HOME
WORKDIR $HOME
ADD pom.xml $HOME
RUN mvn verify --fail-never
ADD . $HOME
RUN mvn -DskipTests package



FROM openjdk:17-jdk-alpine AS runstage

COPY --from=buildstage /app/target/todoapp-0.0.1.jar app.jar

EXPOSE 9966

RUN addgroup -S spring && adduser -S spring -G spring

USER spring

ENTRYPOINT ["java", "-jar", "app.jar"]
