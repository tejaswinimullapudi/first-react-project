#pip install --upgrade google-cloud
#pip install --upgrade google-cloud-bigquery
#pip install --upgrade google-cloud-storage

from google.cloud import bigquery
import os

credentials_path = 'gcp-project-84626-7c0c4d013408.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credentials_path

client = bigquery.Client()
table_id = 'gcp-project-84626.Cars.Car_data'

rows_to_insert = [
    {u'Car_name':'Tesla', u'Model':'2009', u'Price':'700000000'}
]

client = bigquery.Client()
table_id = 'gcp-project-84626.Cars.Customer_data'

rows_to_insert = [
    {u'Customer_name':'Vasavi', u'Age':'22', u'income':'700000000'}
]

client = bigquery.Client()
table_id = 'gcp-project-84626.Cars.location_data'

rows_to_insert = [
    {u'City_name':'Shirpur', u'District':'Dhule', u'State':'Maharastra'}
]

errors = client.insert_rows_json(table_id, rows_to_insert)
if errors == []:
    print('New rows have been added.')
else:
    print(f'Encountered errors while inserting rows: {errors}')
