import os
from dotenv import load_dotenv
import smtplib
from email.message import EmailMessage


load_dotenv()


def sendDetails(data):
    data = dict(data)
    url = f'https://127.0.0.1:8000/product/{data["pid"]}'
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.starttls()
    s.login(os.getenv('EMAIL'), os.getenv('PSK'))
    print(data['address'])
    message = f"Subject: Order for your product \n\nProduct: {url} \nName: {data['name']} \nEmail: {data['email']} \nAddress: {data['address']} \nTransactionID: {data['trancsid']}"
    print(message)
    s.sendmail(os.getenv('EMAIL'), data['adminMail'], str(message))
    print('Message sent!')
    s.quit()
    
