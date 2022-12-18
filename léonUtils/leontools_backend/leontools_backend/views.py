from django.db.models import Q
from rest_framework import status, filters, generics
from rest_framework.response import Response
from .models import User, Session, Notification, Request
from .serializers import UserSerializer, SessionSerializer, NotificationSerializer, RequestSerializer
from rest_framework.decorators import api_view


@api_view(['POST'])
def users_list(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def sessions_list(request):
    serializer = SessionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, google_id):
    try:
        user = User.objects.get(google_id=google_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = UserSerializer(user)
        return Response(data=serializer.data)

    if request.method == "PUT":
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def session_details(request, session_id):
    try:
        session = Session.objects.get(session_id=session_id)
    except Session.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = SessionSerializer(session)
        return Response(data=serializer.data)

    if request.method == "PUT":
        serializer = SessionSerializer(session, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def notifications_list(request, recipient_google_id, page):
    notification = Notification.objects.filter(Q(receivers_google_ids='*') |
                                               Q(receivers_google_ids__contains=recipient_google_id)).order_by('-publish_date')[3*page-3:3*page]
    serializer = NotificationSerializer(notification, many=True)
    return Response(data=serializer.data)


@api_view(['GET'])
def requests_list(request, monitors_google_id, page):
    request = Request.objects.filter(Q(monitors_google_id='*') |
                                     Q(monitors_google_id__contains=monitors_google_id)).order_by('-publish_date')[5*page-5:5*page]
    serializer = RequestSerializer(request, many=True)
    return Response(data=serializer.data)


