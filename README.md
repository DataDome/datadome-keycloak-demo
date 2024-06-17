# datadome-keycloak-demo

This repository provide an example of the protection of a Keycloak service by using DataDome Nginx module through docker-compose.

For additional information, please check our [public documentation](https://docs.datadome.co/docs/keycloak).

## Pre-requisites

- [docker-compose](https://docs.docker.com/compose/)

## Getting started

### Build

```shell
docker-compose build
```

### Run

```shell
docker-compose up
```

### Test

1. Access to the `http://localhost/realms/master/accounts` endpoint.
2. Connect with the admin user

### Stop

```shell
docker-compose down
```

### Reset

```shell
docker-compose down -v
```
