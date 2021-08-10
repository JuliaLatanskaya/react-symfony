FROM php:8-fpm

RUN apt-get update && apt-get install -y \
    libmcrypt-dev \
    wget \
    unzip \
    zip \
    libzip-dev \
    git \
    vim

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app