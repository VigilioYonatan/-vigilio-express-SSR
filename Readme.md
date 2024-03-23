# VIGILIO/EXPRESS - BUN SSR

<img src="./public/images/logo.png" width="150">
<img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="150">
<br>
by Yonatan Vigilio Lavado
<br><br>

# Getting Started

## Sin Docker

```bash
bun install
# eliminar .git/ para iniciar uno nuevo
rm -r .git/
# empezar modo de desarrollo
bun serve
bun dev
```

## Con Docker

1. Instalar paquetes npm

```bash
bun install
```

2. Iniciar contenedor

```bash
bun compose up -d
```

Abrir vite

```bash
# shell del contenedor donde corre node express
bun dev
#  desde tu terminal de visual studio code tambien
bun dev
```

Detener contenedor y iniciar contenedor

```bash
docker container stop hashdecontenedor
docker container start hashdecontenedor
```

Ver logs de contenedor

```bash
docker container logs hashdecontenedor -f
# -f ver en tiempo real
```

3. Detener todos los contenedores de la imagen

```bash
docker compose down
```

4. Si modificaste package.json (instalar o desintalar dependencia ) Detener contenedor de la imagen "docker compose down" y instalar dependencia pnpm add \*. Volver a construir contenedor y iniciar contenedor

```BASH
# volver a contruir construir contenedor y iniciar
docker compose up -d --build
```

### Opcional en el terminal

Ver filesystem de tus contenedor

```bash
# server
docker exec -it hashdecontenedor sh
```

### Producción

1. Verificar y modificar .env a producción
2. Verificar errores de eslint

```bash
pnpm biome:check
pnpm biome:format
```

3. Insertar tu api de postman y dia en tu aplicación

```bash
docker compose down
docker compose -f docker-compose.production.yml up -d --build
```

3. Verás que se iniciará en modo de producción en el contenedor
