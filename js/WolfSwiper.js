function WolfSwiper(i,t){this.options=t||{},this.direction=this.options.direction||"X",this.options.pages=0!=this.options.pages,this.swipercontainer=document.querySelector(i),this.time=this.options.time||3e3,this.swiperwrapper=this.swipercontainer.children[0],this.timer=null,this.num=1,this.startX=0,this.endX=0,this.distance=0,this.options.pages&&(this.pages=0,this.swiperpage=this.swipercontainer.children[1],this.dompages=this.swiperpage.children),this.imgs=this.swiperwrapper.children,this.oldimgslen=this.imgs.length}WolfSwiper.prototype.initPages=function(){for(var i="",t=0;t<this.oldimgslen;t++)i+=0===t?'<span class="active"></span>':"<span></span>";this.swiperpage.innerHTML=i},WolfSwiper.prototype.initBanner=function(){var i=this.imgs[0].cloneNode(!0),t=this.imgs[this.oldimgslen-1].cloneNode(!0);this.swiperwrapper.appendChild(i),this.swiperwrapper.insertBefore(t,this.imgs[0])},WolfSwiper.prototype.init=function(){this.options.pages&&this.initPages(),this.initBanner(),this.interval(),this.transitionend(),this.options.pages&&this.finger()},WolfSwiper.prototype.interval=function(){var i=this;clearInterval(this.timer),this.timer=setInterval(function(){i.autoplay()},this.time)},WolfSwiper.prototype.autoplay=function(){this.options.pages&&(this.pages++,this.changepage()),this.num++,this.banner(!0)},WolfSwiper.prototype.banner=function(i){var t=this.swiperwrapper;t.style.transition=i?"all 0.3s":"none",t.style.transform="translate"+this.direction+"("+100*-this.num+"%)"},WolfSwiper.prototype.transitionend=function(){var t=this;this.swiperwrapper.addEventListener("transitionend",function(i){t.num>=t.imgs.length-1?t.num=1:t.num<=0&&(t.num=t.imgs.length-2),t.banner(!1)})},WolfSwiper.prototype.changepage=function(){this.pages>this.oldimgslen-1?this.pages=0:this.pages<0&&(this.pages=this.oldimgslen-1);for(var i=0;i<this.dompages.length;i++){this.dompages[i].className=""}this.dompages[this.pages].className="active"},WolfSwiper.prototype.finger=function(){var t=this;this.swiperwrapper.addEventListener("touchstart",function(i){clearInterval(t.timer),t.startX=i.touches[0].pageX}),this.swiperwrapper.addEventListener("touchend",function(i){t.interval(),t.endX=i.changedTouches[0].pageX,t.distance=t.endX-t.startX,100<Math.abs(t.distance)&&(0<t.distance?(t.pages--,t.num--):(t.pages++,t.num++)),t.banner(!0),t.changepage()})};