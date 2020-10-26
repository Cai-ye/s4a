FROM httpd:2.4

MAINTAINER jiejunf<jiejunwork@foxmail.com>

WORKDIR /usr/local/apache2

COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT docker-entrypoint.sh

COPY ./code ./

CMD ['httpd-foreground']
