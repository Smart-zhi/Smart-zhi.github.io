for(var tagEle=("querySelectorAll"in document?document.querySelectorAll(".tag-link"):getClass("tag-link")),paper=("querySelectorAll"in document?document.querySelector(".tagBall"):getClass("tagBall")[0]),allll=new Array,i=0;i<tagEle.length;i++)console.log(tagEle[i]),allll[i]={label:tagEle[i].innerText,url:tagEle[i].href};console.log(allll);var settings={entries:allll,width:230,height:230,radius:"65%",radiusMin:75,bgDraw:!0,bgColor:"#ffffff",opacityOver:1,opacityOut:.05,opacitySpeed:6,fov:800,speed:1,fontFamily:"Oswald, Arial, sans-serif",fontSize:"12",fontColor:"#000",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!0};$("#tag-cloud").svg3DTagCloud(settings);