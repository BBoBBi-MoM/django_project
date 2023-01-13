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

def kdw_page(request):
    return render(request,'blog/kdw/frame.html')

def kdh_page(request):
    return render(request,'blog/kdh/index.html')

def ksm_page(request):
    return render(request,'blog/ksm/index.html')

def lhw_page(request):
    return render(request,'blog/lhw/lhw.html/hw.html')

def game_page(request):
    return render(request,'blog/shl/game.html')

def future(request):
    return render(request,'blog/kdh/future.html')

def about(request):
    return render(request,'blog/kdh/about.html')