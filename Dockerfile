FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw
RUN ./mvnw clean package -Dmaven.test.skip=true

CMD ["java", "-jar", "target/workbridge-0.0.1-SNAPSHOT.jar"]