FROM azul/zulu-openjdk:17
MAINTAINER woco.com.ar
ARG JAR_FILE=target/woco-1.0.0.jar
COPY ${JAR_FILE} app.jar
COPY src/main/resources /app/resources
USER root
ENV JAVA_OPTS=""
ENV LANG en_GB.UTF-8
EXPOSE 8015:8015
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar","-Djava.awt.headless=true" ]

