from django.http import HttpResponse
from rest_framework.views import APIView
from.import mail

class NotifyView(APIView):
    def post(self, request):
        data = dict(request.data)
        print(data)
        mail.sendDetails(data)
        return HttpResponse('Success! mail sent.')