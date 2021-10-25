import os
import time
import argparse

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

basic_html_temp="""<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>{name}</title>
      <link rel="stylesheet" href="style.css">
</head>
<body>


</body>
<script src="script.js"></script>  
</html>
"""
desc_template="""{
      Name:
      Desc:
}
"""
def func():
      thedir=os.getcwd()
      dirs=[ name for name in os.listdir(thedir) if os.path.isdir(os.path.join(thedir, name)) ]
      for dir in dirs:
            if(not os.path.isfile(f'{dir}/index.html')):
                  continue
            print(template.format(img="img.png",title=dir,desc="amal",lupd=time.ctime(os.path.getmtime(dir))))



def new_html_folder(dir):
      parent_dir=os.getcwd()
      os.mkdir(dir)
      with open(f"{dir}/index.html","w") as f:
            f.write(basic_html_temp.format(name=dir.capitalize()))
      f=open(f"{dir}/style.css","w")
      f.close()
      f=open(f"{dir}/script.js","w")
      f.close()
      f=open(f"{dir}/desc.txt","w")
      f.write(desc_template)
      f.close()
      print(f'{dir} created with index.html,style.css,script.js and desc.txt')


parser = argparse.ArgumentParser()      

parser.add_argument('--folder',type=str,help='create folder with given name')
args=parser.parse_args()
if(args.folder):
      new_html_folder(args.folder)