FROM php:7.4.21-apache
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY HTML/ /var/www/html/
EXPOSE 80
