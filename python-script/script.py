import os, re
from numpy import empty
import pandas as pd
import socket

pattern_match = r'[0-9]'

file_path = 'Test_Files/'

if not os.path.isdir(file_path) :                  #check if folder with the name exists
    print("Error! No directory with the name exists")
    quit()

data_files = os.listdir(file_path)                  #Get the list of files in the folder

if not data_files:                                  #Check if folder is empty
    print('No files exist in the given folder')
    quit()

target_filename = 'Test_Files/Combined.csv'
result_dict = {}


for file_name in data_files:
    
    if 'Combined.csv' not in file_name and file_name.endswith('.csv'):    #Exclude the Combined.csv file and check if csv file
        env_name = os.path.splitext(file_name)[0]
        env_name = re.sub(pattern_match, '', env_name)   #Remove the extension and numbers from environment name

        file_path = 'Test_Files/' + file_name
        df = pd.read_csv(file_path)
        column_list = list(df.columns)

        if 'Source IP' in column_list:
            unique_ips = df['Source IP'].unique()         #Get the unique ips
            for ip in unique_ips:
                result_dict[ip] = env_name                #Add the ip and environment to dictionary



dict_items = sorted(result_dict.items(), key = lambda x: socket.inet_aton(x[0]))  #Sort the ip addresses

result_df = pd.DataFrame(dict_items, columns=['Source IP', 'Environment'])


if not result_df.empty:
    result_df.to_csv(target_filename, index=False)             #Write the DataFrame to CSV
    print('File created with csv data')









