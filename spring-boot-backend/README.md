# Spring Boot Application

## Descripción
Esta es una aplicación básica creada con Spring Boot y Maven, utilizando Java 17.

## Requisitos
- Java 17
- Maven

## Instalación

### Instalación de Java 17

#### Ubuntu
1. Actualiza el índice de paquetes:
    ```sh
    sudo apt update
    ```
2. Instala Java 17:
    ```sh
    sudo apt install openjdk-17-jdk
    ```
3. Verifica la instalación:
    ```sh
    java -version
    ```
    Debe mostrar algo similar a:
    ```sh
    openjdk version "17.0.1" 2021-10-19
    ```

#### Windows
1. Descarga el JDK 17 desde la página oficial de Oracle: [Java SE Development Kit 17 Downloads](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
2. Ejecuta el instalador y sigue las instrucciones.
3. Verifica la instalación abriendo una terminal (CMD) y ejecutando:
    ```sh
    java -version
    ```
    Debe mostrar algo similar a:
    ```sh
    openjdk version "17.0.1" 2021-10-19
    ```

### Instalación de Maven

#### Ubuntu
1. Instala Maven:
    ```sh
    sudo apt install maven
    ```
2. Verifica la instalación:
    ```sh
    mvn -version
    ```
    Debe mostrar algo similar a:
    ```sh
    Apache Maven 3.6.3
    ```

#### Windows
1. Descarga Maven desde la página oficial: [Maven Download](https://maven.apache.org/download.cgi)
2. Extrae el archivo ZIP descargado a una ubicación deseada.
3. Configura la variable de entorno `MAVEN_HOME` apuntando al directorio donde extrajiste Maven.
4. Agrega `%MAVEN_HOME%\bin` a la variable de entorno `PATH`.
5. Verifica la instalación abriendo una terminal (CMD) y ejecutando:
    ```sh
    mvn -version
    ```
    Debe mostrar algo similar a:
    ```sh
    Apache Maven 3.6.3
    ```

## Uso

### Iniciar la aplicación en modo desarrollo
Para iniciar la aplicación en modo desarrollo, ejecuta el siguiente comando en el directorio raíz del proyecto:
```sh
./mvnw spring-boot:run
```