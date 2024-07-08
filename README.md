# datadome-keycloak-demo

This repository provide an example of the protection of a Keycloak service by using DataDome Nginx module through docker-compose.

For additional information, please check our [public documentation](https://docs.datadome.co/docs/keycloak).

## Pre-requisites

### Software required

- [docker-compose](https://docs.docker.com/compose/)

### Configuration

To enable the DataDome's protection, you have to update the following lines:

1. In `./nginx.conf`, replace the `datadome_server_side_key` (line 53) by your own DataDome server-side key
2. In `./themes/datadome/account/resources/js/script.js`, replace the `DATADOME_CLIENT_SIDE_KEY` (line 1) by your own DataDome client-side key
3. In `./themes/datadome/login/resources/js/script.js`, replace the `DATADOME_CLIENT_SIDE_KEY` (line 1) by your own DataDome client-side key

You can find the different keys on your [DataDome's Dashboard](https://app.datadome.co/management/integrations).

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
