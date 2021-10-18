template="""<div class="card">
<img class="card-img-top" src="{img}" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">{title}</h5>
<p class="card-text">{desc}</p>
</div>
<div class="card-footer">
<small class="text-muted">{lupd}</small>
</div>
</div>"""
import os
import time
thedir=os.getcwd()
dirs=[ name for name in os.listdir(thedir) if os.path.isdir(os.path.join(thedir, name)) ]
for dir in dirs:
      if(not os.path.isfile(f'{dir}/index.html')):
            continue
      print(template.format(img="img.png",title=dir,desc="amal",lupd=time.ctime(os.path.getmtime(dir))))
# lines=[]
# with open("index.html","r") as f:
#       lines= f.readlines()

# for line in lines:
#       print(line)


            

