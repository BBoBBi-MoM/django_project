from django.urls import path
from . import views
urlpatterns = [
    path('<int:value>/', views.single_post_page),
    path('',views.index),
    path('shl/',views.shl_page),
    path('kdw/',views.kdw_page)
]