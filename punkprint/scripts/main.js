window.addEventListener("load",function setHeadListeners(){var d=[];molecule_menu_list=document.querySelectorAll(".molecule_menu");for(var c=0;c<molecule_menu_list.length;c++){var e=molecule_menu_list[c];var b=null;var a=null;b=e.querySelector(".atom_menu-head");a=e.querySelector(".container");if((a==null)||(b==null)){continue}b.container=a;b.container.expanded=false;b.container.style.height="auto";b.container.max_height=b.container.clientHeight;b.container.style.height="0";b.menu=e;d[d.length]=b;b.addEventListener("click",function(){if(this.container.expanded==false){for(var f=0;f<d.length;f++){d[f].container.style.height="0";d[f].container.expanded=false;d[f].container.style.transition="height 0.3s ease-in-out"}this.container.style.height=this.container.max_height+"px";this.container.expanded=true;this.container.style.transition="height 0.3s ease-out"}else{this.container.style.height="0";this.container.expanded=false;this.container.style.transition="height 0.3s ease-in-out"}})}});window.addEventListener("load",function(){organism_offers_list=document.querySelectorAll(".organism_offers");for(var d=0;d<organism_offers_list.length;d++){var a=organism_offers_list[d];var e=null;var c=[];e=a.querySelector(".organism_navbar");c=a.querySelectorAll(".molecule_single-offer");function f(g){for(var h=0;h<c.length;h++){c[h].style.opacity=0;c[h].style.zIndex=0}c[g].style.opacity=1;c[g].style.zIndex=1}navbar_items=e.querySelectorAll(".atom_menu-item");for(var b=0;b<navbar_items.length;b++){navbar_items[b].item_index=b;navbar_items[b].addEventListener("mouseover",function(){f(this.item_index)})}f(0)}});
