create profile TEPSCHEMA limit PASSWORD_LIFE_TIME unlimited;
create role CUSTOM_TOOLS;
create role IT_COMPLIANCE_ROLE;
create role MDMSOA;
create role SA52067;
create role UA01234;
create role UA50459;
create role UA51651;
create role UA52098;
create role UA54858;
create role UA55567;
create role ITRONEE_ROLE;
grant read,write on directory HVRI_IMPORT to ITRONADM;
grant create materialized view to ITRONADM;
grant create database link to ITRONADM;
create or replace directory dmpdir as '/mnt';
create or replace directory HVRI_IMPORT as '/mnt';
