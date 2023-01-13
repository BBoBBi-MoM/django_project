from django.urls import path
from . import views
urlpatterns = [
    path('1/', views.shl_page),
    path('',views.index),
    path('2/',views.kdw_page),
    path('3/',views.kdh_page),
    path('4/',views.lhw_page),
    path('5/',views.ksm_page),
    path('1/game/',views.game_page),
]