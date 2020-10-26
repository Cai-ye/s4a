#!/bin/sh
set -e

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- httpd-foreground "$@"
fi

app_env=$(env | grep -i "APP_ENV" | sed -e 's/APP_ENV=//Ig')
echo "APP_ENV is ${app_env}"
if [ ! -d /root/dist ]; then
    rm -rf htdocs
    cp -r "dist_${app_env}" htdocs
fi

exec "$@"
