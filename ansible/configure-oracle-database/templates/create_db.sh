#!/bin/sh
{{ oracle_home }}/bin/dbca -silent -createDatabase -templateName /home/oracle/mdm.dbt -gdbname {{db_unique_name}} -sid {{oracle_sid}} -emConfiguration NONE -createAsContainerDatabase false -memoryPercentage 60 -characterSet AL32UTF8
