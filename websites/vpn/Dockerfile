FROM php:7.2-apache
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY HTML/ /var/www/html/
EXPOSE 80
