FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw
RUN ./mvnw clean install -Dmaven.test.skip=true

CMD ["java", "-jar", "target/*.jar"]