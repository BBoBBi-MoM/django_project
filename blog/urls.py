from django.urls import path
from . import views
urlpatterns = [
    path('<int:value>/', views.single_post_page),
    path('',views.index),
    path('shl/',views.shl_page),
<<<<<<< HEAD
    path('shl/game/',views.game_page),
=======
    path('kdw/',views.kdw_page)
>>>>>>> 75409f2063ddc4b68bb0a6191f467d95f3fdd451
]