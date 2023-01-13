from django.urls import path
from . import views
urlpatterns = [
    path('',views.index),
    path('1/', views.shl_page),    
    path('1/game/',views.game_page),
    path('2/',views.kdw_page),
    path('2/interests/',views.kdw_page1),
    path('2/interests/study',views.kdw_page2),
    path('3/',views.kdh_page),
    path('3/future/',views.future),
    path('3/about/',views.about),
    path('4/',views.lhw_page),
    path('5/',views.ksm_page),



]