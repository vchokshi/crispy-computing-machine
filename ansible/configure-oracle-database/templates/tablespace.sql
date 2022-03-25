create  TABLESPACE  ADMIN_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/ADMIN_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace ADMIN_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/ADMIN_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace ADMIN_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/ADMIN_DATA_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  ADMIN_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/ADMIN_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace ADMIN_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/ADMIN_INDEX_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace ADMIN_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/ADMIN_INDEX_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  CONFIG_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/CONFIG_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  CONFIG_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/CONFIG_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  IEE02_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/IEE02_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE02_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE02_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE02_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE02_DATA_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  IEE02_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/IEE02_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE02_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE02_INDEX_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE02_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE02_INDEX_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  IEE_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/IEE_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE_DATA_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  IEE_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/IEE_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE_INDEX_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace IEE_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/IEE_INDEX_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  LOB_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/LOB_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOB_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/LOB_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOB_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/LOB_DATA_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  LOG_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOG_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOG_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_DATA_03.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOG_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_DATA_04.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  LOG_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOG_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_INDEX_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOG_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_INDEX_03.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace LOG_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/LOG_INDEX_04.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  MVIEW_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/MVIEW_DATA_01.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  MVIEW_LOG datafile '/oracle/app/oradata/{{db_unique_name}}/MVIEW_LOG_01.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  OPER_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/OPER_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace OPER_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/OPER_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace OPER_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/OPER_DATA_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  OPER_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/OPER_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace OPER_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/OPER_INDEX_02.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  READING_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/READING_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace READING_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace READING_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_DATA_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  READING_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/READING_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace READING_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_INDEX_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace READING_INDEX add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_INDEX_03.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  TAMPER_DATA datafile '/oracle/app/oradata/{{db_unique_name}}/TAMPER_DATA_01.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace TAMPER_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/TAMPER_DATA_02.dbf' size 1m autoextend on maxsize unlimited;
  alter tablespace TAMPER_DATA add datafile '/oracle/app/oradata/{{db_unique_name}}/TAMPER_DATA_03.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  TAMPER_INDEX datafile '/oracle/app/oradata/{{db_unique_name}}/TAMPER_INDEX_01.dbf' size 1m autoextend on maxsize unlimited;


create  TABLESPACE  DE_Y2010_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2010_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2011_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2011_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2012_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2012_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M06 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M06_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M07 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M07_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M08 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M08_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2013_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2013_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M05_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M06 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M06_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M07 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M07_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M08 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M08_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2014_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2014_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M05_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M06 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M06_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M07 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M07_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M08 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M08_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2015_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2015_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M05_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M06 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M06_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M07 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M07_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M08 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M08_01.dbf' size 1m autoextend on maxsize unlimited;

create  TABLESPACE  DE_Y2016_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2016_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2016_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2017_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2017_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2017_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2017_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2017_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2017_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2017_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2017_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  DE_Y2017_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/DE_Y2017_M05_01.dbf' size 1m autoextend on maxsize unlimited;


create  TABLESPACE  READING_Y2016_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2016_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2016_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2016_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2017_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2017_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2017_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2017_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  READING_Y2017_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M05_01.dbf' size 1m autoextend on maxsize unlimited;


alter TABLESPACE READING_Y2016_M09 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M09_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2016_M10 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M10_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2016_M11 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M11_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2016_M12 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M12_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M01 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M01_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M02 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M02_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M03 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M03_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M04 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M04_02.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M05 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M05_02.dbf' size 1m autoextend on maxsize unlimited;


alter TABLESPACE READING_Y2016_M09 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M09_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2016_M10 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M10_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2016_M11 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M11_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2016_M12 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2016_M12_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M01 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M01_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M02 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M02_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M03 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M03_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M04 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M04_03.dbf' size 1m autoextend on maxsize unlimited;
alter TABLESPACE READING_Y2017_M05 add datafile '/oracle/app/oradata/{{db_unique_name}}/READING_Y2017_M05_03.dbf' size 1m autoextend on maxsize unlimited;


create  TABLESPACE  RGSPC_Y2016_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2016_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2016_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2016_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2016_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2016_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2016_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2016_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2017_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2017_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2017_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2017_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2017_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2017_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2017_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2017_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  RGSPC_Y2017_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/RGSPC_Y2017_M05_01.dbf' size 1m autoextend on maxsize unlimited;


create  TABLESPACE  VLDH_Y2016_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2016_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2016_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2016_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2017_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2017_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2017_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2017_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLDH_Y2017_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M05_01.dbf' size 1m autoextend on maxsize unlimited;


create  TABLESPACE  VLH_Y2016_M09 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2016_M09_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2016_M10 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2016_M10_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2016_M11 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2016_M11_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2016_M12 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2016_M12_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2017_M01 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2017_M01_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2017_M02 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2017_M02_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2017_M03 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2017_M03_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2017_M04 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2017_M04_01.dbf' size 1m autoextend on maxsize unlimited;
create  TABLESPACE  VLH_Y2017_M05 datafile '/oracle/app/oradata/{{db_unique_name}}/VLH_Y2017_M05_01.dbf' size 1m autoextend on maxsize unlimited;


alter tablespace VLDH_Y2016_M09 add datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M09_02.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2016_M10 add datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M10_02.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2016_M11 add  datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M11_02.dbf'  size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2016_M12 add  datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2016_M12_02.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2017_M01 add datafile '/oracle/app/oradata/{{db_unique_name}}/ VLDH_Y2017_M01_02.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2017_M02 add  datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M02_02.dbf'  size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2017_M03 add datafile '/oracle/app/oradata/{{db_unique_name}}/ VLDH_Y2017_M03_02.dbf' size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2017_M04 add  datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M04_02.dbf'  size 1m autoextend on maxsize unlimited;
alter tablespace VLDH_Y2017_M05 add  datafile '/oracle/app/oradata/{{db_unique_name}}/VLDH_Y2017_M05_02.dbf'  size 1m autoextend on maxsize unlimited;


alter database add logfile '/oracle/app/oradata/{{db_unique_name}}/redo04.log' size 209715200;
alter database add logfile '/oracle/app/oradata/{{db_unique_name}}/redo05.log' size 209715200;
alter database add logfile '/oracle/app/oradata/{{db_unique_name}}/redo06.log' size 209715200;
