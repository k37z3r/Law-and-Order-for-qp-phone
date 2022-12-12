/*
 .----------------. .----------------. .----------------.
| .--------------. | .--------------. | .--------------. |
| |   ______     | | |      __      | | |     ____     | |
| |  |_   _ \    | | |     /  \     | | |   .'    `.   | |
| |    | |_) |   | | |    / /\ \    | | |  /  .--.  \  | |
| |    |  __'.   | | |   / ____ \   | | |  | |    | |  | |
| |   _| |__) |  | | | _/ /    \ \_ | | |  \  `--'  /  | |
| |  |_______/   | | ||____|  |____|| | |   `.____.'   | |
| |              | | |              | | |              | |
| '--------------' | '--------------' | '--------------' |
 '----------------' '----------------' '----------------'

© Copyright 2022 all rights reserved

All contents, especially the source code of all files, are protected by copyright. All rights, including reproduction, publication, editing and translation, are reserved.
A legal version for use can be purchased at https://bao.tebex.io/
*/
var playsounds=!0,ShowLawList=null,lawerror=1,lawdata=null,doEdit=!1,cID=0,error7=0,isadmin=null,element='The data has been successfully transferred<div class="lawandorderok-buttons"><div class="lawandorderok-button" id="lawandorderok-button"><i class="fas fa-check-to-slot"></i> OK</div></div>';$("#lawandorderok").append(element);var element='The data has been successfully deleted<div class="lawandorderok-buttons"><div class="lawandorderok-button" id="lawandorderokdel-button"><i class="fas fa-check-to-slot"></i> OK</div></div>';$("#lawandorderdeleted").append(element);var element='Are you sure?<div class="lawandorderok-buttons" style="display:flex;"><div class="lawandorderok-button" id="lawsure-button" style="margin-right: .5vh;"><i class="fas fas fa-trash-can"></i> Yes</div><div class="lawandorderok-button" id="lawunsure-button" style="margin-left: .5vh;"><i class="fas fa-backward-step"></i> No</div></div>';$("#lawsure").append(element);var element=`<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: hsl(50, 100%, 50%);"><span style="color: hsl(50, 100%, 50%); filter: invert(100%);">Create Law</span></h1><div class="lawandorder-lists"><div class="divTable" style="border: 1px solid hsl(0, 0%, 0%);"><div class="divTableBody"><div class="divTableRow" id="categoryt"><div class="divTableCell">Category</div><div class="divTableCell"><select id="category" class="inputs"></select></div></div><div class="divTableRow" id="parat"><div class="divTableCell">Paragraph</div><div class="divTableCell"><input id="para" type="text" placeholder="\xa71" maxlength="10" class="inputs" /></div></div><div class="divTableRow" id="titlet"><div class="divTableCell">Title</div><div class="divTableCell"><input id="title" type="text" placeholder="Title of this Law" maxlength="50" class="inputs" /></div></div><div class="divTableRow" id="textt"><div class="divTableCell">Text</div><div class="divTableCell"><textarea cols="20" maxlength="2000" id="text" required="" rows="5" placeholder="Definition of this Law" class="inputs"></textarea></div></div><div class="divTableRow" id="minsentencet"><div class="divTableCell">Min. Sentence</div><div class="divTableCell"><input id="minsentence" type="text" placeholder="$500" maxlength="100" class="inputs" /></div></div><div class="divTableRow" id="maxsentencet"><div class="divTableCell">Max. Sentence</div><div class="divTableCell"><input id="maxsentence" type="text" placeholder="10 minutes Jail" maxlength="100" class="inputs" /></div></div></div></div><div class="lawandordercreate-buttons"><div class="lawandordercreate-button" id="lawandordercreates-button"><i class="fas fa-plus"></i> Save</div><div class="lawandordercancel-button" id="lawandordercancels-button"><i class="fas fa-eject"></i> Abort</div></div></div>`;function get_color(a){for(h=1,i=0;h<18;h++)for(s=4;s<10;s++)for(l=3;l<8;l++){if(a==i)return"hsl("+20*h+", "+10*s+"%, "+10*l+"%)";i++}}function setoptions(a){$("#category").html("");for(var a=a,b=0;b<a.length;b++){var c=document.createElement("option");c.value=a[b],c.innerHTML=a[b],document.getElementById("category").appendChild(c)}$("#category").val(a[0])}function countResults(c){for(var b=[],a=0,d=c.length;a<d;++a)b.push(c[a].category);for(a=0,keyCount={};a<b.length;++a)keyCount[b[a]]||(keyCount[b[a]]=0),keyCount[b[a]]++;return keyCount}function SetupLawAndOrder(b){if(lawdata=b,$("#lawandorderloader").show(),$(".lawandorder-button").hide(),$(".lawandorder-create").hide(),$(".lawandorder-list").html(""),$("#category").html(""),$("#lawandorderloader").fadeOut(3e3,function(){!0!==ShowLawList&&($(".lawandorder-list").show(500),ShowLawList=!0)}),b.length>0&&b.length<511){if(b.length<511){var a='<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: hsl(50, 100%, 50%);"><span style="color: hsl(50, 100%, 50%); filter: invert(100%);">Laws ('+b.length+')</span></h1><input id="lawandorderfulltextsearch" type="text" placeholder="Filter..." style="width:100%;margin-bottom:.5vh;">';$(".lawandorder-list").append(a);var a='<span id="lawsfilter" style="display:none"></span>';$(".lawandorder-list").append(a),keycount=countResults(b);var c=0;for(let d in keyCount){var a='<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: '+get_color(c)+`;cursor:pointer;" id="${d}" class="lawselement lawslist"><span style="color: `+get_color(c)+`;filter: invert(100%);">${d} (${keyCount[d]})</span></h1>`;$(".lawandorder-list").append(a),c++}}else console.log("Too Many Laws")}else{$(".lawandorder-list").append('<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: hsl(50, 100%, 50%);"><span style="color: hsl(50, 100%, 50%); filter: invert(100%);">Laws (0)</span></h1>');var a='<div class="lawandorder-lists"><div class="anarchybackground"><div class="no-lawandorder">We live in total anarchy!!!</div></div></div>';$(".lawandorder-list").append(a)}var a='<div class="lawandordercreate-buttons">'+(b.length<510?'<div class="lawandorder-button" id="lawandorders-button"><i class="fas fa-plus"></i> Create</div>':"")+'<div class="lawandorder-button" id="lawandordercatss-button"><i class="fas fa-bookmark"></i> CTGY\'s</div></div>';$(".lawandorder-list").append(a),$.post("https://qb-phone/isAdmin",JSON.stringify({}),function(a){"ok"==a&&$(".lawandorder-button").show()})}function check_min_length(){$("#category").val().length<3?($("#categoryt").css("border","3px solid hsl(360, 100%, 50%)"),error1=1):($("#categoryt").css("border","3px solid hsl(100, 100%, 50%)"),error1=0),$("#para").val().length<1?($("#parat").css("border","3px solid hsl(360, 100%, 50%)"),error2=1):($("#parat").css("border","3px solid hsl(100, 100%, 50%)"),error2=0),$("#title").val().length<3?($("#titlet").css("border","3px solid hsl(360, 100%, 50%)"),error3=1):($("#titlet").css("border","3px solid hsl(100, 100%, 50%)"),error3=0),$("#text").val().length<10?($("#textt").css("border","3px solid hsl(360, 100%, 50%)"),error4=1):($("#textt").css("border","3px solid hsl(100, 100%, 50%)"),error4=0),$("#minsentence").val().length<2?($("#minsentencet").css("border","3px solid hsl(360, 100%, 50%)"),error5=1):($("#minsentencet").css("border","3px solid hsl(100, 100%, 50%)"),error5=0),$("#maxsentence").val().length<2?($("#maxsentencet").css("border","3px solid hsl(360, 100%, 50%)"),error6=1):($("#maxsentencet").css("border","3px solid hsl(100, 100%, 50%)"),error6=0),0==(lawerror=error1+error2+error3+error4+error5+error6)?($("#lawandordercreates-button").css("background","#44bd32"),$("#lawandordercreates-button").prop("disabled",!1)):($("#lawandordercreates-button").css("background","#bebebe"),$("#lawandordercreates-button").prop("disabled",!0))}function check_input_cats(){$("#edit_category").val().length<3?($("#edit_categoryt").css("border","3px solid hsl(360, 100%, 50%)"),$("#lawandordercatssave-button").css("background","#bebebe"),$("#lawandordercatssave-button").prop("disabled",!0),error7=1):($("#edit_categoryt").css("border","3px solid hsl(100, 100%, 50%)"),$("#lawandordercatssave-button").css("background","#44bd32"),$("#lawandordercatssave-button").prop("disabled",!1),error7=0)}function keywords(c=""){var a=[];a=(c=(c=(c=c.replace(/[^A-Za-z0-9\s]/g," ")).replace(/\s+/g," ")).replace(/^\s+|\s+$/gm,"")).split(" ");for(var b=0;b<a.length;b++)a[b].length<3&&(a.splice(b,1),b--);return a=a.filter((b,c)=>a.indexOf(b)==c)}$(".lawandorder-create").append(element),$(document).on("input",".inputs",function(a){check_min_length()}),$(document).on("click","#lawandorders-button",function(a){a.preventDefault(),$.post("https://qb-phone/getLawCategories",JSON.stringify({}),function(a){setoptions(a)}),$(".lawandorder-list").fadeOut(1e3,function(){check_min_length(),$(".lawandorder-create").show(500)})}),$(document).on("click","#lawandordercreates-button",function(a){a.preventDefault(),0==lawerror&&($.post("https://qb-phone/saveLawAndOrder",JSON.stringify({category:$("#category").val(),para:$("#para").val(),legaltitle:$("#title").val(),legaltext:$("#text").val(),minsentence:$("#minsentence").val(),maxsentence:$("#maxsentence").val(),doEdit:doEdit,lawid:cID}),function(b){if("ok"==b){if(playsounds){var a=new Audio("./audio/correct-2-46134.mp3");a.volume=.2,a.play()}$("#lawandorderok").css("display","flex")}}),$(".lawandorder-list").fadeOut(1e3,function(){ShowLawList=!1,doEdit=!1,$(".lawandorder-create").show(500)}))}),$(document).on("click","#lawandorderok-button",function(a){a.preventDefault(),$("#lawandorderok").css("display","none"),$(".lawandorder-create").fadeOut(1e3,function(){$.post("https://qb-phone/GetLawAndOrder",JSON.stringify({}),function(a){SetupLawAndOrder(a),$(".lawandorder-list").show(500),ShowLawList=!0})})}),$(document).on("click","#lawandordercancels-button",function(a){a.preventDefault(),$(".lawandorder-create").fadeOut(1e3,function(){$(".lawandorder-list").show(500),ShowLawList=!0,doEdit=!1})}),$(document).on("click","#lawandorderback-button",function(a){a.preventDefault(),$(".lawandorder-read").fadeOut(1e3,function(){$(".lawandorder-list").show(500),ShowLawList=!0})}),$(document).on("click",".lawselement",function(a){cID=a.currentTarget.id,a.preventDefault(),$(".lawandorder-read").html("");var b=0;$.post("https://qb-phone/isAdmin",JSON.stringify({}),function(a){showedit="ok"==a}),$.post("https://qb-phone/GetLawAndOrder",JSON.stringify({}),function(a){var c='<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: '+get_color(i)+';"><span style="color: '+get_color(i)+';filter: invert(100%);">'+cID+"</span></h1>";for($(".lawandorder-read").append(c),i=0;i<a.length;i++)if(a[i].category==cID){var c='<div style="background:'+(b%2==0||0==b?"hsl(0, 0%, 80%)":"hsl(0, 0%, 70%)")+';" class="dummy"><input type="hidden" id="category'+a[i].lawid+'" value="'+a[i].category+'"/><input type="hidden" id="lawid'+a[i].lawid+'" value="'+a[i].lawid+'"/><label id="para'+a[i].lawid+'" style="font-weight: bold;">'+a[i].para+'</label> <label id="legaltitle'+a[i].lawid+'" style="font-weight: bold;">'+a[i].legaltitle+"</label>"+(showedit?'<i class="laweditright"><i class="fas fa-pencil lawsedit" style="color:hsl(60,100%,50%);cursor:pointer;" id="lawsedit'+a[i].lawid+'"></i>&nbsp;&nbsp;<i class="fas fa-trash-can lawdelete" style="color:hsl(360,100%,50%);cursor:pointer;" id="lawsdelete'+a[i].lawid+'"></i></i>':"")+'<br/><br/><label style="text-align: left;" id="legaltext'+a[i].lawid+'">'+a[i].legaltext+'</label><br><div class="divTable"><div class="divTableBody"><div class="divTableRow"><div class="divTableCell" style="font-weight: bold;">Punishment:</div><div class="divTableCell">From <label id="minsentence'+a[i].lawid+'">'+a[i].minsentence+'</label><br/>To <label id="maxsentence'+a[i].lawid+'">'+a[i].maxsentence+'</label></div></div></div></div></div><label id="buttons'+a[i].lawid+'"></label>';$(".lawandorder-read").append(c),b++}var c='<div class="lawandordercreate-buttons"><div class="lawandordercancel-button button-center" id="lawandorderback-button"><i class="fas fa-backward-step"></i> Back</div></div>';$(".lawandorder-read").append(c),$(".lawandorder-list").fadeOut(1e3,function(){$(".lawandorder-read").show(500)})})}),$(document).on("click","#lawandordereditcancels-button",function(a){a.preventDefault(),$(".lawandorder-read").fadeOut(1e3,function(){$(".lawandorder-list").show(500),ShowLawList=!0,doEdit=!1})}),$(document).on("click",".lawsedit",function(a){a.preventDefault();var b=$("#para"+(cID=(cID=a.currentTarget.id).replace(/lawsedit/,""))).text(),c=$("#legaltitle"+cID).text(),d=$("#legaltext"+cID).text(),e=$("#minsentence"+cID).text(),f=$("#maxsentence"+cID).text(),g=$("#category"+cID).val();$(".lawandorder-read").fadeOut(1e3,function(){$.post("https://qb-phone/getLawCategories",JSON.stringify({}),function(b){$("#category").html("");for(var a=0;a<b.length;a++){var c=document.createElement("option");c.value=b[a],b[a]==g&&(c.selected=!0),c.innerHTML=b[a],document.getElementById("category").appendChild(c)}}),$("#para").val(b),$("#title").val(c),$("#text").val(d),$("#minsentence").val(e),$("#maxsentence").val(f),$(".lawandorder-create").show(500,function(){}),doEdit=!0})}),$(document).on("click",".lawdelete",function(a){a.preventDefault(),cID=(cID=a.currentTarget.id).replace(/lawsdelete/,""),$("#lawsure").css("display","flex")}),$(document).on("click","#lawsure-button",function(a){a.preventDefault(),$.post("https://qb-phone/deleteLawAndOrder",JSON.stringify({lawid:cID}),function(b){if("ok"==b){if(playsounds){var a=new Audio("./audio/clean-fast-swooshaiff-14784.mp3");a.volume=.2,a.play()}$("#lawsure").css("display","none"),$("#lawandorderdeleted").css("display","flex")}})}),$(document).on("click","#lawunsure-button",function(a){a.preventDefault(),$("#lawsure").css("display","none")}),$(document).on("click","#lawandorderokdel-button",function(a){a.preventDefault(),$("#lawandorderdeleted").css("display","none"),$(".lawandorder-read").fadeOut(1e3,function(){$.post("https://qb-phone/GetLawAndOrder",JSON.stringify({}),function(a){SetupLawAndOrder(a),$(".lawandorder-list").show(500),ShowLawList=!0})})}),$(document).on("click","#lawandordercatss-button",function(a){a.preventDefault(),$(".lawandorder-list").fadeOut(1e3,function(){$.post("https://qb-phone/getLawCategories",JSON.stringify({}),function(c){var a='<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: hsl(50, 100%, 50%);"><span style="color: hsl(50, 100%, 50%); filter: invert(100%);">Edit Categories</span></h1>';$(".lawandorder-cats").html(""),$(".lawandorder-cats").append(a);for(var d="",b=0;b<c.length;b++)d+=(b>0?" ":"")+c[b];var a='<div class="divTable" style="border: 1px solid hsl(0, 0%, 0%); background:hsl(0, 0%, 80%);"><div class="divTableBody"><div class="divTableRow" id="edit_categoryt"><div class="divTableCell">Categories (Space seperated)</div><div class="divTableCell"><input id="edit_category" type="text" placeholder="Murder" maxlength="300" /></div></div></div></div>';$(".lawandorder-cats").append(a);var a='<div class="lawandordercreate-buttons"><div class="lawandordercreate-button" id="lawandordercatssave-button"><i class="fas fa-plus"></i> Save</div><div class="lawandordercancel-button" id="lawandordercatsback-button"><i class="fas fa-backward-step"></i> Back</div></div>';$(".lawandorder-cats").append(a),$("#edit_category").val(d),$(".lawandorder-cats").show(500),check_input_cats(),ShowLawList=!0})})}),$(document).on("input","#edit_category",function(a){check_input_cats()}),$(document).on("click","#lawandordercatssave-button",function(a){a.preventDefault(),0==error7&&($.post("https://qb-phone/saveLawAndOrderCats",JSON.stringify({categories:$("#edit_category").val()}),function(b){if("ok"==b){if(playsounds){var a=new Audio("./audio/correct-2-46134.mp3");a.volume=.2,a.play()}$("#lawandorderok").css("display","flex")}}),$(".lawandorder-cats").fadeOut(1e3,function(){$(".lawandorder-list").show(500),ShowLawList=!0}))}),$(document).on("click","#lawandordercatsback-button",function(a){a.preventDefault(),$(".lawandorder-cats").fadeOut(1e3,function(){$(".lawandorder-list").show(500),ShowLawList=!0})}),$(document).on("input","#lawandorderfulltextsearch",function(b){for($("#lawsfilter").html(""),objects=lawdata,wordlists=keywords($("#lawandorderfulltextsearch").val()),results=[],a=0,$.each(wordlists,function(d,b){for(var a=0;a<objects.length;a++){string=(string=(string=objects[a].category+" "+objects[a].legaltitle+" "+objects[a].legaltext+" "+objects[a].minsentence+" "+objects[a].maxsentence).toUpperCase()).split(" ").filter(function(a,b,c){return b==c.indexOf(a)}).join(" ");var c=new RegExp(b,"gi");null!==string.match(c)&&(results[a]=[objects[a].lawid.toString(),objects[a].category,objects[a].legaltitle,objects[a].legaltext,objects[a].minsentence,objects[a].maxsentence,objects[a].para,a],a++)}}),sum=(results=(results=results.filter(function(a){return null!=a})).sort(function(a,b){return b[7]-a[7]})).length<=0?0:results.reduce(function(a,b){return b[7]+a[7]}),i=0;i<results.length;i++){var a='<h1 style="font-size:1.641025641025641vh; padding:1.0256410256410255vh; margin-top:0; border-top-left-radius: .5vh; border-top-right-radius: .5vh; width:100%; display:block; background-color: '+get_color(i)+';cursor:pointer;" id="'+results[i][1]+'" class="lawselement"><span style="color: '+get_color(i)+';filter: invert(100%);">'+results[i][1]+"</span></h1>";$("#lawsfilter").append(a);var a='<div style="background:'+(i%2==0||0==i?"hsl(0, 0%, 80%)":"hsl(0, 0%, 70%)")+';" class="dummy"><input type="hidden" id="category'+results[i][0]+'" value="'+results[i][1]+'"/><input type="hidden" id="lawid'+results[i][0]+'" value="'+results[i][0]+'"/><label id="para'+results[i][0]+'" style="font-weight: bold;">'+results[i][6]+'</label> <label id="legaltitle'+results[i][0]+'" style="font-weight: bold;">'+results[i][2]+'</label><br/><br/><label style="text-align: left;" id="legaltext'+results[i][0]+'">'+(results[i][3].length>100?results[i][3].substr(0,100)+"...":results[i][3]);$("#lawsfilter").append(a)}$("#lawandorderfulltextsearch").val().length<=0?($(".lawslist").show(),$("#lawsfilter").hide(),ShowLawList=!0):($(".lawslist").hide(),$("#lawsfilter").show(),ShowLawList=!1)})