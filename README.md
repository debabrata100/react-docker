# react-docker

This project explains how to run a react application in `docker(https://www.docker.com/)`.

## Build docker image
`docker build . -t react-docker`
## Run docker container
`docker run -p 8000:80 react-docker` and Navigate to `http://localhost:8000/`

## Development server

Run `yarn start` for a dev sever. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files inside `app directory`.

## Build
 * Run `yarn build` to build the project. The build artifacts will be stored in the `build/` directory.

## Detailed Explanation
 * Go to medium(https://medium.com/@debabrata100/so-you-want-to-dockerize-your-react-app-64fbbb74c217)
