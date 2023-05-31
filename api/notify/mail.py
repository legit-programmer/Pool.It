import os
from dotenv import load_dotenv
import smtplib


load_dotenv()


def sendDetails(data):
    data = dict(data)
    url = f'https://127.0.0.1:8000/product/{data["pid"]}'
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.starttls()
    s.login(os.getenv('EMAIL'), os.getenv('PSK'))
    print(data['address'])
    message = f"Order for your product \n{url} Name: {data['name']} \nEmail: {data['email']} \nAddress: {data['address']} \nTransactionID: {data['trancsid']}"
    print(message)
    s.sendmail(os.getenv('EMAIL'), data['adminMail'], str(message) )
    s.quit()
