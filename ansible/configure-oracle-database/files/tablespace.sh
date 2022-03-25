#!/bin/sh
$ORACLE_HOME/bin/sqlplus /nolog <<-EOF
conn / as sysdba
@/home/oracle/tablespace.sql
exit
