#import pandas as pd
from google.cloud import bigquery
import os

from numpy import record

credentials_path = 'spinny-344908-b68b3b9a130c.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credentials_path
def reader():
    client = bigquery.Client()
# table_id = 'gcp-project-84626:Cars.car_data'

    df_fetch = "select * from `spinny-344908.cars_ID.cars_data` limit 100"

    result = client.query(df_fetch).result()
    df1 = result.to_dataframe()
    df1 = df1.to_json("car.json", orient = 'records')

    df_fetch = "select * from `spinny-344908.cars_ID.user_data` limit 100"

    result = client.query(df_fetch).result()
    df2 = result.to_dataframe()
    df2 = df2.to_json("Customer.json", orient = 'records')
    

