import os
import argparse
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

template="""<div class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="{img}"></a>
 <h3 class="name">{name}</h3>
 <p class="description">{desc}</p>
 <div class="d-md-flex justify-content-md-end action" style="margin-left: 140px;">
  <a href="{code}"><i class="fa fa-github"
   style="opacity: 1;margin: -1px;margin-left: 0px;margin-bottom: -5px;margin-right: 52px;"></i></a>
  <a href="{website}"> <i
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

def printList(list):
      for i in list:
            print(i)

def githubCodeLink(filename):
      return f"https://github.com/amalpmathews2003/HTML-Projects/tree/master/{filename}"

def websiteLink(filename):
      return f"https://amalpmathews2003.github.io/HTML-Projects/{filename}"

def makeUrl(filename):
      return f"http://127.0.0.1:5500/{filename}"

def initialDriver():
      #path=ChromeDriverManager().install()
      driver=webdriver.Chrome(r"C:\Users\amalp\.wdm\drivers\chromedriver\win32\95.0.4638.54\chromedriver.exe")
      #driver.switch_to_alert().accept()
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
      dirs=[name for name in os.listdir(thedir) if os.path.isdir(os.path.join(thedir, name))  ]
      return dirs

def getProjects():
      dirs=getDirs()
      for dir in dirs:
            if(not os.path.isfile(f'{dir}/index.html')):
                        dirs.remove(dir)
      return dirs
def getUnlistedDirs():
      dirs=getProjects()
      listdirs=getListedDirs()
      return [i for i in dirs+listdirs if i not in dirs or i not in listdirs ]

def getImagePath(dir):
      return f"images/{dir}.png"
def getProjectInfo(dir):
      info={"name":"","desc":"","website":"","code":"","image":""}
      info["name"]=dir
      info["desc"]="No description untill now"
      info["website"]=websiteLink(dir)
      info["code"]= githubCodeLink(dir)
      info["image"]=getImagePath(dir)
      return info

def generateTemplate(dir):
      info=getProjectInfo(dir)
      return template.format(name=info["name"],desc=info["desc"]
      ,img=info["image"],code=info["code"],website=info["website"])
      
def printGeneratedTemplate(template):
      with open("temp.html","a+") as f:
            f.write(f"{template}\n")

def toHtml(dir):
      printGeneratedTemplate(generateTemplate(dir))
      return

def indexFiles():
      driver=initialDriver()
      dirs=getProjects()
      indexedDirs=getListedDirs()
      for dir in dirs:
            if dir not in indexedDirs:
                  
                  try:
                        takeScreenshot(dir,driver)
                        toHtml(dir)
                        indexedDirs.append(dir)

                  except Exception as e :
                        print(e,dir)

      updateListedDirs(indexedDirs)
      closeDriver(driver)


def newHtmlProject(dir):
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




if __name__=="__main__":
      parser = argparse.ArgumentParser()      
      parser.add_argument('--newPro',type=str,help='create folder with given name')
      parser.add_argument('--allPro',help='list of all folders',action='store_true', dest='allPro')
      parser.add_argument('--liPro',help='list of all folders',action='store_true', dest='liPro')
      parser.add_argument('--unliPro',help='list of all folders',action='store_true', dest='unliPro')
      parser.add_argument('--indexAll',help='list of all folders',action='store_true', dest='indexAll')
      parser.add_argument('--genTemp',help='list of all folders',action='store_true', dest='genTemp')
      args=parser.parse_args()
      if(args.newPro):
            newHtmlProject(args.newPro)
      if(args.allPro):
            printList(getProjects())
      if(args.liPro):
            printList(getListedDirs())
      if(args.unliPro):
            printList(getUnlistedDirs())
      if(args.indexAll):
            indexFiles()
            
