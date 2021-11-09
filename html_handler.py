import os
import time
import argparse
from selenium import webdriver
from PIL import Image
from webdriver_manager.chrome import ChromeDriverManager

template="""<div class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="{img}"></a>
          <h3 class="name">{name}</h3>
          <p class="description">{desc}</p><div
            class="d-md-flex justify-content-md-end action" style="margin-left: 140px;">
            <a href="{github}"><i class="fa fa-github"
              style="opacity: 1;margin: -1px;margin-left: 0px;margin-bottom: -5px;margin-right: 52px;"></i></a>
            <a href="{page}"> <i
              class="fa fa-arrow-circle-right" style="margin-left: 11px;"></i></a></a>
             </div>
      </div>
"""

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
desc_template="""{{
      Name:{name},
      Desc:
}}
"""

def githubLink(filename):
      return f"https://github.com/amalpmathews2003/HTML-Projects/tree/master/{filename}"

def pageLink(filename):
      return f"https://amalpmathews2003.github.io/HTML-Projects/{filename}"

def makeUrl(filename):
      return f"http://127.0.0.1:5500/{filename}"

def initialDriver():
      #path=ChromeDriverManager().install()
      driver=webdriver.Chrome(r"C:\Users\amalp\.wdm\drivers\chromedriver\win32\95.0.4638.54\chromedriver.exe")
      driver.switch_to_alert().accept()
      return driver

def closeDriver(driver):
      driver.close()

def takeScreenshot(filename,driver):
      driver.get(makeUrl(filename))
      driver.save_screenshot(f"images/{filename}.png")
      

def getListedDirs():
      with open("indexed_pages.txt",'r') as f:
            indexedDirs=eval(f.read())
      return indexedDirs
def updateListedDirs(dirs):
      with open("indexed_pages.txt",'w') as f:
            f.write(f"{dirs}")
      

def getDirs():
      thedir=os.getcwd()
      dirs=[ name for name in os.listdir(thedir) if os.path.isdir(os.path.join(thedir, name)) ]
      for dir in dirs:
            print(dir)

def indexFiles():
      driver=initialDriver()
      thedir=os.getcwd()
      dirs=[ name for name in os.listdir(thedir) if os.path.isdir(os.path.join(thedir, name)) ]
      indexedDirs=getListedDirs()
      for dir in dirs:
            if dir not in indexedDirs:
                  if(not os.path.isfile(f'{dir}/index.html')):
                        continue
                  takeScreenshot(dir,driver)
            indexedDirs.append(dir)
            updateListedDirs(indexedDirs)
      closeDriver(driver)

#indexFiles()
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
      f.write(desc_template.format(name=dir))
      f.close()
      print(f'{dir} created with index.html,style.css,script.js and desc.txt')


parser = argparse.ArgumentParser()      
parser.add_argument('--newPro',type=str,help='create folder with given name')
parser.add_argument('--folders',type=str,help='list of folders')
args=parser.parse_args()
if(args.newPro):
      new_html_folder(args.newPro)