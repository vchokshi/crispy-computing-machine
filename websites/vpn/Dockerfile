FROM php:7.4.26-apache
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY HTML/ /var/www/html/
EXPOSE 80
