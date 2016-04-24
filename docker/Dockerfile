FROM node
MAINTAINER Jani Arvonen <jani.arvonen@gmail.com>

# setup timezone

ENV TZ=Europe/Helsinki

RUN adduser busa --home /code --gecos "" --disabled-password
USER busa
WORKDIR /code
