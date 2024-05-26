(function(){var e={6939:function(e,t,n){"use strict";var o=n(5130),i=n(6768);const s=(0,i.Lk)("header",null,[(0,i.Lk)("link",{src:"images/fav_icon.ico"})],-1);function a(e,t,n,o,a,r){const c=(0,i.g2)("Home"),l=(0,i.g2)("Introduction"),g=(0,i.g2)("ShopTour"),d=(0,i.g2)("Menu"),u=(0,i.g2)("Warning");return(0,i.uX)(),(0,i.CE)(i.FK,null,[s,(0,i.bF)(c),(0,i.bF)(l),(0,i.bF)(g),(0,i.bF)(d),(0,i.bF)(u)],64)}const r={class:"home"},c=(0,i.Lk)("img",{src:"images/cover_page/BornToBeMom_UI_bg.jpg",class:"backgroud"},null,-1),l=(0,i.Lk)("img",{src:"images/cover_page/enter_now_btn.png",class:"enter_btn"},null,-1),g=[c,l];function d(e,t,n,o,s,a){return(0,i.uX)(),(0,i.CE)("div",r,g)}var u={name:"HomePage",props:{msg:String}},m=n(1241);const p=(0,m.A)(u,[["render",d]]);var _=p;const b={class:"introduction"},h=(0,i.Lk)("img",{src:"images/teaser/Btn_skip_colorwhite.png",class:"skip_btn"},null,-1);function v(e,t,n,o,s,a){const r=(0,i.g2)("video-player");return(0,i.uX)(),(0,i.CE)("div",b,[(0,i.bF)(r,{options:s.videoOptions},null,8,["options"]),h])}const w={ref:"videoPlayer",class:"video-js"};function y(e,t,n,o,s,a){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("video",w,null,512)])}var f=n(6780),k={name:"VideoPlayer",props:{options:{type:Object,default(){return{}}}},data(){return{player:null}},mounted(){this.player=(0,f.A)(this.$refs.videoPlayer,this.options,(()=>{this.player.log("onPlayerReady",this)}))},beforeUnmount(){this.player&&this.player.dispose()}};const E=(0,m.A)(k,[["render",y]]);var j=E,M={name:"IntroductionPage",components:{VideoPlayer:j},data(){return{videoOptions:{autoplay:!1,controls:!0,fluid:!0,sources:[{src:"assets/Mothership_teaser_full_2.mp4",type:"video/mp4"}],poster:"images/teaser/img2.png"}}},mounted(){document.getElementsByClassName("skip_btn")[0].addEventListener("click",(()=>{console.log("skip_btn2 clicked"),document.querySelector(".vjs-play-control.vjs-playing")&&(document.querySelector(".vjs-play-control.vjs-playing").click(),console.log(document.querySelector(".vjs-play-control.vjs-playing").innerHTML))}))}};const O=(0,m.A)(M,[["render",v]]);var P=O;const B=(0,i.Fv)('<div id="container" class="container"></div><div id="popup"><div class="close-btn"><img src="images/Mother_content_cross.png"></div><img src="images/Mother_content.jpg" alt="Popup Image" style="width:100%;"></div><div id="welcome_popup"><img src="images/welcome/welocme.png" class="background" alt="Popup Image"><img src="images/welcome/btn_start.png" class="start_btn" alt="Popup Image"></div><div id="passport"><img src="images/ui/btn_passport_off.png"></div><div id="passportStamp"><div class="stamp-close-btn"><img src="images/ui/btn_back.png"></div><div class="stamp-reward"><img src="images/ui/btn_off_reward.png"></div><img src="images/ui/bg_epassport.png" class="stamp-bg"><img src="images/ui/egg_1.png" class="egg-stamp"></div><div id="reward_popup"><img src="images/reward/reward_msg.png" class="background" alt="Popup Image"><img src="images/reward/btn_cross.png" class="reward_cross_btn" alt="Popup Image"></div><div id="map"><img src="images/ui/btn_big_map.png"><img src="images/ui/btn_pointer.png" class="map_pointer"></div><div id="sound"><img src="images/ui/sound_off.png"></div>',8),S={id:"carousel"};function I(e,t,n,o,s,a){const r=(0,i.g2)("vue-easy-lightbox");return(0,i.uX)(),(0,i.CE)(i.FK,null,[B,(0,i.Lk)("div",S,[(0,i.bF)(r,{visible:o.visibleRef,imgs:o.imgsRef,index:o.indexRef,onHide:o.onHide},null,8,["visible","imgs","index","onHide"])])],64)}var A=n(144),C=n(8776),L=n(2951),D=n(9736),x=n(1353),R=n(8337);let N,T,q,F,H,W={},X={},z={},G={},K={},V={egg1:!1,egg2:!1,egg3:!1,egg4:!1,egg5:!1,egg6:!1,egg7:!1,egg8:!1,egg9:!1,egg10:!1,collected:0};var J={name:"ShopTour",components:{VueEasyLightbox:R.A},data(){return{isShowPopup:!1,popupContent:"You've clicked on the 3D object!",envMaps:[],currentEnvMapIndex:0,scene:(0,A.IG)(new C.Z58),renderer:null,controls:null,camera:null,raycaster:null,mouse:null,model1:null,slickOptions:{dots:!0,arrows:!0},lightbox:null}},methods:{async initThreeJS(){const e=document.getElementById("container");this.camera=new C.ubm(100,window.innerWidth/window.innerHeight,.01,1e3),this.renderer=new C.JeP({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight),e.appendChild(this.renderer.domElement),this.controls=new L.N(this.camera,this.renderer.domElement),this.controls.enableZoom=!1,this.camera.position.set(0,0,5);const t=new C.Pq0(0,0,0),n=-1*this.camera.position.distanceTo(t);this.camera.position.x=t.x-n,this.camera.position.z=t.z,this.camera.lookAt(t),this.controls.update(),await this.loadHDRBackgrounds(["room/livingroom_back.hdr","room/livingroom_front.hdr","room/kitchen.hdr","room/restroom_3.hdr","room/toilet_room_4.hdr"]);for(let i=0;i<2;i++)0!==i?1!==i||this.createFlashingArrow(this.scene,new C.Pq0(50,-20,-10)):this.createFlashingArrow(this.scene,new C.Pq0(-100,-20,10));this.addInteractiveObject(this.scene),this.raycaster=new C.tBo,this.mouse=new C.I9Y,setTimeout((()=>{this.animate()}),3e3),T=new Audio("/assets/Mothership_background_music.mp3"),T.loop=!0,T.volume=.5,F=new Audio("/assets/ttsmaker-file-2024-5-15-17-57-16.mp3"),F.volume=.8,q=new Audio("/assets/game-bonus-144751.mp3"),q.volume=1,H=new Audio("/assets/welcome_speech.mp3"),H.volume=.8,document.getElementById("passport").addEventListener("click",(()=>{this.showPassport()})),document.getElementById("sound").addEventListener("click",(()=>{this.playBackgroudSound()}));let o=document.querySelectorAll("li img.menu-img");o.forEach((e=>{e.addEventListener("click",this.handleMenuClick.bind(this))}))},handleMenuClick(e){let t=e.target.classList;t.contains("public")?this.changeHDRBackground(2,"kitchen_arrow_1"):t.contains("kitchen")?this.changeHDRBackground(2,"living_back_arrow_1"):t.contains("restroom")?this.changeHDRBackground(3,"living_back_arrow_3"):t.contains("bathroom")?this.changeHDRBackground(4,"restroom_arrow_2"):t.contains("argame")?console.log("argame clicked"):t.contains("homepage")?(this.changeHDRBackground(2,"kitchen_arrow_1"),document.getElementById("welcome_popup").style.display="block",this.playBackgroudSound(),this.playWelcomeSound()):t.contains("passport")&&this.showPassport()},onDocumentMouseDown(e){e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-e.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0);console.log("intersects.length : "+t.length);for(let n=0;n<t.length;n++){let e=t[n].object,o=5;while(e&&!e.userData.isClickable&&o>0)e=e.parent,o-=1;if(console.log("intersects[i].object.userData : "+JSON.stringify(e.userData)),console.log("object.visible : "+e.visible),e.userData.isClickable&&1==e.visible){if(e.userData.isInteractiveObject&&"teapot"==e.userData.name&&(console.log("3D object clicked"),this.isShowPopup=!0,this.showPopup()),e.userData.isInteractiveObject&&"egg"==e.userData.name){let t=e.userData.eggNum;!0===V["egg"+t]?console.log("Egg ["+t+"] Already collected"):(console.log("Egg ["+t+"] is collected, thanks"),V["egg"+t]=!0,V["collected"]+=1,10==V["collected"]&&(document.querySelector(".stamp-reward").classList.add("reward-active"),document.querySelector(".stamp-reward img").src="images/ui/btn_on_reward.png",document.querySelector(".stamp-reward.reward-active").addEventListener("click",(()=>{document.getElementById("passportStamp").style.display="none",this.showReward()})))),this.showMultiple(t)}if(e.userData.isInteractiveObject&&"eggIcon"==e.userData.name){let t=e.userData.iconNum;console.log("Egg Icon ["+t+"] Already clicked"),this.showMultiple(t)}if(e.userData.isInteractiveObjectGoToOtherRoom&&"qrcode"!=e.userData.name){const t=e.userData.name;console.log("Image object clicked : "+t);let n=0;this.currentEnvMapIndex<2&&(n=this.currentEnvMapIndex+1),this.changeHDRBackground(n,t),this.showEgg(n,t)}}}},createFlashingArrow(e){const t=new C.G_z({color:9127187}),n=new C.iNn(3,.2,3),o=new C.eaF(n,t);o.userData={isClickable:!0,isArrow:!0},o.position.copy(e),this.scene.add(o)},async loadHDRBackgrounds(e){const t=new C.BdL(this.renderer);t.compileEquirectangularShader(),this.envMaps=[];const n=e.map((e=>new Promise(((t,n)=>{console.log(e),(new D.Y).setPath("images/").load(e,(function(e){e.mapping=C.wfO;const n=e;e.dispose(),t(n)}),void 0,n)}))));Promise.all(n).then((e=>{console.log("--------"),this.envMaps=e,console.log(this.envMaps),console.log(this.envMaps[0]),this.scene.background=this.envMaps[0],this.scene.environment=this.envMaps[0]})).finally((()=>{t.dispose()}))},changeHDRBackground(e,t){let n="",o="";switch(t){case"living_back_arrow_1":n=this.envMaps[0],o=this.envMaps[2];break;case"living_back_arrow_2":n=this.envMaps[0],o=this.envMaps[1];break;case"living_back_arrow_3":n=this.envMaps[0],o=this.envMaps[3];break;case"living_front_arrow_1":n=this.envMaps[1],o=this.envMaps[0];break;case"kitchen_arrow_1":n=this.envMaps[2],o=this.envMaps[0];break;case"restroom_arrow_1":n=this.envMaps[3],o=this.envMaps[0];break;case"restroom_arrow_2":n=this.envMaps[3],o=this.envMaps[4];break;case"bathroom_arrow_1":n=this.envMaps[4],o=this.envMaps[3];break}let i=0;const s=()=>{i+=.05,i<=1?(this.scene.environment=C.cj9.lerp(n,o,i),requestAnimationFrame(s)):(console.log("Finished animation"),this.scene.background=o,this.scene.environment=o,this.currentEnvMapIndex=e)},a=["living_back_arrow_1","living_back_arrow_2","living_back_arrow_3","living_front_arrow_1","kitchen_arrow_1","restroom_arrow_1","restroom_arrow_2","bathroom_arrow_1"];switch(a.forEach((e=>{z[e].visible=!1,G[e].visible=!1})),t){case"living_back_arrow_1":z["kitchen_arrow_1"].visible=!0,G["kitchen_arrow_1"].visible=!0;break;case"living_back_arrow_2":z["living_front_arrow_1"].visible=!0,G["living_front_arrow_1"].visible=!0;break;case"living_back_arrow_3":z["restroom_arrow_1"].visible=!0,G["restroom_arrow_1"].visible=!0,z["restroom_arrow_2"].visible=!0,G["restroom_arrow_2"].visible=!0,this.updatePointer();break;case"living_front_arrow_1":z["living_back_arrow_1"].visible=!0,G["living_back_arrow_1"].visible=!0,z["living_back_arrow_2"].visible=!0,G["living_back_arrow_2"].visible=!0,z["living_back_arrow_3"].visible=!0,G["living_back_arrow_3"].visible=!0;break;case"kitchen_arrow_1":z["living_back_arrow_1"].visible=!0,G["living_back_arrow_1"].visible=!0,z["living_back_arrow_2"].visible=!0,G["living_back_arrow_2"].visible=!0,z["living_back_arrow_3"].visible=!0,G["living_back_arrow_3"].visible=!0;break;case"restroom_arrow_1":z["living_back_arrow_1"].visible=!0,G["living_back_arrow_1"].visible=!0,z["living_back_arrow_2"].visible=!0,G["living_back_arrow_2"].visible=!0,z["living_back_arrow_3"].visible=!0,G["living_back_arrow_3"].visible=!0,this.updatePointer();break;case"restroom_arrow_2":z["bathroom_arrow_1"].visible=!0,G["bathroom_arrow_1"].visible=!0;break;case"bathroom_arrow_1":z["restroom_arrow_1"].visible=!0,G["restroom_arrow_1"].visible=!0,z["restroom_arrow_2"].visible=!0,G["restroom_arrow_2"].visible=!0;break}this.camera.position.set(0,0,5);const r=new C.Pq0(0,0,0),c=this.camera.position.distanceTo(r);this.camera.position.x=r.x-c,this.camera.position.z=r.z,requestAnimationFrame(s)},addInteractiveObject(){const e=new x.B;e.load("images/reward/Reward/medal_gold2.glb",(e=>{N=e.scene,N.position.set(0,0,0),N.rotation.y=-1*Math.PI/2,N.scale.set(.1,.1,.1),N.userData={name:"medal",isClickable:!0,isInteractiveObject:!0},N.lookAt(this.camera.position),N.visible=!1,this.scene.add(N)}),void 0,(function(e){console.error(e)})),this.addArrow("living_back_arrow_1","2_btn_kitchen_on.png",1,!0,50,-20,0),this.addArrow("living_back_arrow_2","1_btn_public_area_on.png",1,!0,-25,-20,0),this.addArrow("living_back_arrow_3","3_btn_restroom_on.png",1,!0,50,-20,75),this.addArrow("living_front_arrow_1","1_btn_public_area_on.png",1,!1,60,-20,-2),this.addArrow("kitchen_arrow_1","1_btn_public_area_on.png",1,!1,-50,-20,-2),this.addArrow("restroom_arrow_1","1_btn_public_area_on.png",1,!1,50,-20,65),this.addArrow("restroom_arrow_2","4_btn_bathroom_on.png",1,!1,-50,-20,20),this.addArrow("bathroom_arrow_1","3_btn_restroom_on.png",1,!1,32,-30,-58),this.initialEgg("eggObj1",1,!0,-27,15,20,[-26,0,13],.6),this.initialEgg("eggObj2",2,!0,-5,-12,40,[0,0,34],.8),this.initialEgg("eggObj3",3,!1,5,-10,-40,[0,0,-42],.9),this.initialEgg("eggObj4",4,!1,-5,-20,40,[1,0,34],.6),this.initialEgg("eggObj5",5,!1,29,-10,-30,[27,0,-36],.9),this.initialEgg("eggObj6",6,!1,27,-10,-20,[25,0,-26],.9),this.initialEgg("eggObj7",7,!1,-27,-10,-60,[-22,0,-66],.8),this.initialEgg("eggObj8",8,!1,-5,-12,40,[0,0,34],.7),this.initialEgg("eggObj9",9,!1,-27,-10,-60,[-22,0,-66],.6),this.initialEgg("eggObj10",10,!1,-5,-12,40,[1,0,34],.7),this.addQRSign()},addQRSign(){const e=new C.Tap;e.load("images/menu/5_btn_AR_game_on.png",(e=>{const t=new C.bdM(1,1),n=new C.V9B({map:e,transparent:!0,side:C.$EB}),o=new C.eaF(t,n);o.position.set(40,-22,0),o.lookAt(this.camera.position),o.scale.set(25,8,10),o.userData={name:"qrcode",isClickable:!0,isInteractiveObjectGoToOtherRoom:!0,signNum:1,isArrow:!1,x:1},o.visible=!1,this.scene.add(o),K["qrcode"]=o}),void 0,(function(e){console.error("An error occurred loading the arrow texture:",e)}))},addArrow(e,t,n,o,i,s,a){const r=new C.Tap;r.load("images/Mother_arrow.png",(t=>{const r=new C.RoJ({map:t,transparent:!0}),c=new C.kxk(r);c.position.set(i,s,a),c.scale.set(10,8,10),c.userData={name:e,isClickable:!0,isInteractiveObjectGoToOtherRoom:!0,arrowNum:n,isArrow:!0},c.visible=o,this.scene.add(c),z[e]=c}),void 0,(function(e){console.error("An error occurred loading the arrow texture:",e)}));const c=new C.Tap;c.load("images/menu/"+t,(t=>{const r=new C.bdM(1,1),c=new C.V9B({map:t,transparent:!0,side:C.$EB}),l=new C.eaF(r,c);l.position.set(i,s+10,a),l.lookAt(this.camera.position),l.scale.set(25,8,10),l.userData={name:e,isClickable:!0,isInteractiveObjectGoToOtherRoom:!0,signNum:n,isArrow:!1},l.visible=o,this.scene.add(l),G[e]=l}),void 0,(function(e){console.error("An error occurred loading the arrow texture:",e)}))},initialEgg(e,t,n,o,i,s,a,r=.1){const c=new x.B;c.load("images/egg_bubble2.glb",(a=>{const c=a.scene;c.position.set(o,i,s),c.rotation.y=-1*Math.PI/2,c.scale.set(3,3,3),c.userData={name:"egg",isClickable:!0,isInteractiveObject:!0,eggNum:t,collected:!1,movementFactor:r},c.visible=n,this.scene.add(c),W[e]=c}),void 0,(function(e){console.error(e)}));const l=new C.Tap;l.load("images/ui/btn_discover.png",(o=>{const i=new C.bdM(1,1),s=new C.V9B({map:o,transparent:!0,side:C.$EB}),r=new C.eaF(i,s);r.position.set(a[0],a[1],a[2]),r.lookAt(this.camera.position),r.scale.set(3,3,3),r.userData={name:"eggIcon",isClickable:!0,isInteractiveObject:!0,iconNum:t,isArrow:!1},r.visible=n,this.scene.add(r),X[e]=r}),void 0,(function(e){console.error("An error occurred loading the arrow texture:",e)}))},showEgg(e,t){console.log("showEgg newIndex : "+e),console.log("showEgg arrowKey : "+t);for(let n=1;n<=10;n++)W["eggObj"+n].visible=!1,X["eggObj"+n].visible=!1;switch(K["qrcode"].visible=!1,t){case"living_back_arrow_1":W["eggObj4"].visible=!0,X["eggObj4"].visible=!0,W["eggObj5"].visible=!0,X["eggObj5"].visible=!0;break;case"living_back_arrow_2":W["eggObj3"].visible=!0,X["eggObj3"].visible=!0;break;case"living_front_arrow_1":case"kitchen_arrow_1":case"restroom_arrow_1":W["eggObj1"].visible=!0,X["eggObj1"].visible=!0,W["eggObj2"].visible=!0,X["eggObj2"].visible=!0;break;case"living_back_arrow_3":case"bathroom_arrow_1":W["eggObj6"].visible=!0,X["eggObj6"].visible=!0,W["eggObj7"].visible=!0,X["eggObj7"].visible=!0,W["eggObj8"].visible=!0,X["eggObj8"].visible=!0;break;case"restroom_arrow_2":W["eggObj9"].visible=!0,X["eggObj9"].visible=!0,W["eggObj10"].visible=!0,X["eggObj10"].visible=!0,K["qrcode"].visible=!1;break}},showPopup(){document.getElementById("popup").style.display="block",document.querySelector(".close-btn").addEventListener("mousedown",(e=>{e.preventDefault(),e.stopPropagation(),document.getElementById("popup").style.display="none",this.isShowPopup=!1}))},showPassport(){document.getElementById("passportStamp").style.display="block";const e=V["collected"];console.log("collected : "+e),e>0&&(document.querySelector(".egg-stamp").style.display="inline",document.querySelector(".egg-stamp").src="images/ui/egg_"+e+".png"),document.querySelector(".stamp-close-btn").addEventListener("mousedown",(e=>{e.preventDefault(),e.stopPropagation(),document.getElementById("passportStamp").style.display="none",this.isShowPopup=!1}))},showReward(){N.lookAt(this.camera.position),N.visible=!0,this.playRewardSound(),this.playRewardScriptSound(),document.getElementById("reward_popup").style.display="block",document.querySelector(".reward_cross_btn").addEventListener("mousedown",(e=>{e.preventDefault(),e.stopPropagation(),document.getElementById("reward_popup").style.display="none",N.visible=!1,this.isShowPopup=!1,this.stopRewardSound(),this.stopRewardScriptSound()}))},updatePointer(){let e=document.querySelector("#map .map_pointer");e.classList.contains("first_floor")?e.classList.remove("first_floor"):document.querySelector("#map .map_pointer").classList.add("first_floor")},playBackgroudSound(){let e=document.querySelector("#sound img");e.src.includes("sound_on")?(e.src="images/ui/sound_off.png",T.pause()):(T.currentTime=0,e.src="images/ui/sound_on.png",T.play())},stopBackgroudSound(){T.pause()},playRewardSound(){q.currentTime=0,q.play()},stopRewardSound(){q.pause()},playRewardScriptSound(){F.currentTime=0,F.play()},stopRewardScriptSound(){F.pause()},playWelcomeSound(){H.currentTime=0,H.play()},stopWelcomeSound(){H.pause()},animate(){if(requestAnimationFrame(this.animate),this.controls.update(),N){const e=.002*Date.now();N.position.y=.3*Math.sin(e)}for(let e=1;e<=10;e++){const t=.002*Date.now();W["eggObj"+e].position.y=.5*Math.sin(t)*W["eggObj"+e].userData.movementFactor}this.lightbox=this.renderer.render(this.scene,this.camera)}},mounted(){this.initThreeJS(),document.addEventListener("mousedown",this.onDocumentMouseDown.bind(this)),document.getElementsByClassName("start_btn")[0].addEventListener("click",(()=>{document.getElementById("welcome_popup").style.display="none",this.stopWelcomeSound(),this.playBackgroudSound()}))},setup(){const e=(0,A.KR)(!1),t=(0,A.KR)(0),n=(0,A.KR)([]),o=()=>{e.value=!0},i=e=>{switch(console.log("showMultiple - eggNum : "+e),e){case 1:n.value=["/images/egg_content/1/Mother_content_Page1_1.jpg","/images/egg_content/1/Mother_content_Page1_2.jpg","/images/egg_content/1/Mother_content_Page1_3.jpg"];break;case 2:n.value=["/images/egg_content/2/Mother_content_Page2_1.jpg","/images/egg_content/2/Mother_content_Page2_2.jpg","/images/egg_content/2/Mother_content_Page2_3.jpg"];break;case 3:n.value=["/images/egg_content/3/Mother_content_Page3_1.jpg","/images/egg_content/3/Mother_content_Page3_2.jpg","/images/egg_content/3/Mother_content_Page3_3.jpg"];break;case 4:n.value=["/images/egg_content/4/Mother_content_Page4_1.jpg","/images/egg_content/4/Mother_content_Page4_2.jpg"];break;case 5:n.value=["/images/egg_content/5/Mother_content_Page5_1.jpg","/images/egg_content/5/Mother_content_Page5_2.jpg"];break;case 6:n.value=["/images/egg_content/6/Mother_content_Page6_1.jpg","/images/egg_content/6/Mother_content_Page6_2.jpg"];break;case 7:n.value=["/images/egg_content/7/Mother_content_Page7_1.jpg","/images/egg_content/7/Mother_content_Page7_2.jpg","/images/egg_content/7/Mother_content_Page7_3.jpg"];break;case 8:n.value=["/images/egg_content/8/Mother_content_Page8_1.jpg","/images/egg_content/8/Mother_content_Page8_2.jpg","/images/egg_content/8/Mother_content_Page8_3.jpg","/images/egg_content/8/Mother_content_Page8_4.jpg"];break;case 9:n.value=["/images/egg_content/9/Mother_content_Page9_1.jpg","/images/egg_content/9/Mother_content_Page9_2.jpg","/images/egg_content/9/Mother_content_Page9_3.jpg"];break;case 10:n.value=["/images/egg_content/10/Mother_content_Page10_1.jpg","/images/egg_content/10/Mother_content_Page10_2.jpg"];break;default:n.value=["http://via.placeholder.com/350x150","http://via.placeholder.com/350x150"]}t.value=0,console.log("image loader index : "+e),o()},s=()=>e.value=!1;return{visibleRef:e,indexRef:t,imgsRef:n,showMultiple:i,onHide:s}}};const Y=(0,m.A)(J,[["render",I]]);var $=Y;const Q={class:"menu-container"},U=(0,i.Fv)('<div class="menu-icon" id="menuIcon"><div class="icon"></div><div class="menu" id="menu"><div class="menu-header"><div class="menu-title"><img src="/images/menu/menu_txt.png"></div></div><ul><li><a href="#"><img src="/images/menu/1_btn_public_area_off.png" class="public menu-img"></a></li><li><a href="#"><img src="/images/menu/2_btn_kitchen_off.png" class="kitchen menu-img"></a></li><li><a href="#"><img src="/images/menu/3_btn_restroom_off.png" class="restroom menu-img"></a></li><li><a href="#"><img src="/images/menu/4_btn_bathroom_off.png" class="bathroom menu-img"></a></li><li><a href="#"><img src="/images/menu/5_btn_AR_game_off.png" class="argame menu-img"></a></li><li><a href="#"><img src="/images/menu/6_btn_Homepage_off.png" class="homepage menu-img"></a></li><li><a href="#"><img src="/images/menu/7_btn_epassport_off.png" class="passport menu-img"></a></li></ul></div></div>',1),Z=[U];function ee(e,t,n,o,s,a){return(0,i.uX)(),(0,i.CE)("div",Q,Z)}var te={name:"MenuPage",setup(){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("menuIcon"),t=document.getElementById("menu"),n=!1;e.addEventListener("mouseover",(function(){t.style.display="block",setTimeout((function(){t.style.opacity="1"}),10)})),e.addEventListener("mouseout",(function(){n||i()})),t.addEventListener("mouseover",(function(){n=!0})),t.addEventListener("mouseout",(function(){n=!1,i()}));let o=document.querySelectorAll("li img.menu-img");function i(){t.style.opacity="0",setTimeout((function(){n||(t.style.display="none")}),500)}o.forEach((e=>{e.addEventListener("mouseover",(function(){this.src=this.src.replace("off","on"),console.log(this.classList+"mouseover")})),e.addEventListener("mouseout",(function(){this.src=this.src.replace("on","off"),console.log(this.classList+"mouseout")}))}))}))}};const ne=(0,m.A)(te,[["render",ee]]);var oe=ne;const ie={class:"warning"},se=(0,i.Lk)("img",{src:"images/ui/desktop_notice2.png",class:"backgroud"},null,-1),ae=(0,i.Lk)("div",{class:"message"},[(0,i.eW)(" This experience is best viewed on desktop. "),(0,i.Lk)("br"),(0,i.eW)(" Save for later by sending it to your "),(0,i.Lk)("a",{href:"mailto:example@example.com?subject=Born to be a Mom virtual exhibition&body=Experience the virtual exhibition in 360 <a href='http://localhost:8080/'>Link</a>."},"email"),(0,i.eW)(". ")],-1),re=[se,ae];function ce(e,t,n,o,s,a){return(0,i.uX)(),(0,i.CE)("div",ie,re)}var le={name:"WarningPage",props:{msg:String}};const ge=(0,m.A)(le,[["render",ce]]);var de=ge;let ue;var me={name:"App",components:{Home:_,Introduction:P,ShopTour:$,Menu:oe,Warning:de},methods:{},mounted(){ue=new Audio("/assets/welcome_speech.mp3"),ue.volume=.8,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(document.getElementsByClassName("home")[0].style.display="none",document.getElementsByClassName("introduction")[0].style.display="none",document.getElementsByClassName("container")[0].style.display="none",document.getElementById("passport").style.display="none",document.getElementById("map").style.display="none",document.getElementById("sound").style.display="none",document.getElementsByClassName("menu-container")[0].style.display="none",document.getElementsByClassName("warning")[0].style.display="block"):(document.getElementsByClassName("home")[0].style.display="block",document.getElementsByClassName("introduction")[0].style.display="none",document.getElementsByClassName("container")[0].style.display="none",document.getElementById("passport").style.display="none",document.getElementById("map").style.display="none",document.getElementById("sound").style.display="none",document.getElementsByClassName("menu-container")[0].style.display="none",document.getElementsByClassName("warning")[0].style.display="none",document.getElementsByClassName("enter_btn")[0].addEventListener("click",(()=>{/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("You are not on a desktop device."):(document.getElementsByClassName("home")[0].style.display="none",document.getElementsByClassName("introduction")[0].style.display="block",document.getElementsByClassName("container")[0].style.display="none",document.getElementById("passport").style.display="none",console.log("skip_btn2 clicked"),document.querySelector(".vjs-big-play-button")&&(document.querySelector(".vjs-big-play-button").click(),console.log(document.querySelector(".vjs-big-play-button").innerHTML)))})),document.getElementsByClassName("skip_btn")[0].addEventListener("click",(()=>{console.log("skip_btn1 clicked"),document.getElementsByClassName("home")[0].style.display="none",document.getElementsByClassName("introduction")[0].style.display="none",document.getElementsByClassName("container")[0].style.display="block",document.getElementById("welcome_popup").style.display="block",document.getElementById("passport").style.display="block",document.getElementById("map").style.display="block",document.getElementById("sound").style.display="block",document.getElementsByClassName("menu-container")[0].style.display="block",ue.currentTime=0,ue.play(),document.getElementsByClassName("start_btn")[0].addEventListener("click",(()=>{ue.pause()}))})))},data:()=>({items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]})};const pe=(0,m.A)(me,[["render",a]]);var _e=pe,be=(n(5524),n(5888)),he=(0,be.$N)();async function ve(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ve(),(0,o.Ef)(_e).use(he).mount("#app")},542:function(){}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,s){if(!o){var a=1/0;for(g=0;g<e.length;g++){o=e[g][0],i=e[g][1],s=e[g][2];for(var r=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(r=!1,s<a&&(a=s));if(r){e.splice(g--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var g=e.length;g>0&&e[g-1][2]>s;g--)e[g]=e[g-1];e[g]=[o,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"===typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"===typeof o.then)return o}var s=Object.create(null);n.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var r=2&i&&o;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){a[e]=function(){return o[e]}}));return a["default"]=function(){return o},n.d(s,a),s}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.f573b607.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="virtual-tour:";n.l=function(o,i,s,a){if(e[o])e[o].push(i);else{var r,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),g=0;g<l.length;g++){var d=l[g];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+s){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+s),r.src=o),e[o]=[i];var u=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var s=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=s);var a=n.p+n.u(t),r=new Error,c=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",r.name="ChunkLoadError",r.type=s,r.request=a,i[1](r)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,s,a=o[0],r=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var g=c(n)}for(t&&t(o);l<a.length;l++)s=a[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(g)},o=self["webpackChunkvirtual_tour"]=self["webpackChunkvirtual_tour"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(6939)}));o=n.O(o)})();
//# sourceMappingURL=app.e70d807d.js.map