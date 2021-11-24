import psycopg2

def postgres_test():

    try:
        conn = psycopg2.connect("dbname='elastiodb' user='{{rds_user}}' host='{{rds_host}}' password='{{rds_password}}'")
        conn.close()
        return True
    except:
        return False

print postgres_test()
