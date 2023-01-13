from django.shortcuts import render
from .models import Post
# Create your views here.
def index(request):
    posts = Post.objects.all().order_by('pk')
    return render(
        request,
        'blog/index.html',
        {
            'posts':posts
        }
        
        )
    
def single_post_page(request,value):
    post = Post.objects.get(pk=value)
    
    return render(
        request,
        'blog/single_post_page.html',
        {
            'post':post,
        }
    ) 

def shl_page(request):
    return render(request,'blog/shl/shl.html',)

<<<<<<< HEAD
def game_page(request):
    return render(request,'blog/shl/game.html',)
=======
def kdw_page(request):
    return render(request,'blog/kdw/frame.html')
>>>>>>> 75409f2063ddc4b68bb0a6191f467d95f3fdd451
